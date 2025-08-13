import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const iconClass = 'w-6 h-6 text-brand';

  switch (sector) {
    case 'equipamentos-hospitalares':
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.194 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.562-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'material-eletrico':
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10a1 1 0 01-1.64 0l-7-10A1 1 0 014 7h4V2a1 1 0 011.7-.954l3 3z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'higiene-beleza-animal':
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'magazine':
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      );
    default:
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      );
  }
};

const SuccessCases = () => {
  const [inView, setInView] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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
            Resultados que{' '}
            <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
              falam por si.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Não prometemos, nós provamos. Veja o que nossa metodologia fez por alguns de nossos
            clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-brand-light"></div>

              <div className="relative z-10 h-full flex flex-col items-center">
                <div className="w-16 h-16 bg-brand/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand/10 transition-colors duration-300">
                  <SectorIcon sector={caseItem.sector} />
                </div>

                <h3 className="text-4xl font-bold text-gray-900 mb-2">{caseItem.value}</h3>

                <p className="text-sm font-medium text-gray-600 mb-4">
                  {caseItem.title} {caseItem.description}
                </p>

                <div className="mt-auto pt-4 w-full border-t border-gray-100">
                  <span className="inline-flex items-center text-xs font-medium text-gray-500">
                    <svg
                      className="w-3 h-3 mr-1.5 text-brand"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Case de sucesso
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
