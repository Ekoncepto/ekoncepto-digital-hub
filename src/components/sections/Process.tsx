import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Search, Rocket, TrendingUp } from 'lucide-react';

type ProcessStep = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const Process = () => {
  const steps: ProcessStep[] = [
    {
      number: 1,
      title: 'Onboarding e Diagnóstico',
      description:
        'Entendemos a fundo seu negócio, produtos e metas para um início de projeto alinhado e eficaz.',
      icon: <Briefcase className="w-10 h-10" />,
    },
    {
      number: 2,
      title: 'Análise de Mercado',
      description:
        'Mapeamos concorrentes, preços e palavras-chave para identificar as melhores oportunidades para seus produtos.',
      icon: <Search className="w-10 h-10" />,
    },
    {
      number: 3,
      title: 'Criação e Otimização',
      description:
        'Executamos a estratégia com conteúdo otimizado para SEO e gerenciamento de ADS para posicionar seus anúncios.',
      icon: <Rocket className="w-10 h-10" />,
    },
    {
      number: 4,
      title: 'Reports e Acompanhamento',
      description:
        'Relatórios mensais, reuniões quinzenais e suporte diário via WhatsApp para mantê-lo sempre informado.',
      icon: <TrendingUp className="w-10 h-10" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="processo" className="py-20 sm:py-24 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Nosso Processo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Como a <span className="text-primary">Ekoncepto</span> Transforma seu Negócio
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seguimos um processo de 4 passos, desenhado para garantir transparência, eficiência e
            resultados mensuráveis para sua empresa.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center border-t-4 border-primary"
              variants={itemVariants}
            >
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-primary/10 rounded-full animate-pulse"></div>
                <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-green-400 text-white rounded-full shadow-lg">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white text-sm font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
