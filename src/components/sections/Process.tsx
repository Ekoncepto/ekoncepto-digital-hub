import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ClipboardList, Search, Target, BarChart2, ChevronDown } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

type ProcessStep = {
  number: number;
  title: string;
  description: string;
  position: 'left' | 'right';
  icon: React.ReactNode;
};

export const Process = () => {
  const steps: ProcessStep[] = [
    {
      number: 1,
      title: 'Onboarding e Diagnóstico',
      description:
        'Entendemos a fundo seu negócio, produtos e metas. Alinhamos objetivos e liberamos os acessos para começar.',
      position: 'left',
      icon: <ClipboardList className="w-10 h-10 text-brand" />,
    },
    {
      number: 2,
      title: 'Análise de Mercado',
      description:
        'Nossa tecnologia entra em campo para mapear concorrentes, preços, palavras-chave e as melhores oportunidades para seus produtos.',
      position: 'right',
      icon: <Search className="w-10 h-10 text-brand" />,
    },
    {
      number: 3,
      title: 'Criação e Otimização',
      description:
        'Executamos a estratégia: criamos conteúdo otimizado para SEO, gerenciamos o investimento em ADS e posicionamos seus anúncios.',
      position: 'left',
      icon: <Target className="w-10 h-10 text-brand" />,
    },
    {
      number: 4,
      title: 'Reports e Acompanhamento',
      description:
        'Você fica por dentro de tudo com relatórios mensais, reuniões quinzenais e suporte diário via WhatsApp com seu especialista.',
      position: 'right',
      icon: <BarChart2 className="w-10 h-10 text-brand" />,
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0,
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
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="processo"
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMjEgM2E5IDkgMCAwMS05IDkgOSA5IDAgMDEtOS05IDkgOSAwIDAxOS05IDkgOSAwIDAxOSA5em0tOSA5YTkgOSAwIDAwOSA5IDkgOSAwIDAwOS05IDkgOSAwIDAwLTktOXoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3 }}
        >
          <span className="inline-block text-brand font-semibold text-sm uppercase tracking-wider mb-3">
            Nosso Processo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-brand">4 passos</span> para o sucesso.
          </h2>
          <div className="w-20 h-1 bg-brand mx-auto my-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Temos um processo de trabalho transparente e organizado para garantir uma evolução
            acelerada e consistente.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          ref={containerRef}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Animated timeline line - Desktop */}
          <motion.div
            className="hidden md:block absolute h-full top-0 left-1/2 -ml-px w-0.5 bg-gradient-to-b from-brand via-brand/50 to-brand/0"
            variants={lineVariants}
          />

          <Accordion.Root type="single" collapsible className="space-y-8">
            {steps.map((step, index) => (
              <motion.div key={step.number} variants={itemVariants}>
                <Accordion.Item
                  value={`item-${index}`}
                  className="border-b border-white/10"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full text-left group">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-6 p-6 bg-white/5 rounded-t-lg"
                      >
                        <div className="relative">
                          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand to-brand-dark shadow-lg">
                            <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
                            <div className="relative z-10">{step.icon}</div>
                          </div>
                          <div className="absolute -bottom-1 -right-1 bg-brand text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
                            {step.number}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <ChevronDown className="w-6 h-6 text-white/50 transform transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      </motion.div>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="p-6 bg-black/20 rounded-b-lg">
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {step.description.split('. ').map((point, i) =>
                        point ? <li key={i}>{point}.</li> : null
                      )}
                    </ul>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>

          {/* Animated dots on the timeline */}
          <div className="hidden md:block absolute left-1/2 -ml-1.5 top-0 w-3 h-full">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className="absolute left-0 w-3 h-3 rounded-full bg-brand"
                initial={{ y: -20, opacity: 0 }}
                animate={controls}
                variants={{
                  hidden: { y: -20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.3 + index * 0.2,
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  },
                }}
                style={{ top: `${index * 24 + 10}%` }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
