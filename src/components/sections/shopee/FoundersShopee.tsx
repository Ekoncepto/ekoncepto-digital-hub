import React from 'react';
import { User, Users } from 'lucide-react';
import { founders } from '@/config/founders';
import FounderCard from '@/components/common/FounderCard';
import { motion } from 'framer-motion';

/**
 * /shopee Founders — same side-by-side grid as FoundersGridLp, but with
 * tighter vertical padding to keep the page rhythm compact (the /shopee
 * page uses reduced padding across all sections to fill more of the
 * viewport on desktop). The /lp version keeps its own roomier spacing.
 *
 * Lucas Reina vem primeiro (quem atende o lead de Shopee). A ordem é
 * ajustada AQUI para não afetar as outras páginas que usam `founders`.
 *
 * Abaixo do grid, uma faixa sinaliza a robustez do time (+6 especialistas)
 * sem identificar pessoas — o objetivo é mostrar estrutura, não nomes.
 */
export const FoundersShopee = () => {
  const ordered = [
    ...founders.filter((f) => f.name === 'Lucas Reina'),
    ...founders.filter((f) => f.name !== 'Lucas Reina'),
  ];

  return (
    <motion.div
      data-testid="founders-section"
      className="py-12 md:py-16 lg:py-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Quem vai cuidar da sua operação
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fundadores que estiveram dentro das plataformas — agora trabalhando pelo seu lado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {ordered.map((founder, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <FounderCard founder={founder} />
            </motion.div>
          ))}
        </div>

        {/* Robustez do time: +6 especialistas por trás dos fundadores.
            Avatares genéricos (ninguém identificado) + contagem explícita. */}
        <motion.div
          className="mt-10 md:mt-12 max-w-3xl mx-auto bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex -space-x-2.5 shrink-0" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="w-9 h-9 rounded-full bg-primary/15 border-2 border-white flex items-center justify-center shadow-sm"
              >
                <User className="w-4 h-4 text-primary" />
              </span>
            ))}
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">
            <strong className="text-gray-900 font-semibold">
              E um time de +6 especialistas apoiando sua conta
            </strong>{' '}
            — Shopee Ads, design de fichas e gestão de operação, coordenados pelos fundadores.
          </p>
          <Users className="w-5 h-5 text-primary shrink-0 hidden sm:block" aria-hidden="true" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FoundersShopee;
