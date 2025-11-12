import React from 'react';
import { founders } from '@/config/founders';
import FounderCard from '@/components/common/FounderCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
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
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {founders.map((founder, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <FounderCard founder={founder} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </motion.div>
  );
};

export default Founders;
