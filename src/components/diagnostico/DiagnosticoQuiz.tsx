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
import { ArrowLeft, Check, MessageCircle, Sparkles, AlertCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { QUIZ_QUESTIONS, type QuizQuestion } from '@/config/diagnostico-quiz';
import { buildDiagnosticInsight, type DiagnosticInsight } from '@/config/site';
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
              empresa: answers.empresa ?? '',
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
  const insights = buildDiagnosticInsight(answers);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto"
    >
      {/* Cabeçalho */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8" strokeWidth={3} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          {nome ? `${nome}, aqui está seu diagnóstico` : 'Aqui está seu diagnóstico'}
        </h2>
        <p className="text-muted-foreground">
          Com base nas suas respostas, identificamos os seguintes pontos:
        </p>
      </div>

      {/* Insights (mini-diagnóstico personalizado) */}
      <div className="space-y-3 mb-8">
        {insights.map((insight, idx) => (
          <InsightCard key={idx} insight={insight} index={idx} />
        ))}
      </div>

      {/* Resumo das respostas (colapsável visual) */}
      <div className="rounded-lg bg-muted/50 p-4 mb-8">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
          Seu perfil
        </p>
        <div className="flex flex-wrap gap-2">
          {(['marketplace', 'faturamento', 'objetivo'] as const).map((key) => {
            const value = answers[key];
            if (!value) return null;
            const label =
              key === 'marketplace'
                ? marketplaceLabel(value)
                : key === 'faturamento'
                  ? faturamentoLabel(value)
                  : objetivoLabel(value);
            return (
              <span
                key={key}
                className="inline-flex items-center rounded-full bg-background border border-border px-3 py-1 text-xs font-medium"
              >
                {label}
              </span>
            );
          })}
        </div>
      </div>

      {/* CTA WhatsApp */}
      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Quer o diagnóstico completo com plano de ação? Fale com um especialista —
          o resumo já chega preenchido no WhatsApp.
        </p>
        <Button asChild size="lg" variant="hero" className="w-full sm:w-auto h-14 px-8 text-base">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            Quero o diagnóstico completo
          </a>
        </Button>
        <p className="text-xs text-muted-foreground mt-4">
          Grátis · Sem compromisso · Resposta em minutos
        </p>
      </div>
    </motion.div>
  );
}

function InsightCard({
  insight,
  index,
}: {
  insight: DiagnosticInsight;
  index: number;
}) {
  const icon =
    insight.prioridade === 'alta'
      ? AlertCircle
      : insight.prioridade === 'media'
        ? TrendingUp
        : Sparkles;
  const Icon = icon;
  const colorClass =
    insight.prioridade === 'alta'
      ? 'text-red-500 bg-red-500/10'
      : insight.prioridade === 'media'
        ? 'text-amber-500 bg-amber-500/10'
        : 'text-primary bg-primary/10';

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.15 }}
      className="flex gap-4 p-4 rounded-xl border border-border bg-background"
    >
      <div
        className={cn(
          'shrink-0 w-10 h-10 rounded-full flex items-center justify-center',
          colorClass
        )}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-sm sm:text-base mb-1">
          {insight.titulo}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {insight.descricao}
        </p>
      </div>
    </motion.div>
  );
}

// Helpers de label (mantidos inline pra não acoplar mais imports)
function marketplaceLabel(value: string): string {
  const map: Record<string, string> = {
    'mercado-livre': 'Mercado Livre',
    amazon: 'Amazon',
    shopee: 'Shopee',
    multi: 'Multi-marketplace',
    nenhum: 'Ainda não vende',
  };
  return map[value] ?? value;
}
function faturamentoLabel(value: string): string {
  const map: Record<string, string> = {
    'ate-10k': 'Até R$ 10k/mês',
    '10k-50k': 'R$ 10k–50k/mês',
    '50k-100k': 'R$ 50k–100k/mês',
    '100k-500k': 'R$ 100k–500k/mês',
    '500k+': '+R$ 500k/mês',
  };
  return map[value] ?? value;
}
function objetivoLabel(value: string): string {
  const map: Record<string, string> = {
    comecar: 'Começar do zero',
    otimizar: 'Otimizar operação',
    escalar: 'Escalar vendas',
    profissionalizar: 'Profissionalizar',
  };
  return map[value] ?? value;
}
