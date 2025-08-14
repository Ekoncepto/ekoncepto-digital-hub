import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { externalLinks, services } from '@/config/site';
import { ArrowRight, BarChart2, Rocket, Zap, TrendingUp, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const iconComponents = {
  'trending-up': TrendingUp,
  'bar-chart-2': BarChart2,
  zap: Zap,
  rocket: Rocket,
} as const;

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

export const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Soluções completas para cada etapa do seu negócio
          </h2>
          <p className="text-lg text-muted-foreground">
            Da primeira venda à expansão nacional, temos o pacote ideal para seu momento.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map(service => {
            const Icon = iconComponents[service.icon as keyof typeof iconComponents] || ArrowRight;
            return (
              <motion.div key={service.id} variants={item}>
                <Card className="h-full p-6 border-2 border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex flex-col h-full">
                    <div className="inline-flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="size-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      className="inline-block mt-6"
                      href={externalLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Falar com um especialista no WhatsApp"
                    >
                      <Button
                        className="mt-auto w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        variant="outline"
                        size="lg"
                      >
                        {service.cta}
                        <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-6">Não encontrou o que procura?</p>
          <a
            className="inline-block mt-6"
            href={externalLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com um especialista no WhatsApp"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Fale com nosso time
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
