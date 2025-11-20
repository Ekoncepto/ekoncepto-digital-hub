import React, { useState, useEffect } from 'react';
import { businessInfo, externalLinks } from '@/config/site';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { motion } from 'framer-motion';
import { Check, BarChart, Users, Zap, Award, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Founders } from '@/components/sections/Founders';

export const About = () => {
  const stats = [
    { value: '70%+', label: 'Crescimento médio em 6 meses', icon: BarChart },
    { value: '90', label: 'NPS (Net Promoter Score)', icon: Award },
    { value: 'R$100M+', label: 'Em vendas geradas', icon: Zap },
  ];

  const features = [
    'Equipe certificada pelos principais marketplaces',
    'Metodologia própria e validada',
    'Suporte dedicado e consultoria personalizada',
    'Relatórios semanais de desempenho',
  ];

  const testimonials = [
    {
      quote:
        'A E-Koncepto transformou nosso negócio. Em 4 meses já tivemos um crescimento de 120% nas vendas.',
      author: 'Carlos Silva',
      role: 'Diretor Comercial - Moda Esportiva',
    },
    {
      quote:
        'A equipe é incrível! Nos ajudaram a estruturar nossa operação do zero e hoje somos destaque no segmento.',
      author: 'Juliana Mendes',
      role: 'CEO - Casa & Decoração',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Mais do que uma consultoria, somos{' '}
            <span className="text-primary">parceiros do seu crescimento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Combinamos tecnologia, dados e experiência para impulsionar suas vendas nos principais
            marketplaces do Brasil.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="bg-muted/50 p-6 rounded-xl text-center"
                variants={item}
              >
                <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="size-8" />
                </div>
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <OptimizedImage
                src="/images/timeReuniao.jpeg"
                alt="Time da E-Koncepto em reunião de planejamento estratégico"
                widths={[320, 640, 960]}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto"
                imgClassName="w-full h-auto"
                width={1024}
                height={680}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Por que escolher a {businessInfo.name}?
            </h3>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {businessInfo.about ||
                'Somos uma consultoria especializada em marketplaces que combina tecnologia de ponta com expertise prática para alavancar seus resultados. Nossa abordagem mão na massa garante que você não apenas receba consultoria, mas resultados reais e mensuráveis.'}
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="size-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={externalLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <span>Fale com um especialista</span>
                </Button>
              </a>
              <a href="#metodologia">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-gray-900 text-gray-900 hover:bg-gray-200"
                >
                  <span>Conheça nossa metodologia</span>
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          className="mt-24 grid md:grid-cols-2 gap-8 mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted/30 p-6 rounded-xl relative">
              <Quote className="absolute top-6 right-6 size-8 text-muted-foreground/20" />
              <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <Founders />

        {/* Testimonials */}
      </div>
    </section>
  );
};

export default About;
