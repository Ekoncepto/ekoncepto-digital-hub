import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, MousePointerClick } from 'lucide-react';

const MethodologyItem = ({ children }: { children: React.ReactNode }) => (
  <motion.li
    className="flex items-start group/li"
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    whileHover={{ x: 4 }}
    transition={{
      duration: 0.3,
      x: { type: 'spring', stiffness: 300, damping: 20 },
    }}
  >
    <motion.div
      className="h-5 w-5 flex-shrink-0 mt-1 mr-3 bg-primary/10 rounded-full p-0.5 group-hover/li:bg-primary/20 transition-colors duration-200"
      whileHover={{ scale: 1.1 }}
    >
      <svg
        className="h-4 w-4 text-primary mt-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </motion.div>
    <span className="text-gray-700 group-hover/li:text-gray-900 transition-colors duration-200">
      {children}
    </span>
  </motion.li>
);

const pillars = [
  {
    id: 'visibilidade',
    title: 'Visibilidade (Algoritmo)',
    icon: <Target className="h-6 w-6" />,
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
    icon: <MousePointerClick className="h-6 w-6" />,
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
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nossa Fórmula:{' '}
            <span className="text-primary">Visibilidade + Conversão = Vendas</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Não existe sorte, existe método. Dividimos nosso trabalho em dois pilares fundamentais
            que garantem o resultado.
          </p>
        </motion.div>

        {/* Mobile Tabs */}
        <div
          className="md:hidden mb-8
         bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {pillars.map(pillar => (
            <div key={pillar.id} className="border-b last:border-b-0">
              <button
                onClick={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
                className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                  activePillar === pillar.id ? 'bg-gray-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-lg mr-4">
                    <div className="text-primary">{pillar.icon}</div>
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
              <AnimatePresence>
                {activePillar === pillar.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0">
                      <p className="text-gray-600 mb-6">{pillar.description}</p>
                      <ul className="space-y-3">
                        {pillar.items.map((item, index) => (
                          <MethodologyItem key={index}>{item}</MethodologyItem>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              className="group bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{
                y: -8,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary/5 group-hover:bg-primary/10 p-3 rounded-xl mr-4 transition-all duration-300 group-hover:scale-110">
                  <motion.div
                    className="text-primary"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {pillar.icon}
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {pillar.title}
                  <span className="absolute inset-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-px left-0"></span>
                </h3>
              </div>
              <motion.p
                className="text-gray-600 mb-6 flex-grow"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {pillar.description}
              </motion.p>
              <ul className="space-y-3">
                {pillar.items.map((item, itemIndex) => (
                  <MethodologyItem key={itemIndex}>{item}</MethodologyItem>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
