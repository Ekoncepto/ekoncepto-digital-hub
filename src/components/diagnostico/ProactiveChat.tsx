/**
 * Chat proativo — segundo caminho de qualificação.
 *
 * Diferente do DiagnosticoQuiz (tela cheia, 1 pergunta por vez), este é
 * um balão de conversa que abre após 30s (ou em exit-intent) e faz as
 * MESMAS perguntas em formato de bate-papo. As respostas são persistidas
 * no localStorage, então o usuário pode começar no chat e terminar no
 * quiz (ou vice-versa) sem perder o que já digitou.
 *
 * UX:
 *  - Botão flutuante (canto inferior esquerdo; WhatsApp fica no direito).
 *  - Janela de chat com bolhas "minha" vs. "deles".
 *  - Animação "digitando..." antes de cada pergunta (humaniza).
 *  - Escape: botão "falar direto no WhatsApp" pula o quiz.
 */
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2, Send, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  PROACTIVE_CHAT_DELAY_MS,
  QUIZ_QUESTIONS,
  type QuizQuestion,
} from '@/config/diagnostico-quiz';
import { useDiagnosticoLead, validateField } from './useDiagnosticoLead';

type ChatMsg = {
  id: number;
  from: 'bot' | 'user';
  text: string;
};

type ChatPhase = 'idle' | 'open' | 'typing' | 'input' | 'submitting' | 'done';

const TYPING_DELAY_MS = 650;

/** Versão "fala" de cada pergunta, mais conversacional que o quiz. */
const QUESTION_PROMPTS: Record<string, string> = {
  marketplace: 'Oi! 👋 Pra te indicar o caminho certo: onde você vende hoje?',
  faturamento: 'Legal! E qual é o seu faturamento mensal aprox.?',
  dor: 'Entendi. E qual é a sua maior dor hoje?',
  objetivo: 'Pra fechar: o que você quer alcançar?',
  nome: 'Perfeito! Como você se chama?',
  contato: 'Pra onde eu te mando seu diagnóstico? (WhatsApp ou e-mail)',
};

export default function ProactiveChat() {
  const { answers, setAnswer, submitLead, buildWhatsAppUrl } = useDiagnosticoLead();
  const [phase, setPhase] = useState<ChatPhase>('idle');
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [hasOpened, setHasOpened] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const msgIdRef = useRef(0);

  // Abre sozinho depois de PROACTIVE_CHAT_DELAY_MS (uma vez só)
  useEffect(() => {
    if (hasOpened) return;
    const t = setTimeout(() => openChat(), PROACTIVE_CHAT_DELAY_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasOpened]);

  // Exit-intent: se o mouse sair do topo, abre também
  useEffect(() => {
    if (hasOpened) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 0) openChat();
    };
    document.addEventListener('mouseout', handler);
    return () => document.removeEventListener('mouseout', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasOpened]);

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
    // pequena introdução antes da primeira pergunta
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

  function handleUserReply(text: string) {
    pushMsg('user', text);

    const q: QuizQuestion = QUIZ_QUESTIONS[qIndex];
    setAnswer(q.id, text);

    // confirmação leve antes da próxima
    const ack = ACKNOWLEDGMENTS[q.id] ?? '👍';
    setPhase('typing');
    setTimeout(() => {
      pushMsg('bot', ack);
      setTimeout(() => askNext(qIndex + 1), 400);
    }, TYPING_DELAY_MS);
  }

  function handleSubmitText(e: React.FormEvent) {
    e.preventDefault();
    const q = QUIZ_QUESTIONS[qIndex];
    const err = validateField(q.id, inputValue);
    if (err) {
      setInputError(err);
      return;
    }
    setInputError(null);
    handleUserReply(inputValue.trim());
    setInputValue('');
  }

  async function finish() {
    setPhase('submitting');
    const result = await submitLead(answers);
    setWhatsappUrl(result.whatsappUrl);
    setPhase('done');
    pushMsg(
      'bot',
      answers.nome?.trim()
        ? `${answers.nome.trim()}, pronto! 🎉 Toque abaixo pra falar comigo agora:`
        : 'Pronto! 🎉 Toque abaixo pra falar comigo agora:'
    );
  }

  function skipToWhatsApp() {
    const url = buildWhatsAppUrl(answers);
    window.open(url, '_blank', 'noopener,noreferrer');
    setPhase('idle');
  }

  // Botão inicial (balão flutuante)
  if (phase === 'idle') {
    return (
      <motion.button
        type="button"
        onClick={openChat}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 left-6 z-40"
        aria-label="Abrir chat de diagnóstico"
      >
        <span className="flex items-center gap-2 bg-background border border-border shadow-lg rounded-full pl-3 pr-4 py-3 hover:bg-accent transition-colors">
          <span className="relative flex w-9 h-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-red-500 ring-2 ring-background" />
          </span>
          <span className="text-sm font-medium">Fazer diagnóstico</span>
        </span>
      </motion.button>
    );
  }

  const currentQ = QUIZ_QUESTIONS[qIndex];
  const isText = currentQ && (currentQ.type === 'text' || currentQ.type === 'contact');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="fixed bottom-6 left-6 z-50 w-[calc(100vw-3rem)] sm:w-96"
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
                  {phase === 'done' ? 'Diagnóstico pronto' : 'Online agora'}
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
              <div className="pt-2">
                <Button asChild variant="hero" className="w-full" size="sm">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp →
                  </a>
                </Button>
              </div>
            )}
          </div>

          {/* Input / Opções */}
          {phase !== 'done' && phase !== 'submitting' && currentQ && (
            <div className="border-t border-border p-3 bg-background">
              {/* Opções de múltipla escolha */}
              {!isText && currentQ.options && phase === 'input' && (
                <div className="grid gap-2 max-h-40 overflow-y-auto">
                  {currentQ.options.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleUserReply(opt.label)}
                      className="flex items-center gap-2 w-full text-left text-sm px-3 py-2 rounded-lg border border-border hover:border-primary hover:bg-accent transition-colors"
                    >
                      {opt.emoji && <span aria-hidden>{opt.emoji}</span>}
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Input de texto */}
              {isText && phase === 'input' && (
                <form onSubmit={handleSubmitText} className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      autoFocus
                      placeholder={currentQ.placeholder}
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        if (inputError) setInputError(null);
                      }}
                      className={cn(
                        inputError && 'border-destructive focus-visible:ring-destructive'
                      )}
                    />
                    <Button type="submit" size="icon" aria-label="Enviar">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  {inputError && (
                    <p className="text-xs text-destructive">{inputError}</p>
                  )}
                </form>
              )}

              {(phase === 'typing' || phase === 'open') && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground h-9">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  {phase === 'open' ? 'Iniciando...' : 'E-Koncepto está digitando...'}
                </div>
              )}

              {phase === 'submitting' && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground h-9">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Salvando seu diagnóstico...
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
  nome: 'Prazer! 🤝',
  contato: 'Recebido! ✅',
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
