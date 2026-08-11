import React from 'react';
import { founders } from '@/config/founders';
import FounderCard from '@/components/common/FounderCard';
import { motion } from 'framer-motion';

/**
 * /shopee Founders — same side-by-side grid as FoundersGridLp, but with
 * tighter vertical padding to keep the page rhythm compact (the /shopee
 * page uses reduced padding across all sections to fill more of the
 * viewport on desktop). The /lp version keeps its own roomier spacing.
 */
export const FoundersShopee = () => {
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
          {founders.map((founder, index) => (
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
      </div>
    </motion.div>
  );
};

export default FoundersShopee;
