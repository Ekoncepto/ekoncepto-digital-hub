import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'Análise de Mercado',
      description:
        'Nossa tecnologia entra em campo para mapear concorrentes, preços, palavras-chave e as melhores oportunidades para seus produtos.',
      position: 'right',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Criação e Otimização',
      description:
        'Executamos a estratégia: criamos conteúdo otimizado para SEO, gerenciamos o investimento em ADS e posicionamos seus anúncios.',
      position: 'left',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
    {
      number: 4,
      title: 'Reports e Acompanhamento',
      description:
        'Você fica por dentro de tudo com relatórios mensais, reuniões quinzenais e suporte diário via WhatsApp com seu especialista.',
      position: 'right',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
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
        staggerChildren: 0.5,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section
      id="processo"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden"
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

          <div className="space-y-20 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`relative group ${index < steps.length - 1 ? 'pb-8' : ''}`}
                variants={itemVariants}
              >
                <div className="md:grid md:grid-cols-2 md:gap-x-16">
                  <div
                    className={`md:relative ${
                      step.position === 'right'
                        ? 'md:col-start-2 md:text-left'
                        : 'md:col-start-1 md:text-right'
                    }`}
                  >
                    {/* Step number and icon */}
                    <div
                      className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-brand to-brand-dark shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 ${
                        step.position === 'left' ? 'md:ml-auto' : 'md:mr-auto'
                      }`}
                    >
                      <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300"></div>
                      <div className="relative z-10 text-2xl font-bold text-white">{step.icon}</div>
                      <div className="absolute -bottom-2 -right-2 bg-brand text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                        {step.number}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Desktop connector line */}
                  <div className="hidden md:block">
                    <div
                      className={`h-0.5 bg-gradient-to-r ${step.position === 'left' ? 'from-brand/30 to-transparent' : 'from-transparent to-brand/30'} w-full`}
                    ></div>
                  </div>

                  {/* Right side content (empty for desktop) */}
                  <div className="hidden md:block"></div>
                </div>

                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-brand/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>

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
