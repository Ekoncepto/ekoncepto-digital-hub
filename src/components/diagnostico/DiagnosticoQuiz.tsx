/**
 * Quiz de diagnóstico — núcleo da página /diagnostico.
 *
 * UX (melhorias vs. quiz de referência do Efeito Vendas):
 *  - 1 pergunta por tela, com transições suaves (framer-motion).
 *  - Barra de progresso no topo.
 *  - Botão "voltar" para editar resposta (referência não tinha).
 *  - Opções como cards grandes e clicáveis (melhor mobile que radio buttons).
 *  - Auto-avanço ao clicar em opção de múltipla escolha (menos fricção).
 *  - Tela final: loading -> confirmação -> WhatsApp com msg personalizada.
 */
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Loader2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import {
  QUIZ_QUESTIONS,
  type QuizQuestion,
} from '@/config/diagnostico-quiz';
import {
  useDiagnosticoLead,
  validateField,
} from './useDiagnosticoLead';

type Phase = 'answering' | 'submitting' | 'done';

export default function DiagnosticoQuiz() {
  const { answers, setAnswer, submitLead, source } = useDiagnosticoLead();
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<Phase>('answering');
  const [textValue, setTextValue] = useState('');
  const [textError, setTextError] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const question: QuizQuestion = QUIZ_QUESTIONS[step];
  const total = QUIZ_QUESTIONS.length;
  const progress = phase === 'done' ? 100 : Math.round((step / total) * 100);

  function handleSelectOption(value: string) {
    setAnswer(question.id, value);
    // pequena pausa para o usuário ver o feedback visual do card
    setTimeout(() => goNext(), 220);
  }

  function handleTextSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validateField(question.id, textValue);
    if (err) {
      setTextError(err);
      return;
    }
    setAnswer(question.id, textValue.trim());
    setTextError(null);
    goNext();
  }

  function goNext() {
    if (step < total - 1) {
      setStep((s) => s + 1);
      // pré-preenche texto caso já tenha sido respondido antes (localStorage)
      const next = QUIZ_QUESTIONS[step + 1];
      if (next && (next.type === 'text' || next.type === 'contact')) {
        setTextValue(answers[next.id] ?? '');
      }
    } else {
      finish();
    }
  }

  function goBack() {
    if (step === 0) return;
    setStep((s) => s - 1);
    const prev = QUIZ_QUESTIONS[step - 1];
    if (prev && (prev.type === 'text' || prev.type === 'contact')) {
      setTextValue(answers[prev.id] ?? '');
      setTextError(null);
    }
  }

  async function finish() {
    setPhase('submitting');
    const result = await submitLead(answers);
    setWhatsappUrl(result.whatsappUrl);
    setPhase('done');
  }

  // ---------------- UI ----------------

  if (phase === 'done') {
    return <SuccessScreen whatsappUrl={whatsappUrl} answers={answers} />;
  }

  const isText = question.type === 'text' || question.type === 'contact';

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Barra de progresso */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2 text-sm text-muted-foreground">
          <span>
            Pergunta {step + 1} de {total}
          </span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Card da pergunta */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            {question.question}
          </h2>
          {question.subtitle && (
            <p className="text-muted-foreground mb-8">{question.subtitle}</p>
          )}

          {/* Múltipla escolha */}
          {!isText && question.options && (
            <div className="grid gap-3">
              {question.options.map((opt) => {
                const selected = answers[question.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelectOption(opt.value)}
                    className={cn(
                      'group flex items-center gap-4 w-full text-left p-4 rounded-xl border-2 transition-all',
                      'hover:border-primary hover:bg-accent',
                      selected
                        ? 'border-primary bg-accent'
                        : 'border-border bg-background'
                    )}
                  >
                    {opt.emoji && (
                      <span className="text-2xl shrink-0" aria-hidden>
                        {opt.emoji}
                      </span>
                    )}
                    <span className="font-medium flex-1">{opt.label}</span>
                    <span
                      className={cn(
                        'shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors',
                        selected
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-muted-foreground/30 text-transparent group-hover:border-primary'
                      )}
                    >
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Inputs de texto */}
          {isText && (
            <form onSubmit={handleTextSubmit} className="space-y-4">
              <Input
                autoFocus
                type={question.type === 'contact' ? 'text' : 'text'}
                inputMode={question.type === 'contact' ? 'email' : 'text'}
                placeholder={question.placeholder}
                value={textValue}
                onChange={(e) => {
                  setTextValue(e.target.value);
                  if (textError) setTextError(null);
                }}
                className={cn(
                  'h-14 text-lg',
                  textError && 'border-destructive focus-visible:ring-destructive'
                )}
              />
              {textError && (
                <p className="text-sm text-destructive">{textError}</p>
              )}
              <Button
                type="submit"
                size="lg"
                className="w-full h-12 text-base"
                disabled={phase === 'submitting'}
              >
                {phase === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processando...
                  </>
                ) : (
                  <>
                    {step === total - 1 ? 'Ver meu diagnóstico' : 'Continuar'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Botão voltar */}
      {step > 0 && (
        <button
          type="button"
          onClick={goBack}
          className="mt-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Voltar
        </button>
      )}

      <input type="hidden" name="source" value={source} />
    </div>
  );
}

function SuccessScreen({
  whatsappUrl,
  answers,
}: {
  whatsappUrl: string;
  answers: Record<string, string>;
}) {
  const nome = answers.nome?.trim();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-xl mx-auto text-center"
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
        <Check className="w-8 h-8" strokeWidth={3} />
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-3">
        {nome ? `${nome}, seu diagnóstico está pronto!` : 'Seu diagnóstico está pronto!'}
      </h2>
      <p className="text-muted-foreground mb-8">
        Agora é só falar com um especialista no WhatsApp. Preparamos um resumo com
        suas respostas pra você não precisar repetir nada.
      </p>
      <Button asChild size="lg" variant="hero" className="w-full h-14 text-base">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-5 h-5 mr-2" />
          Falar no WhatsApp
        </a>
      </Button>
      <p className="text-xs text-muted-foreground mt-4">
        Grátis · Sem compromisso · Resposta em minutos
      </p>
    </motion.div>
  );
}
