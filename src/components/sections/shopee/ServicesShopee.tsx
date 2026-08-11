import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Rocket, Check } from 'lucide-react';
import { whatsappLink } from '@/config/site';

/**
 * /shopee Services — three Shopee-specific offerings, each with a
 * contextual WhatsApp CTA (source-attributed). Light theme.
 *
 * Reframed from the generic home services to Shopee realities:
 * - diagnosis = full account/ads/competition audit
 * - optimization = listing SEO + Shopee Ads management (reduces CAC)
 * - scale = coupons, flash sales, campaigns without burning margin
 */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  search: Search,
  zap: Zap,
  rocket: Rocket,
};

const services = [
  {
    id: 'diagnostico',
    name: 'Diagnóstico Shopee',
    description:
      'Análise completa da sua conta, anúncios e concorrência na Shopee. Plano de ação de 90 dias.',
    icon: 'search',
    cta: 'Quero o diagnóstico',
    source: 'shopee-services-diagnostico',
    features: [
      'Auditoria de anúncios e catálogo',
      'Análise da concorrência direta',
      'Mapeamento de oportunidades de preço',
      'Plano de ação para 30/60/90 dias',
    ],
  },
  {
    id: 'ads',
    name: 'Otimização + Shopee Ads',
    description:
      'Anúncios que ranqueiam no buscador da Shopee + gestão de Shopee Ads para reduzir seu CAC.',
    icon: 'zap',
    cta: 'Quero otimizar',
    source: 'shopee-services-ads',
    features: [
      'SEO de anúncios para o buscador Shopee',
      'Gestão de campanhas pagas (Shopee Ads)',
      'Otimização de títulos, imagens e fichas',
      'Ajustes de precificação e margem',
    ],
  },
  {
    id: 'escala',
    name: 'Escala com Promoções',
    description:
      'Estratégia de cupons, flash sales e campanhas para escalar vendas sem queimar margem.',
    icon: 'rocket',
    cta: 'Quero escalar',
    source: 'shopee-services-escala',
    features: [
      'Estratégia de cupons e cashback',
      'Calendarização de flash sales',
      'Campanhas sazonais e datas comemorativas',
      'Gestão de avaliações e reputação',
    ],
  },
];

const ServicesShopee = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="servicos" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-900">
            Como ajudamos você a <span className="text-primary">vender mais na Shopee</span>
          </h2>
          <p className="text-lg text-gray-600">
            Do diagnóstico à escala — um plano para cada fase da sua operação.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map(service => {
            const Icon = iconMap[service.icon] ?? Zap;
            return (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 h-full flex flex-col"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(service.source)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    service.id === 'diagnostico'
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-md'
                      : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {service.cta}
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShopee;
