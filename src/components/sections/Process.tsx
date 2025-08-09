export const Process = () => {
  const steps = [
    { t: "Discovery", d: "Analisamos sua operação e oportunidades." },
    { t: "Setup", d: "Estruturamos contas, catálogos e integrações." },
    { t: "Lançamento", d: "Publicação e primeiros resultados." },
    { t: "Otimização", d: "Ajustes em anúncios, preços e logística." },
    { t: "Performance", d: "Campanhas e alavancas de tráfego." },
    { t: "Escala", d: "+ canais, + sortimento e governança." },
  ];

  return (
    <section id="processo" className="py-14 md:py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Como trabalhamos</h2>
          <p className="text-muted-foreground mt-2">Um processo claro para tirar suas metas do papel.</p>
        </div>

        <ol className="relative grid gap-8 md:grid-cols-6">
          {steps.map((s, i) => (
            <li key={i} className="flex flex-col items-center text-center">
              <div className="relative flex items-center justify-center">
                <span className="h-10 w-10 rounded-full bg-gradient-to-tr from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-primary-foreground grid place-content-center font-semibold shadow-md">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-3 font-semibold">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
