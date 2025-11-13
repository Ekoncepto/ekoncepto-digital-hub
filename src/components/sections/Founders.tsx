import React from 'react';
import { founders } from '@/config/founders';
import FounderCard from '@/components/common/FounderCard';
import { motion } from 'framer-motion';

export const Founders = () => {
  return (
    <motion.div
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
            Nossa equipe de liderança combina experiência, paixão e um compromisso inabalável com o sucesso de nossos clientes.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <FounderCard founder={founder} key={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Founders;
