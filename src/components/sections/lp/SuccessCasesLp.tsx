import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Zap, PawPrint, ShoppingCart, Box, TrendingUp } from 'lucide-react';
import { whatsappLink } from '@/config/site';

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

/**
 * LP-only SuccessCases — keeps the strong metric cards from the home,
 * then capitalizes on the peak-persuasion moment with a contextual
 * WhatsApp CTA right below them ("Quero resultados assim").
 */
const SuccessCasesLp = () => {
  const [isMobile, setIsMobile] = useState(false);

  const formatSectorName = (sector: string) =>
    sector
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

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
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

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
                transition: { duration: 0.5, delay: isMobile ? 0 : caseItem.delay },
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={
                !isMobile
                  ? { y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }
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

        {/* CTA at peak persuasion — the home version stops here with no action. */}
        <motion.div
          className="mt-12 md:mt-16 text-center bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Quer resultados assim na sua operação?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Mais de 50 marcas atendidas em Mercado Livre, Amazon e Shopee. Receba um diagnóstico
            gratuito e descubra onde estão as suas maiores oportunidades.
          </p>
          <a
            href={whatsappLink('cases')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Quero resultados assim
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessCasesLp;
