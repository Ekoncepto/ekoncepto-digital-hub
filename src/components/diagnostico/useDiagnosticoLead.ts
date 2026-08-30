/**
 * Hook compartilhado entre DiagnosticoQuiz e ProactiveChat.
 *
 * Responsabilidades:
 *  - Ler/escrever respostas no localStorage (para continuar de onde parou
 *    caso o usuário alterne entre quiz e chat, ou recarregue a página).
 *  - Capturar `source` da query string (?source=hero) para atribuição.
 *  - Submeter o lead finalizado para o webhook do Google Sheets.
 *  - Construir a mensagem personalizada de WhatsApp pós-diagnóstico.
 */
import { useCallback, useEffect, useState } from 'react';
import {
  buildDiagnosticMessage,
  buildDiagnosticInsight,
  whatsappDirectLink,
} from '@/config/site';
import {
  DIAGNOSTICO_STORAGE_KEY,
  QUIZ_QUESTIONS,
  QUIZ_LABELS,
} from '@/config/diagnostico-quiz';

/**
 * Transforma os insights do diagnóstico (array de objetos) num texto
 * legível pra gravar na planilha. Cada insight vira uma linha no formato:
 * "[ALTA] Título: descrição"
 */
function insightsToText(answers: Record<string, string>): string {
  const insights = buildDiagnosticInsight(answers);
  return insights
    .map(
      (i) =>
        `[${i.prioridade.toUpperCase()}] ${i.titulo}: ${i.descricao}`
    )
    .join('\n\n');
}

/**
 * URL do webhook do Google Sheets.
 *
 * Lida AQUI (no componente client) e não no site.ts compartilhado, porque
 * o site.ts é importado tanto por .astro (server/frontmatter) quanto por
 * componentes React (client). Em módulos compartilhados, o Vite/Astro pode
 * não conseguir substituir `import.meta.env.VITE_*` estaticamente no bundle
 * do browser, deixando a variável como undefined/string vazia mesmo quando
 * o .env está correto. Lendo aqui, garantimos que o Vite faça a substituição
 * no momento do build do client.
 *
 * DEBUG temporário: loga o valor em runtime pra confirmar se chegou ao browser.
 */
const GOOGLE_SHEETS_WEBHOOK_URL =
  import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL || '';

export type DiagnosticoAnswers = Record<string, string>;

export type SubmitResult = {
  ok: boolean;
  whatsappUrl: string;
};

/** Captura o `source` da URL (?source=hero) para atribuir a origem do lead. */
function readSourceFromUrl(): string {
  if (typeof window === 'undefined') return 'direct';
  const params = new URLSearchParams(window.location.search);
  return params.get('source') || 'direct';
}

/** Lê respostas salvas (se houver) do localStorage. */
function readStoredAnswers(): DiagnosticoAnswers {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(DIAGNOSTICO_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as DiagnosticoAnswers) : {};
  } catch {
    return {};
  }
}

/**
 * Validação leve, sem Zod, para os campos de texto do bloco de contato.
 * Mantém o bundle menor e a UX simples.
 *
 * Retorna null se válido, ou mensagem de erro.
 * `required` controla se campo vazio é aceito (email é opcional).
 */
export function validateField(
  id: string,
  value: string,
  required = true
): string | null {
  const v = value.trim();
  if (!v) return required ? 'Este campo é obrigatório.' : null;

  if (id === 'nome') {
    if (v.length < 2) return 'Digite ao menos 2 caracteres.';
    return null;
  }
  if (id === 'whatsapp') {
    // aceita celular/telefone com pelo menos 10 dígitos (DDD + número)
    const digits = v.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 15) {
      return 'Digite um WhatsApp válido com DDD. Ex: (11) 99999-9999';
    }
    return null;
  }
  if (id === 'email') {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (!isEmail) return 'Digite um e-mail válido.';
    return null;
  }
  return null;
}

export function useDiagnosticoLead() {
  const [answers, setAnswers] = useState<DiagnosticoAnswers>({});
  const [source] = useState<string>(readSourceFromUrl);

  // Hidrata do localStorage na mount e sempre que answers muda persiste.
  useEffect(() => {
    const stored = readStoredAnswers();
    if (Object.keys(stored).length) setAnswers(stored);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(DIAGNOSTICO_STORAGE_KEY, JSON.stringify(answers));
    } catch {
      /* localStorage indisponível (modo privado etc.) — ignora */
    }
  }, [answers]);

  const setAnswer = useCallback((id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }, []);

  /**
   * Substitui TODAS as respostas de uma vez (inclusive remoções). Usado
   * quando o fluxo volta/muda branch e respostas anteriores deixam de ser
   * válidas (ex.: trocar a dor remove detalhes órfãos do localStorage).
   */
  const setAllAnswers = useCallback((next: DiagnosticoAnswers) => {
    setAnswers(next);
  }, []);

  const clearAnswers = useCallback(() => {
    setAnswers({});
    try {
      window.localStorage.removeItem(DIAGNOSTICO_STORAGE_KEY);
    } catch {
      /* noop */
    }
  }, []);

  /**
   * Envia o lead para o Google Sheets e devolve a URL de WhatsApp
   * personalizada. Em caso de erro de rede, ainda devolve a URL de
   * WhatsApp (o lead não fica bloqueado — só não grava no Sheets).
   *
   * `opts.disqualified = true` (lead descartado, ex: "Ainda não vendo"):
   *  - GRAVA na planilha com source sufixado "-descartado" (métrica de
   *    tráfego desqualificado) e diagnostico prefixado com [DESCARTADO];
   *  - NÃO dispara conversão do Google Ads nem eventos do ChatGPT Ads
   *    (lead ruim não pode poluir as métricas de conversão).
   */
  const submitLead = useCallback(
    async (
      finalAnswers?: DiagnosticoAnswers,
      opts?: { disqualified?: boolean }
    ): Promise<SubmitResult> => {
      const data = finalAnswers ?? answers;
      const disqualified = opts?.disqualified ?? false;
      const message = buildDiagnosticMessage(data, source);
      const whatsappUrl = whatsappDirectLink('default', message);

      // Honeypot: campo que só bots preenchem. Se vier, descarta silenciosamente.
      const payload = {
        formName: 'diagnostico',
        source: disqualified ? `${source}-descartado` : source,
        ...data,
        // Diagnóstico gerado automaticamente (os mesmos insights que
        // aparecem na tela de sucesso). Útil pra você saber exatamente o
        // que o lead leu antes de falar com você.
        diagnostico:
          (disqualified ? '[DESCARTADO — quer começar do zero] ' : '') +
          insightsToText(data),
        // metadados úteis para auditoria
        _timestamp: new Date().toISOString(),
        _referrer: typeof document !== 'undefined' ? document.referrer : '',
        _userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        _page: typeof window !== 'undefined' ? window.location.pathname : '',
      };

      // Event ID para atribuição/deduplicação da conversão no ChatGPT Ads.
      const eventId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

      // ===== Conversões: SÓ para leads QUALIFICADOS =====
      // Lead descartado não conta conversão em nenhuma plataforma.
      if (!disqualified) {
        // Conversão do Google Ads (AW-18388566804).
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-18388566804/071vCNLjqeEcEJSGrcBE',
          });
        }

        // Pixel client-side do ChatGPT Ads (OpenAI):
        // 1) "lead_created" — evento de fonte de dados.
        if (typeof window !== 'undefined' && typeof window.oaiq === 'function') {
          window.oaiq('measure', 'lead_created', {
            type: 'customer_action',
            event_id: eventId,
          });

          // 2) "registration_completed" — evento de CONVERSÃO do ChatGPT
          //    Ads (ação configurada no painel). Mesmo momento: submit.
          window.oaiq('measure', 'registration_completed', {
            type: 'customer_action',
            amount: 0,
            currency: 'USD',
          });
        }
      }

      // 2) Google Sheets — grava os dados do lead.
      // Não bloqueia a UX se o webhook não estiver configurado — apenas pula.
      if (!GOOGLE_SHEETS_WEBHOOK_URL) {
        // eslint-disable-next-line no-console
        console.warn(
          '[diagnostico] VITE_GOOGLE_SHEETS_WEBHOOK_URL não configurado — lead não será salvo. Verifique GOOGLE_SHEETS_SETUP.md.'
        );
        return { ok: false, whatsappUrl };
      }

      try {
        // CORREÇÃO CRÍTICA: Apps Script cross-origin exige Content-Type
        // text/plain (CORS-safelisted, não dispara preflight). Com
        // application/x-www-form-urlencoded + mode:'no-cors', o navegador
        // reescreve o header pra text/plain silenciosamente, MAS o body
        // continua url-encoded — e o Apps Script não parseia como form,
        // deixando e.parameter vazio. Solução: mandar JSON em text/plain
        // e fazer JSON.parse(e.postData.contents) no script.
        await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
          mode: 'no-cors',
          redirect: 'follow',
        });

        return { ok: true, whatsappUrl };
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('[diagnostico] erro ao salvar lead:', err);
        return { ok: false, whatsappUrl };
      }
    },
    [answers, source]
  );

  /** Constrói só a URL de WhatsApp (sem submeter) — usada em botões de escape. */
  const buildWhatsAppUrl = useCallback(
    (finalAnswers?: DiagnosticoAnswers) => {
      const data = finalAnswers ?? answers;
      if (Object.keys(data).length === 0) return whatsappDirectLink(source);
      return whatsappDirectLink('default', buildDiagnosticMessage(data, source));
    },
    [answers, source]
  );

  return {
    answers,
    setAnswer,
    setAllAnswers,
    clearAnswers,
    submitLead,
    buildWhatsAppUrl,
    source,
    totalSteps: QUIZ_QUESTIONS.length,
    labels: QUIZ_LABELS,
  };
}
