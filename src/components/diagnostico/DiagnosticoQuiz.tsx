/**
 * Quiz de diagnóstico — núcleo da página /diagnostico.
 *
 * Fluxo:
 *  1) 4 perguntas de múltipla escolha (1 por tela, com barra de progresso,
 *     auto-avanço ao clicar, botão voltar).
 *  2) Tela de contato (ContactForm) com nome + WhatsApp + email claros.
 *  3) Tela de sucesso -> botão WhatsApp com mensagem personalizada.
 *
 * Melhorias vs. quiz de referência (Efeito Vendas):
 *  - Opções como cards grandes (melhor mobile que radio buttons).
 *  - Botão "voltar" para editar resposta anterior.
 *  - Campos de contato separados e claros (não um campo "contato" só).
 */
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Check, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { QUIZ_QUESTIONS, type QuizQuestion } from '@/config/diagnostico-quiz';
import { useDiagnosticoLead } from './useDiagnosticoLead';
import ContactForm from './ContactForm';

type Phase = 'answering' | 'contact' | 'submitting' | 'done';

export default function DiagnosticoQuiz() {
  const { answers, setAnswer, submitLead, source } = useDiagnosticoLead();
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<Phase>('answering');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const question: QuizQuestion = QUIZ_QUESTIONS[step];
  const total = QUIZ_QUESTIONS.length;

  // Progresso: 4 perguntas + 1 tela de contato = 5 etapas.
  // 'done' conta como 100%.
  const progress =
    phase === 'done'
      ? 100
      : phase === 'contact' || phase === 'submitting'
        ? Math.round((total / (total + 1)) * 100)
        : Math.round((step / (total + 1)) * 100);

  function handleSelectOption(value: string) {
    setAnswer(question.id, value);
    // pequena pausa para o usuário ver o feedback visual do card
    setTimeout(() => goNext(), 220);
  }

  function goNext() {
    if (step < total - 1) {
      setStep((s) => s + 1);
    } else {
      // acabaram as perguntas -> vai pro formulário de contato
      setPhase('contact');
    }
  }

  function goBack() {
    if (phase === 'contact') {
      // volta pra última pergunta
      setPhase('answering');
      setStep(total - 1);
      return;
    }
    if (step === 0) return;
    setStep((s) => s - 1);
  }

  async function handleContactSubmit(values: Record<string, string>) {
    // mescla os campos de contato com as respostas do quiz
    Object.entries(values).forEach(([k, v]) => setAnswer(k, v));
    setPhase('submitting');
    const merged = { ...answers, ...values };
    const result = await submitLead(merged);
    setWhatsappUrl(result.whatsappUrl);
    setPhase('done');
  }

  // ---------------- UI ----------------

  if (phase === 'done') {
    return <SuccessScreen whatsappUrl={whatsappUrl} answers={answers} />;
  }

  const showContact = phase === 'contact' || phase === 'submitting';

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Barra de progresso */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2 text-sm text-muted-foreground">
          <span>
            {showContact
              ? 'Quase lá!'
              : `Pergunta ${step + 1} de ${total}`}
          </span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {showContact ? (
        // ----- Tela de contato -----
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Pra onde mando seu diagnóstico?
          </h2>
          <p className="text-muted-foreground mb-8">
            Pronto! Agora é só deixar seu contato pra receber o plano personalizado.
          </p>
          <ContactForm
            initial={{
              nome: answers.nome ?? '',
              whatsapp: answers.whatsapp ?? '',
              email: answers.email ?? '',
            }}
            onSubmit={handleContactSubmit}
            submitting={phase === 'submitting'}
          />
        </div>
      ) : (
        // ----- Pergunta de múltipla escolha -----
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

            <div className="grid gap-3">
              {question.options?.map((opt) => {
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
          </motion.div>
        </AnimatePresence>
      )}

      {/* Botão voltar */}
      {(step > 0 || showContact) && (
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
