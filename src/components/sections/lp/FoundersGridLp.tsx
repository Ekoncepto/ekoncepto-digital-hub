import React from 'react';
import { founders } from '@/config/founders';
import FounderCard from '@/components/common/FounderCard';
import { motion } from 'framer-motion';

/**
 * LP-only Founders — shows all founders side by side in a responsive grid
 * instead of the auto-playing carousel used on the home.
 *
 * Rationale: with two partners, a grid lets the visitor see both at once
 * and compare, rather than waiting for the autoplay to reveal the second.
 * The grid collapses to a single column on mobile so the bios stay
 * readable (the FounderCard bio is long-form).
 */
export const FoundersGridLp = () => {
  return (
    <motion.div
      data-testid="founders-section"
      className="py-16 md:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Conheça os Fundadores
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe de liderança combina experiência, paixão e um compromisso inabalável com o
            sucesso de nossos clientes.
          </p>
        </div>

        {/* Grid: 2 columns on desktop, 1 column on mobile (bios are long-form). */}
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

export default FoundersGridLp;
