import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, Zap, PawPrint, ShoppingCart, Box } from 'lucide-react';

interface SuccessCase {
  id: number;
  title: string;
  value: string;
  description: string;
  delay?: number;
  sector:
    | 'equipamentos-hospitalares'
    | 'material-eletrico'
    | 'higiene-beleza-animal'
    | 'magazine'
    | 'outros';
}

const SectorIcon = ({ sector }: { sector: string }) => {
  const iconClass = 'w-6 h-6 text-primary';

  switch (sector) {
    case 'equipamentos-hospitalares':
      return <HeartPulse className={iconClass} />;
    case 'material-eletrico':
      return <Zap className={iconClass} />;
    case 'higiene-beleza-animal':
      return <PawPrint className={iconClass} />;
    case 'magazine':
      return <ShoppingCart className={iconClass} />;
    default:
      return <Box className={iconClass} />;
  }
};

const SuccessCases = () => {
  const [inView, setInView] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const formatSectorName = (sector: string) => {
    return sector
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const cases: SuccessCase[] = [
    {
      id: 1,
      title: 'Crescimento de',
      value: '+R$ 2 milhões/mês',
      description: 'em vendas em apenas 4 meses',
      delay: 0.1,
      sector: 'material-eletrico',
    },
    {
      id: 2,
      title: 'De zero a',
      value: '+R$ 152 mil/mês',
      description: 'em 2 meses após o lançamento',
      delay: 0.2,
      sector: 'equipamentos-hospitalares',
    },
    {
      id: 3,
      title: 'Aumento de',
      value: '+89% no faturamento',
      description: 'em apenas 1 mês',
      delay: 0.3,
      sector: 'magazine',
    },
    {
      id: 4,
      title: 'Crescimento de',
      value: '+239% em vendas',
      description: 'em 6 meses',
      delay: 0.4,
      sector: 'higiene-beleza-animal',
    },
  ];

  useEffect(() => {
    // Check if window is defined (for SSR)
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Initial check
      checkMobile();

      // Add event listener for window resize
      window.addEventListener('resize', checkMobile);

      // Cleanup
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const handleViewportEnter = (id: number) => {
    if (isMobile) {
      setInView(id);
    }
  };

  return (
    <section id="cases" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Resultados que <span className="text-primary">falam por si.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Não prometemos, nós provamos. Veja o que nossa metodologia fez por alguns de nossos
            clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {cases.map(caseItem => (
            <motion.div
              key={caseItem.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: isMobile ? 0 : caseItem.delay,
                },
              }}
              viewport={{ once: true, margin: '-50px' }}
              onViewportEnter={() => handleViewportEnter(caseItem.id)}
              whileHover={
                !isMobile
                  ? {
                      y: -5,
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                    }
                  : {}
              }
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

              <div className="relative z-10 h-full flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <SectorIcon sector={caseItem.sector} />
                </div>

                <h3 className="text-4xl font-bold text-gray-900 mb-2">{caseItem.value}</h3>

                <p className="text-sm font-medium text-gray-600 mb-4">
                  {caseItem.title} {caseItem.description}
                </p>

                <div className="mt-auto pt-4 w-full border-t border-gray-100">
                  <span className="inline-flex items-center text-xs font-medium text-gray-500">
                    Empresa do setor de {formatSectorName(caseItem.sector)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
