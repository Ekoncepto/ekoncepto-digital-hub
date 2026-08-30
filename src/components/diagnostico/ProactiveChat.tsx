/**
 * Chat proativo — botão flutuante unificado (visual WhatsApp).
 *
 * Fluxo completo dentro do próprio chat (não manda pra outra página):
 *  1) Perguntas de escolha (faturamento, canais multi com logos, dores multi
 *     e follow-ups por dor) — formato conversa com typing indicator.
 *  2) 4 perguntas de contato (nome, empresa, WhatsApp, email) — input de
 *     texto dentro do chat, com validação.
 *  3) Submissão pro Google Sheets + pixel ChatGPT Ads.
 *  4) Tela final: botão abre WhatsApp com mensagem personalizada.
 *
 * Aparece em todas as páginas EXCETO /diagnostico (suprimido via state).
 * Auto-abre após 45s ou em exit-intent. Sem botão de escape — o usuário
 * completa o fluxo ou fecha o chat (X no header).
 */
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Loader2, Send, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  PROACTIVE_CHAT_DELAY_MS,
  QUIZ_QUESTIONS,
  CONTACT_FIELDS,
  getActiveQuestions,
  multiLabel,
  type QuizAnswers,
} from '@/config/diagnostico-quiz';
import { useDiagnosticoLead, validateField } from './useDiagnosticoLead';
import { buildDiagnosticInsight, type DiagnosticInsight } from '@/config/site';

type ChatMsg = {
  id: number;
  from: 'bot' | 'user';
  text: string;
};

type ChatPhase =
  | 'idle'
  | 'open'
  | 'typing'
  | 'input-quiz' // esperando resposta de escolha (single ou multi)
  | 'input-contact' // esperando texto de contato (nome, empresa, etc)
  | 'submitting'
  | 'done';

const TYPING_DELAY_MS = 650;

/** Versão "fala" de cada pergunta, mais conversacional que o quiz. */
const QUESTION_PROMPTS: Record<string, string> = {
  faturamento: 'Oi! 👋 Pra te indicar o caminho certo: quanto sua empresa fatura por mês?',
  marketplace:
    'Legal! E onde você vende hoje? Pode marcar mais de um 👇',
  dor: 'Entendi. E qual a sua maior dor hoje? (pode marcar até 2)',
  'detalhe-nao-vende': 'Sobre vender mais: o que você acha que trava suas vendas?',
  'detalhe-vende-pouco': 'E como estão suas visitas nos anúncios?',
  'detalhe-margem': 'Sobre margem: o que mais pesa no seu custo?',
  'detalhe-escalar': 'Sobre escalar: o que impede você de crescer?',
  'detalhe-tempo': 'Sobre tempo: o que mais consome o seu dia a dia?',
};

/** Prompts conversacionais para os campos de contato. */
const CONTACT_PROMPTS: Record<string, string> = {
  nome: 'Perfeito! Como você se chama?',
  empresa: 'Prazer, {nome}! Qual o nome da sua empresa ou loja? (pode pular)',
  whatsapp: 'E qual seu WhatsApp pra eu te mandar o diagnóstico?',
  email: 'Por último, qual seu e-mail? (opcional — pode pular)',
};

/** Ordem dos campos de contato (mesma do ContactForm). */
const CONTACT_ORDER = ['nome', 'empresa', 'whatsapp', 'email'] as const;

export default function ProactiveChat() {
  const { answers, setAnswer, setAllAnswers, submitLead } = useDiagnosticoLead();
  const [phase, setPhase] = useState<ChatPhase>('idle');
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [hasOpened, setHasOpened] = useState(false);

  // Perguntas visíveis (branching por dor). Recalculada quando as respostas
  // mudam — follow-ups entram/saem da lista conforme as dores marcadas.
  const activeQuestions = getActiveQuestions(answers);

  // Seleções da pergunta multi-choice atual (antes de enviar).
  const [multiSelected, setMultiSelected] = useState<string[]>([]);

  // Lead descartado (não vende online): fluxo educativo, sem WhatsApp.
  const [isDisqualified, setIsDisqualified] = useState(false);

  // Estado da fase de contato (input de texto dentro do chat).
  const [contactIndex, setContactIndex] = useState(0); // qual campo de contato estamos
  const [contactInput, setContactInput] = useState('');
  const [contactError, setContactError] = useState<string | null>(null);
  // Acumula as respostas de contato localmente (ref) pra garantir que o
  // submitLead recebe TODAS as respostas mesmo antes do state do React
  // atualizar. O setAnswer do hook é assíncrono e pode não ter refletido
  // no estado `answers` quando submitAndFinish() roda.
  const contactAnswersRef = useRef<Record<string, string>>({});

  // URL do WhatsApp gerada após submissão.
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);
  const msgIdRef = useRef(0);

  // Suprime na /diagnostico (quiz em tela cheia já é o caminho).
  // SSR-safe: useState(true) + useEffect no client.
  const [isDiagnosticoPage, setIsDiagnosticoPage] = useState(true);

  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, '');
    setIsDiagnosticoPage(path.endsWith('/diagnostico'));
  }, []);

  // Abre sozinho depois de PROACTIVE_CHAT_DELAY_MS (uma vez só).
  useEffect(() => {
    if (hasOpened || isDiagnosticoPage) return;
    const t = setTimeout(() => openChat(), PROACTIVE_CHAT_DELAY_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasOpened, isDiagnosticoPage]);

  // Exit-intent: se o mouse sair do topo, abre também.
  useEffect(() => {
    if (hasOpened || isDiagnosticoPage) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 0) openChat();
    };
    document.addEventListener('mouseout', handler);
    return () => document.removeEventListener('mouseout', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasOpened, isDiagnosticoPage]);

  // Auto-scroll para a última mensagem.
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, phase]);

  function pushMsg(from: 'bot' | 'user', text: string) {
    msgIdRef.current += 1;
    setMessages((m) => [...m, { id: msgIdRef.current, from, text }]);
  }

  function openChat() {
    if (hasOpened) return;
    setHasOpened(true);
    contactAnswersRef.current = {}; // reset ao abrir
    setPhase('open');
    pushMsg('bot', 'Olá! Sou da E-Koncepto 👋');
    setTimeout(() => askNext(0, {}), TYPING_DELAY_MS * 2);
  }

  // ---------------- FASE 1: perguntas de escolha ----------------

  function askNext(index: number, currentAnswers: QuizAnswers) {
    const questions = getActiveQuestions(currentAnswers);
    if (index >= questions.length) {
      // Acabaram as perguntas -> vai pra fase de contato.
      startContactPhase();
      return;
    }
    const q = questions[index];
    setQIndex(index);
    setMultiSelected([]);
    setPhase('typing');
    setTimeout(() => {
      pushMsg('bot', QUESTION_PROMPTS[q.id] ?? q.question);
      setPhase('input-quiz');
    }, TYPING_DELAY_MS);
  }

  /**
   * Ao responder a pergunta `q`, remove respostas posteriores órfãs
   * (ex.: mudar a dor e voltar não pode deixar detalhes velhos).
   */
  function purgedAnswers(
    qId: string,
    current: QuizAnswers,
    updates: QuizAnswers
  ): QuizAnswers {
    const idxFull = QUIZ_QUESTIONS.findIndex((x) => x.id === qId);
    const next: QuizAnswers = { ...current, ...updates };
    QUIZ_QUESTIONS.slice(idxFull + 1).forEach((x) => delete next[x.id]);
    return next;
  }

  /** Aplica respostas no hook e avança (ou desqualifica). */
  function commitAndAdvance(
    qId: string,
    updates: QuizAnswers,
    displayText: string
  ) {
    pushMsg('user', displayText);
    const merged = purgedAnswers(qId, answers, updates);
    // Remove chaves órfãs e aplica as novas de uma vez (localStorage incluso).
    syncAnswers(merged);

    // GATE (declarativo no config): "Ainda não vendo online" nos canais.
    const q = QUIZ_QUESTIONS.find((x) => x.id === qId);
    const dq = q?.disqualifyValue;
    const selectedValue = Object.values(updates)[0] ?? '';
    if (dq && selectedValue.split(',').includes(dq)) {
      setPhase('typing');
      setTimeout(() => {
        pushMsg('bot', 'Agradeço a sinceridade! 🙏');
        setTimeout(() => {
          pushMsg(
            'bot',
            'Nosso diagnóstico é para quem já vende em marketplaces. Como você ainda não vende online, preparamos guias gratuitos pra dar os primeiros passos — e em breve teremos cursos pra começar do zero! 📚'
          );
          setIsDisqualified(true);
          submitLead(merged, { disqualified: true });
          setPhase('done');
        }, 400);
      }, TYPING_DELAY_MS);
      return;
    }

    const ack = ACKNOWLEDGMENTS[qId] ?? '👍';
    setPhase('typing');
    setTimeout(() => {
      pushMsg('bot', ack);
      setTimeout(() => askNext(qIndex + 1, merged), 400);
    }, TYPING_DELAY_MS);
  }

  // Sincroniza TODAS as respostas (inclusive remoções de chaves órfãs de
  // um branch anterior) com o hook de uma vez.
  function syncAnswers(merged: QuizAnswers) {
    setAllAnswers(merged);
  }

  /** Resposta single-choice. */
  function handleUserReply(value: string, displayText?: string) {
    const q = activeQuestions[qIndex];
    if (!q) return;
    commitAndAdvance(
      q.id,
      { [q.id]: value },
      displayText ?? multiLabel(q.id, value)
    );
  }

  /** Toggle de opção multi (respeita maxSelect/exclusive). */
  function toggleMulti(value: string) {
    const q = activeQuestions[qIndex];
    if (!q?.options) return;
    const opt = q.options.find((o) => o.value === value);
    setMultiSelected((prev) => {
      if (prev.includes(value)) return prev.filter((v) => v !== value);
      if (opt?.exclusive) return [value];
      const base = prev.filter(
        (v) => !q.options?.find((o) => o.value === v)?.exclusive
      );
      const max = q.maxSelect ?? Infinity;
      if (base.length >= max) return base;
      return [...base, value];
    });
  }

  function handleMultiSend() {
    const q = activeQuestions[qIndex];
    if (!q || multiSelected.length === 0) return;
    commitAndAdvance(
      q.id,
      { [q.id]: multiSelected.join(',') },
      multiLabel(q.id, multiSelected.join(','))
    );
  }

  // ---------------- FASE 2: coleta de contato ----------------

  function startContactPhase() {
    setContactIndex(0);
    askContactField(0);
  }

  function askContactField(index: number) {
    if (index >= CONTACT_ORDER.length) {
      // Todos os campos preenchidos -> submete.
      submitAndFinish();
      return;
    }
    const fieldId = CONTACT_ORDER[index];
    setContactIndex(index);
    const promptTemplate = CONTACT_PROMPTS[fieldId] ?? fieldId;
    // Substitui {nome} pelo nome já dado (personalização).
    const nome = answers.nome?.trim();
    const prompt = promptTemplate.replace('{nome}', nome || '');
    setPhase('typing');
    setTimeout(() => {
      pushMsg('bot', prompt);
      setContactInput('');
      setContactError(null);
      setPhase('input-contact');
    }, TYPING_DELAY_MS);
  }

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldId = CONTACT_ORDER[contactIndex];
    const field = CONTACT_FIELDS.find((f) => f.id === fieldId);
    const value = contactInput.trim();

    // Campo opcional vazio (empresa/email) -> pula.
    if (!value && field && !field.required) {
      pushMsg('user', '— (pulou)');
      advanceContact();
      return;
    }

    // Valida.
    const err = validateField(fieldId, value, field?.required ?? true);
    if (err) {
      setContactError(err);
      return;
    }

    pushMsg('user', value);
    setAnswer(fieldId, value);
    contactAnswersRef.current[fieldId] = value; // garante no ref antes do submit
    setContactError(null);
    advanceContact();
  }

  function advanceContact() {
    const ack = ['Prazer! 🤝', 'Anotado! 📝', 'Perfeito! ✅', 'Recebido! 📲'];
    const ackText = ack[Math.min(contactIndex, ack.length - 1)];
    setPhase('typing');
    setTimeout(() => {
      pushMsg('bot', ackText);
      setTimeout(() => askContactField(contactIndex + 1), 400);
    }, TYPING_DELAY_MS);
  }

  // ---------------- FASE 3: submissão + diagnóstico ----------------

  async function submitAndFinish() {
    setPhase('submitting');
    // Merge explícito: answers (state, pode estar desatualizado) + ref
    // (acumulado sincronamente). Garante que TODAS as respostas cheguem
    // ao submitLead mesmo se o React ainda não re-renderizou.
    const finalAnswers = { ...answers, ...contactAnswersRef.current };
    const result = await submitLead(finalAnswers);
    setWhatsappUrl(result.whatsappUrl);

    const nome = finalAnswers.nome?.trim();
    const insights = buildDiagnosticInsight(finalAnswers);

    // Mensagem de introdução ao diagnóstico.
    pushMsg(
      'bot',
      nome
        ? `${nome}, analisei suas respostas. Aqui está seu diagnóstico: 🔍`
        : 'Analisei suas respostas. Aqui está seu diagnóstico: 🔍'
    );

    // Mostra cada insight como uma mensagem separada, com delay escalonado
    // (simula alguém digitando cada ponto — mais humano que um texto longo).
    insights.forEach((insight, idx) => {
      setTimeout(() => {
        const emoji =
          insight.prioridade === 'alta' ? '🔴' :
          insight.prioridade === 'media' ? '🟡' : '🔵';
        pushMsg('bot', `${emoji} ${insight.titulo}\n\n${insight.descricao}`);
      }, (idx + 1) * (TYPING_DELAY_MS * 2));
    });

    // Após todos os insights, mostra o CTA de WhatsApp.
    setTimeout(
      () => {
        pushMsg(
          'bot',
          'Quer o diagnóstico completo com plano de ação? 📋 Toque abaixo pra falar comigo:'
        );
        setPhase('done');
      },
      (insights.length + 1) * (TYPING_DELAY_MS * 2)
    );
  }

  // ---------------- RENDER ----------------

  // Pergunta atual do quiz (undefined quando já passou pra fase de contato).
  const currentQ = activeQuestions[qIndex];

  // Botão flutuante (visual WhatsApp, canto inferior direito)
  if (phase === 'idle') {
    if (isDiagnosticoPage) return null;
    return (
      <motion.button
        type="button"
        onClick={openChat}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40"
        aria-label="Falar com especialista"
      >
        <span className="relative flex w-16 h-16 items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            fill="currentColor"
            className="w-9 h-9"
            aria-hidden="true"
          >
            <path d="M30.3139 14.3245C30.174 10.4932 28.5594 6.864 25.8073 4.1948C23.0552 1.52559 19.3784 0.0227244 15.5446 4.10118e-06H15.4722C12.8904 -0.00191309 10.3527 0.668375 8.10857 1.94491C5.86449 3.22145 3.99142 5.06026 2.67367 7.28039C1.35592 9.50053 0.6389 12.0255 0.593155 14.6068C0.547411 17.1882 1.17452 19.737 2.41278 22.0024L1.09794 29.8703C1.0958 29.8865 1.09712 29.9029 1.10182 29.9185C1.10651 29.9341 1.11448 29.9485 1.12518 29.9607C1.13588 29.973 1.14907 29.9828 1.16387 29.9896C1.17867 29.9964 1.19475 29.9999 1.21103 30H1.23365L9.01561 28.269C11.0263 29.2344 13.2282 29.7353 15.4586 29.7346C15.6004 29.7346 15.7421 29.7346 15.8838 29.7346C17.8458 29.6786 19.7773 29.2346 21.5567 28.4282C23.3352 27.6216 24.9478 26.4694 26.3098 25.0363C27.6514 23.6036 28.6962 21.9324 29.3832 20.0809C30.0704 18.2423 30.3867 16.2859 30.3139 14.3245Z" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 flex w-5 h-5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
            <span className="relative inline-flex w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold items-center justify-center ring-2 ring-green-500">
              1
            </span>
          </span>
        </span>
      </motion.button>
    );
  }

  // Janela de chat aberta
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96"
      >
        <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">
                E
              </span>
              <div>
                <p className="text-sm font-semibold leading-tight">E-Koncepto</p>
                <p className="text-xs opacity-80 leading-tight">
                  {phase === 'done'
                    ? isDisqualified
                      ? 'Guias pra começar'
                      : 'Diagnóstico pronto!'
                    : phase === 'submitting'
                      ? 'Preparando diagnóstico...'
                      : 'Online agora'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setPhase('idle')}
              className="p-1 rounded hover:bg-primary-foreground/10 transition-colors"
              aria-label="Fechar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Mensagens */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  'max-w-[85%] px-3 py-2 rounded-2xl text-sm whitespace-pre-wrap',
                  m.from === 'bot'
                    ? 'bg-background border border-border rounded-tl-sm'
                    : 'bg-primary text-primary-foreground rounded-tr-sm ml-auto'
                )}
              >
                {m.text}
              </div>
            ))}

            {phase === 'typing' && (
              <div className="bg-background border border-border rounded-2xl rounded-tl-sm px-3 py-2 w-14 flex gap-1 shrink-0">
                <Dot delay={0} />
                <Dot delay={150} />
                <Dot delay={300} />
              </div>
            )}

            {phase === 'done' && isDisqualified && (
              <div className="pt-2 space-y-2">
                <Button asChild className="w-full" size="sm">
                  <a href="/landing">Ver guias gratuitos 📚</a>
                </Button>
                <p className="text-xs text-center text-muted-foreground px-2">
                  Em breve: cursos pra começar do zero
                </p>
              </div>
            )}

            {phase === 'done' && !isDisqualified && whatsappUrl && (
              <div className="pt-2 space-y-2">
                <Button asChild variant="hero" className="w-full" size="sm">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <p className="text-xs text-center text-muted-foreground px-2">
                  Grátis · Sem compromisso · Resposta em minutos
                </p>
              </div>
            )}
          </div>

          {/* Input: escolha (fase de quiz) */}
          {phase === 'input-quiz' && currentQ && (
            <div className="border-t border-border p-3 bg-background shrink-0">
              {currentQ.type === 'multi-choice' ? (
                // Multi-select: toggle + enviar
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2 max-h-44 overflow-y-auto">
                    {currentQ.options?.map((opt) => {
                      const selected = multiSelected.includes(opt.value);
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => toggleMulti(opt.value)}
                          className={cn(
                            'flex items-center gap-2 text-left text-sm px-3 py-2 rounded-lg border transition-colors',
                            selected
                              ? 'border-primary bg-accent'
                              : 'border-border hover:border-primary'
                          )}
                        >
                          {opt.icon ? (
                            <span className="shrink-0 w-6 h-6 rounded bg-background border border-border flex items-center justify-center overflow-hidden">
                              <img
                                src={opt.icon}
                                alt=""
                                className="w-full h-full object-contain p-0.5"
                                loading="lazy"
                              />
                            </span>
                          ) : (
                            opt.emoji && <span aria-hidden>{opt.emoji}</span>
                          )}
                          <span className="flex-1 leading-tight">{opt.label}</span>
                          {selected && <Check className="w-3.5 h-3.5 shrink-0 text-primary" strokeWidth={3} />}
                        </button>
                      );
                    })}
                  </div>
                  <Button
                    className="w-full"
                    size="sm"
                    disabled={multiSelected.length === 0}
                    onClick={handleMultiSend}
                  >
                    <Send className="w-3.5 h-3.5 mr-1" />
                    {multiSelected.length > 0 ? 'Enviar' : 'Selecione ao menos um'}
                  </Button>
                </div>
              ) : (
                // Single-choice: botões diretos
                <div className="grid gap-2 max-h-40 overflow-y-auto">
                  {currentQ.options?.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() =>
                        handleUserReply(opt.value, `${opt.emoji ?? ''} ${opt.label}`.trim())
                      }
                      className="flex items-center gap-2 w-full text-left text-sm px-3 py-2 rounded-lg border border-border hover:border-primary hover:bg-accent transition-colors"
                    >
                      {opt.emoji && <span aria-hidden>{opt.emoji}</span>}
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Input: campos de contato (nome, empresa, WhatsApp, email) */}
          {phase === 'input-contact' && (
            <div className="border-t border-border p-3 bg-background shrink-0">
              <form onSubmit={handleContactSubmit} className="space-y-2">
                <div className="flex gap-2">
                  <Input
                    autoFocus
                    inputMode={CONTACT_FIELDS.find(f => f.id === CONTACT_ORDER[contactIndex])?.inputMode ?? 'text'}
                    placeholder={
                      CONTACT_FIELDS.find(f => f.id === CONTACT_ORDER[contactIndex])?.placeholder ?? ''
                    }
                    value={contactInput}
                    onChange={(e) => {
                      setContactInput(e.target.value);
                      if (contactError) setContactError(null);
                    }}
                    className={cn(
                      'h-10 text-sm',
                      contactError && 'border-destructive focus-visible:ring-destructive'
                    )}
                  />
                  <Button type="submit" size="icon" aria-label="Enviar">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                {contactError && (
                  <p className="text-xs text-destructive">{contactError}</p>
                )}
                {/* Botão pular (só para campos opcionais: empresa, email) */}
                {(() => {
                  const field = CONTACT_FIELDS.find(f => f.id === CONTACT_ORDER[contactIndex]);
                  if (!field || field.required) return null;
                  return (
                    <button
                      type="button"
                      onClick={() => {
                        pushMsg('user', '— (pulou)');
                        advanceContact();
                      }}
                      className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
                    >
                      Pular
                    </button>
                  );
                })()}
              </form>
            </div>
          )}

          {(phase === 'typing' || phase === 'open') && (
            <div className="border-t border-border p-3 bg-background flex items-center gap-2 text-xs text-muted-foreground h-12 shrink-0">
              <Loader2 className="w-3 h-3 animate-spin" />
              {phase === 'open' ? 'Iniciando...' : 'E-Koncepto está digitando...'}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

const ACKNOWLEDGMENTS: Record<string, string> = {
  faturamento: 'Anotado! 📝',
  marketplace: 'Show! 👍',
  dor: 'Entendi — é super comum.',
  'detalhe-nao-vende': 'Faz todo sentido.',
  'detalhe-vende-pouco': 'Boa, isso já diz muito! 📊',
  'detalhe-margem': 'Anotado — margem é sensível. 💸',
  'detalhe-escalar': 'Entendi! 🚀',
  'detalhe-tempo': 'Isso é mais comum do que parece. ⏰',
};

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="w-2 h-2 rounded-full bg-muted-foreground/60"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1, repeat: Infinity, delay }}
    />
  );
}
