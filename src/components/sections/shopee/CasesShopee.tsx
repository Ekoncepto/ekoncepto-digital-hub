import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Zap, PawPrint, ShoppingCart, Box } from 'lucide-react';
import { whatsappLink } from '@/config/site';

/**
 * /shopee Cases — same strong metrics as the main LP, reframed with
 * Shopee-flavored copy. Theme is light; numbers use the Shopee orange
 * primary via the .shopee-theme wrapper on the page root.
 *
 * The cases are platform-agnostic (by sector, not marketplace), so they
 * stay credible on a Shopee page without false attribution.
 */
const CasesShopee = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Manual map with correct Portuguese accents — the generic capitalize
  // helper was outputting "Material Eletrico" (no accent), which looks sloppy.
  const sectorLabels: Record<string, string> = {
    'material-eletrico': 'Material Elétrico',
    'equipamentos-hospitalares': 'Equipamentos Hospitalares',
    'higiene-beleza-animal': 'Higiene e Beleza Animal',
    magazine: 'Magazine',
  };
  const formatSectorName = (sector: string) => sectorLabels[sector] ?? 'Outros';

  const cases = [
    {
      id: 1,
      headline: 'De operação estagnada a',
      value: '+R$ 2 milhões/mês',
      description: 'em vendas em apenas 4 meses',
      delay: 0.1,
      sector: 'material-eletrico',
    },
    {
      id: 2,
      headline: 'Do zero a',
      value: '+R$ 152 mil/mês',
      description: 'em 2 meses após o lançamento',
      delay: 0.2,
      sector: 'equipamentos-hospitalares',
    },
    {
      id: 3,
      headline: 'Faturamento escalado em',
      value: '+89%',
      description: 'já no primeiro mês de operação',
      delay: 0.3,
      sector: 'magazine',
    },
    {
      id: 4,
      headline: 'Liderança de categoria com',
      value: '+239% em vendas',
      description: 'em 6 meses de gestão',
      delay: 0.4,
      sector: 'higiene-beleza-animal',
    },
  ];

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  return (
    <section id="cases" className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-gray-900">
            Isso é o que acontece quando você para de{' '}
            <span className="text-primary">chutar</span> e otimiza com método.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Resultados reais que aplicamos em marketplaces. O mesmo método, focado em fazer suas
            vendas na Shopee crescerem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {cases.map(caseItem => (
            <motion.div
              key={caseItem.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: isMobile ? 0 : caseItem.delay },
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={
                !isMobile
                  ? { y: -5, boxShadow: '0 10px 25px -5px rgba(238, 77, 45, 0.15)' }
                  : {}
              }
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#EE4D2D] to-[#F69E15]"></div>

              <div className="relative z-10 h-full flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <SectorIcon sector={caseItem.sector} />
                </div>

                <p className="text-sm font-medium text-gray-500 mb-1">{caseItem.headline}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{caseItem.value}</h3>
                <p className="text-base font-medium text-gray-600 mb-4">{caseItem.description}</p>

                <div className="mt-auto pt-4 w-full border-t border-gray-100">
                  <span className="inline-flex items-center text-sm font-medium text-gray-500">
                    Setor: {formatSectorName(caseItem.sector)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA at peak persuasion — single compact line: the page already
            has WhatsApp CTAs in the hero, promo and contact; a big box here
            repeated the offer and the revenue number a second time. */}
        <motion.div
          className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            Quer resultados assim na sua operação da Shopee?
          </h3>
          <a
            href={whatsappLink('shopee-cases')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#EE4D2D] hover:bg-[#d4421f] text-white font-bold py-3 px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shrink-0"
          >
            Quero resultados assim
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CasesShopee;
