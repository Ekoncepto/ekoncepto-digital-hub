/**
 * Chat proativo — segundo caminho de qualificação.
 *
 * Diferente do DiagnosticoQuiz (tela cheia), este é um balão de conversa
 * que abre após 30s (ou em exit-intent) e faz as 4 perguntas de múltipla
 * escolha em formato de bate-papo. As respostas são persistidas no
 * localStorage, então quando o usuário vai pra /diagnostico o quiz já
 * vem pré-preenchido — só falta o formulário de contato.
 *
 * UX:
 *  - Botão flutuante (canto inferior esquerdo; WhatsApp fica no direito).
 *  - Janela de chat com bolhas "minha" vs. "deles".
 *  - Animação "digitando..." antes de cada pergunta (humaniza).
 *  - Ao final das 4 perguntas: botão leva pra /diagnostico completar.
 *  - Escape: botão "falar direto no WhatsApp" pula tudo.
 */
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  PROACTIVE_CHAT_DELAY_MS,
  QUIZ_QUESTIONS,
} from '@/config/diagnostico-quiz';
import { useDiagnosticoLead } from './useDiagnosticoLead';

type ChatMsg = {
  id: number;
  from: 'bot' | 'user';
  text: string;
};

type ChatPhase = 'idle' | 'open' | 'typing' | 'input' | 'done';

const TYPING_DELAY_MS = 650;

/** Versão "fala" de cada pergunta, mais conversacional que o quiz. */
const QUESTION_PROMPTS: Record<string, string> = {
  marketplace: 'Oi! 👋 Pra te indicar o caminho certo: onde você vende hoje?',
  faturamento: 'Legal! E qual é o seu faturamento mensal aprox.?',
  dor: 'Entendi. E qual é a sua maior dor hoje?',
  objetivo: 'Pra fechar: o que você quer alcançar?',
};

export default function ProactiveChat() {
  const { answers, setAnswer, source, buildWhatsAppUrl } = useDiagnosticoLead();
  const [phase, setPhase] = useState<ChatPhase>('idle');
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [hasOpened, setHasOpened] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const msgIdRef = useRef(0);

  // Suprime na /diagnostico: lá o quiz em tela cheia já é o caminho principal.
  // O chat proativo só faz sentido nas OUTRAS páginas (home, LPs, etc) como
  // segundo caminho. Mostrar os dois na mesma tela é redundante e confuso.
  //
  // Importante: precisa ser client-only (useEffect + state) porque o Astro
  // renderiza no servidor (SSR). Check inline no corpo falha no SSR (window
  // undefined) e o botão vai pro HTML estático. Com state, renderiza escondido
  // no SSR e só aparece no client se NÃO for /diagnostico.
  const [isDiagnosticoPage, setIsDiagnosticoPage] = useState(true);

  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, '');
    setIsDiagnosticoPage(path.endsWith('/diagnostico'));
  }, []);

  // Abre sozinho depois de PROACTIVE_CHAT_DELAY_MS (uma vez só)
  // Ignora na /diagnostico (lá o quiz já é o caminho principal).
  useEffect(() => {
    if (hasOpened || isDiagnosticoPage) return;
    const t = setTimeout(() => openChat(), PROACTIVE_CHAT_DELAY_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasOpened, isDiagnosticoPage]);

  // Exit-intent: se o mouse sair do topo, abre também
  // Ignora na /diagnostico pelo mesmo motivo.
  useEffect(() => {
    if (hasOpened || isDiagnosticoPage) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 0) openChat();
    };
    document.addEventListener('mouseout', handler);
    return () => document.removeEventListener('mouseout', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasOpened, isDiagnosticoPage]);

  // Auto-scroll para a última mensagem
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
    setPhase('open');
    pushMsg('bot', 'Olá! Sou da E-Koncepto 👋');
    setTimeout(() => askNext(0), TYPING_DELAY_MS * 2);
  }

  function askNext(index: number) {
    if (index >= QUIZ_QUESTIONS.length) {
      finish();
      return;
    }
    const q = QUIZ_QUESTIONS[index];
    setQIndex(index);
    setPhase('typing');
    setTimeout(() => {
      pushMsg('bot', QUESTION_PROMPTS[q.id] ?? q.question);
      setPhase('input');
    }, TYPING_DELAY_MS);
  }

  function handleUserReply(value: string, displayText?: string) {
    const q = QUIZ_QUESTIONS[qIndex];
    pushMsg('user', displayText ?? value);
    setAnswer(q.id, value);

    const ack = ACKNOWLEDGMENTS[q.id] ?? '👍';
    setPhase('typing');
    setTimeout(() => {
      pushMsg('bot', ack);
      setTimeout(() => askNext(qIndex + 1), 400);
    }, TYPING_DELAY_MS);
  }

  function finish() {
    setPhase('done');
    pushMsg(
      'bot',
      'Perfeito! 🎉 Pra receber seu diagnóstico personalizado, deixa seu contato:'
    );
  }

  function skipToWhatsApp() {
    const url = buildWhatsAppUrl(answers);
    window.open(url, '_blank', 'noopener,noreferrer');
    setPhase('idle');
  }

  // Link pro /diagnostico preservando o source (atribuição de origem)
  const diagnosticoUrl = `/diagnostico?source=${encodeURIComponent(source || 'chat')}`;

  // Na /diagnostico, não renderiza nada (quiz em tela cheia já é o caminho).
  if (isDiagnosticoPage) return null;

  // Botão inicial (balão flutuante estilo WhatsApp, canto inferior direito)
  if (phase === 'idle') {
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
          {/* Ícone WhatsApp (mesmo SVG do FloatingWhatsAppButton original) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            fill="currentColor"
            className="w-9 h-9"
            aria-hidden="true"
          >
            <path d="M30.3139 14.3245C30.174 10.4932 28.5594 6.864 25.8073 4.1948C23.0552 1.52559 19.3784 0.0227244 15.5446 4.10118e-06H15.4722C12.8904 -0.00191309 10.3527 0.668375 8.10857 1.94491C5.86449 3.22145 3.99142 5.06026 2.67367 7.28039C1.35592 9.50053 0.6389 12.0255 0.593155 14.6068C0.547411 17.1882 1.17452 19.737 2.41278 22.0024L1.09794 29.8703C1.0958 29.8865 1.09712 29.9029 1.10182 29.9185C1.10651 29.9341 1.11448 29.9485 1.12518 29.9607C1.13588 29.973 1.14907 29.9828 1.16387 29.9896C1.17867 29.9964 1.19475 29.9999 1.21103 30H1.23365L9.01561 28.269C11.0263 29.2344 13.2282 29.7353 15.4586 29.7346C15.6004 29.7346 15.7421 29.7346 15.8838 29.7346C17.8458 29.6786 19.7773 29.2346 21.5667 28.4282C23.3562 27.6218 24.9682 26.469 26.3098 25.0363C27.6514 23.6036 28.696 21.9194 29.3832 20.0809C30.0704 18.2423 30.3867 16.2859 30.3139 14.3245Z" />
          </svg>
          {/* Badge "não lido" pra chamar atenção */}
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

  const currentQ = QUIZ_QUESTIONS[qIndex];

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
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">
                E
              </span>
              <div>
                <p className="text-sm font-semibold leading-tight">E-Koncepto</p>
                <p className="text-xs opacity-80 leading-tight">
                  {phase === 'done' ? 'Quase lá!' : 'Online agora'}
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
                  'max-w-[85%] px-3 py-2 rounded-2xl text-sm',
                  m.from === 'bot'
                    ? 'bg-background border border-border rounded-tl-sm'
                    : 'bg-primary text-primary-foreground rounded-tr-sm ml-auto'
                )}
              >
                {m.text}
              </div>
            ))}

            {phase === 'typing' && (
              <div className="bg-background border border-border rounded-2xl rounded-tl-sm px-3 py-2 w-14 flex gap-1">
                <Dot delay={0} />
                <Dot delay={150} />
                <Dot delay={300} />
              </div>
            )}

            {phase === 'done' && (
              <div className="pt-2 space-y-2">
                <Button asChild variant="hero" className="w-full" size="sm">
                  <a href={diagnosticoUrl}>
                    Completar diagnóstico
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
                <p className="text-xs text-center text-muted-foreground px-2">
                  Suas respostas já estão salvas — é só preencher o contato. ✨
                </p>
              </div>
            )}
          </div>

          {/* Input / Opções */}
          {phase !== 'done' && phase !== 'typing' && phase !== 'open' && currentQ && (
            <div className="border-t border-border p-3 bg-background">
              {currentQ.options && phase === 'input' && (
                <div className="grid gap-2 max-h-40 overflow-y-auto">
                  {currentQ.options.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleUserReply(opt.value, `${opt.emoji ?? ''} ${opt.label}`.trim())}
                      className="flex items-center gap-2 w-full text-left text-sm px-3 py-2 rounded-lg border border-border hover:border-primary hover:bg-accent transition-colors"
                    >
                      {opt.emoji && <span aria-hidden>{opt.emoji}</span>}
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Escape */}
              {phase === 'input' && (
                <button
                  type="button"
                  onClick={skipToWhatsApp}
                  className="mt-2 w-full text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
                >
                  Prefiro falar direto no WhatsApp
                </button>
              )}
            </div>
          )}

          {(phase === 'typing' || phase === 'open') && (
            <div className="border-t border-border p-3 bg-background flex items-center gap-2 text-xs text-muted-foreground h-12">
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
  marketplace: 'Show! 👍',
  faturamento: 'Anotado! 📝',
  dor: 'Entendi — é super comum.',
  objetivo: 'Boa! 🎯',
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
