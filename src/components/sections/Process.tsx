import { businessInfo } from '@/config/site';

type ProcessStep = {
  title: string;
  description: string;
};

export const Process = () => {
  // Default process steps if not defined in businessInfo
  const defaultSteps: ProcessStep[] = [
    { title: 'Discovery', description: 'Analisamos sua operação e oportunidades.' },
    { title: 'Setup', description: 'Estruturamos contas, catálogos e integrações.' },
    { title: 'Lançamento', description: 'Publicação e primeiros resultados.' },
    { title: 'Otimização', description: 'Ajustes em anúncios, preços e logística.' },
    { title: 'Performance', description: 'Campanhas e alavancas de tráfego.' },
    { title: 'Escala', description: '+ canais, + sortimento e governança.' },
  ];

  // Use process steps from businessInfo if available, otherwise use defaults
  const steps = businessInfo.processSteps || defaultSteps;

  return (
    <section id="processo" className="py-14 md:py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Como trabalhamos</h2>
          <p className="text-muted-foreground mt-2">
            Um processo claro para tirar suas metas do papel.
          </p>
        </div>

        <ol className="relative grid gap-8 md:grid-cols-6">
          {steps.map((s, i) => (
            <li key={i} className="flex flex-col items-center text-center">
              <div className="relative flex items-center justify-center">
                <span className="h-10 w-10 rounded-full bg-gradient-to-tr from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-primary-foreground grid place-content-center font-semibold shadow-md">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
