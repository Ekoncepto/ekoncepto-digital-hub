/**
 * Hero da página /diagnostico.
 *
 * Headline + prova social curta, sem roubar foco do quiz.
 * Layout enxuto: o quiz é o protagonista da página.
 */
import { Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { businessInfo, socialProof } from '@/config/site';

const benefits = [
  { icon: Clock, label: '2 minutos' },
  { icon: ShieldCheck, label: 'Grátis e sem compromisso' },
  { icon: Sparkles, label: '100% personalizado' },
];

export default function HeroDiagnostico() {
  return (
    <header className="text-center mb-10 sm:mb-14">
      <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-4">
        Diagnóstico gratuito
      </span>
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-3">
        Descubra onde você está{' '}
        <span className="text-primary">perdendo dinheiro</span> em marketplaces
      </h1>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-6">
        Em menos de 2 minutos, {businessInfo.name} monta um diagnóstico
        personalizado da sua operação — e te mostra exatamente o próximo passo.
      </p>

      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
        {benefits.map(({ icon: Icon, label }) => (
          <span key={label} className="inline-flex items-center gap-1.5">
            <Icon className="w-4 h-4 text-primary" aria-hidden />
            {label}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm">
        <span className="font-semibold text-foreground">
          {socialProof.totalRevenue}
        </span>{' '}
        <span className="text-muted-foreground">{socialProof.totalRevenueDescription}</span>
        <span className="mx-2 text-muted-foreground/40">·</span>
        <span className="font-semibold text-foreground">{socialProof.brandsServed}</span>{' '}
        <span className="text-muted-foreground">{socialProof.brandsServedDescription}</span>
      </p>
    </header>
  );
}
