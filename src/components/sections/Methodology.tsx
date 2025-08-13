import React, { useState, useEffect } from 'react';

const MethodologyItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <div className="h-5 w-5 flex-shrink-0 mt-1 mr-3 bg-brand/10 rounded-full p-0.5">
      <svg
        className="h-4 w-4 text-brand mt-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className="text-gray-700">{children}</span>
  </li>
);

const pillars = [
  {
    id: 'visibilidade',
    title: 'Visibilidade (Algoritmo)',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10" cy="10" r="7" />
        <path d="M15 15L21 21" />
        <line x1="8" y1="7" x2="8" y2="13" />
        <line x1="10" y1="5" x2="10" y2="13" />
        <line x1="13" y1="9" x2="13" y2="13" />
      </svg>
    ),
    description:
      'Fazemos seus produtos serem encontrados. Usamos tecnologia para entender o que os clientes buscam e posicionamos seus anúncios na frente da concorrência.',
    items: [
      'Tecnologia Proprietária: Nosso "Scraper" analisa o mercado em tempo real, identificando palavras-chave, concorrentes e oportunidades.',
      'Otimização Orgânica (SEO): Ajustamos seus anúncios para que o algoritmo dos marketplaces trabalhe a seu favor.',
      'Gestão de Mídia Paga (ADS): Nosso time é certificado pelo Mercado Livre para otimizar seu investimento e maximizar o retorno.',
    ],
  },
  {
    id: 'conversao',
    title: 'Conversão (Compra)',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    ),
    description:
      'Depois de ser visto, seu anúncio precisa convencer. Criamos uma experiência de compra irresistível que transforma cliques em vendas.',
    items: [
      'Conteúdo de Alta Performance: Criamos títulos, descrições e imagens que quebram objeções e destacam os benefícios do seu produto.',
      'Precificação Inteligente: Analisamos a concorrência para garantir que seu preço seja competitivo e lucrativo.',
      'Criação de Ofertas Atrativas: Ajudamos a montar kits e promoções que aumentam o ticket médio e a taxa de conversão.',
    ],
  },
];

export const Methodology = () => {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  useEffect(() => {
    // Reset active pillar on mobile when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setActivePillar(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="metodologia" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nossa Fórmula:{' '}
            <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
              Visibilidade + Conversão = Vendas
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Não existe sorte, existe método. Dividimos nosso trabalho em dois pilares fundamentais
            que garantem o resultado.
          </p>
        </div>

        {/* Mobile Tabs */}
        <div className="md:hidden mb-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {pillars.map(pillar => (
            <div key={pillar.id} className="border-b last:border-b-0">
              <button
                onClick={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
                className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                  activePillar === pillar.id ? 'bg-gray-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div className="bg-brand/10 p-2 rounded-lg mr-4">
                    <div className="text-brand">{pillar.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold">{pillar.title}</h3>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    activePillar === pillar.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activePillar === pillar.id && (
                <div className="overflow-hidden">
                  <div className="p-5 pt-0">
                    <p className="text-gray-600 mb-6">{pillar.description}</p>
                    <ul className="space-y-3">
                      {pillar.items.map((item, index) => (
                        <MethodologyItem key={index}>{item}</MethodologyItem>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map(pillar => (
            <div
              key={pillar.id}
              className="group bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col relative overflow-hidden"
            >
              <div className="flex items-center mb-6">
                <div className="bg-brand/5 group-hover:bg-brand/10 p-3 rounded-xl mr-4 transition-all duration-300 group-hover:scale-110">
                  <div className="text-brand">{pillar.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-brand transition-colors duration-300">
                  {pillar.title}
                  <span className="absolute inset-0 w-full h-1 bg-gradient-to-r from-brand/0 via-brand/30 to-brand/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-px left-0"></span>
                </h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">{pillar.description}</p>
              <ul className="space-y-3">
                {pillar.items.map((item, itemIndex) => (
                  <MethodologyItem key={itemIndex}>{item}</MethodologyItem>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
