import React, { useEffect, useRef } from 'react';

const MarketOverview = () => {
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate progress bars on scroll into view
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const width = target.getAttribute('data-width') || '0%';
            target.style.width = width;
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    progressBarsRef.current.forEach(bar => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  const progressData = [
    {
      year: '2019',
      percentage: '17%',
      width: '17%',
      isProjection: false,
    },
    {
      year: '2024',
      percentage: '43%',
      width: '43%',
      isProjection: false,
    },
    {
      year: '2029*',
      percentage: '54%',
      width: '54%',
      isProjection: true,
    },
  ];

  return (
    <section id="mercado" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Um mercado digital em <span className="text-primary">plena expansão.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            O e-commerce não é mais o futuro, é o presente. Veja por que sua empresa precisa estar
            bem posicionada.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Crescimento Imparável</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desde a pandemia, o e-commerce se tornou essencial. Empresas que não se posicionam
                de forma estratégica nos grandes marketplaces estão perdendo a maior fatia do
                mercado, que deve representar mais da metade de todo o varejo até 2029.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="font-medium text-gray-800">
                  Os marketplaces (Mercado Livre, Amazon, Shopee) já concentram mais de{' '}
                  <span className="text-primary font-bold text-xl">75%</span> de todas as vendas
                  online. É aqui que o seu cliente está.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Progress Bars */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full">
              <h4 className="text-xl font-bold text-center mb-6 text-gray-800">
                Penetração do E-commerce no Varejo Brasileiro
              </h4>
              <div className="space-y-4 md:space-y-5">
                {progressData.map((item, index) => (
                  <div key={item.year} className="space-y-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-700">{item.year}</span>
                      <div className="flex items-center">
                        <span className="font-bold text-primary">{item.percentage}</span>
                        {item.isProjection && (
                          <span className="text-xs text-gray-500 ml-1">projeção</span>
                        )}
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div
                        ref={el => (progressBarsRef.current[index] = el)}
                        data-width={item.width}
                        className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs md:text-sm text-gray-500 mt-6 text-center">
                Fonte: ABComm - Associação Brasileira de Comércio Eletrônico
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;
