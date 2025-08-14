import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'O que vocês fazem de verdade?',
    answer:
      'Nós turbinamos suas vendas nos marketplaces: otimizamos anúncios, gerenciamos campanhas de mídia, recomendamos preços, cuidamos da operação e acompanhamos os resultados de perto para aumentar seu faturamento.',
  },
  {
    question: 'Onde vocês atuam?',
    answer:
      'Atuamos nos principais canais de venda do Brasil: Mercado Livre, Amazon e Shopee. Selecionamos os marketplaces mais estratégicos para o seu produto.',
  },
  {
    question: 'Quanto tempo até ver resultado?',
    answer:
      'Os primeiros sinais de melhora costumam aparecer entre 2 e 4 semanas. Um crescimento mais consolidado e expressivo geralmente é observado a partir de 6 meses, que é o período ideal para otimização completa dos anúncios e estratégias.',
  },
  {
    question: 'Como é a forma de cobrança?',
    answer:
      'Nossos valores são definidos com base na faixa de faturamento do seu negócio e nos serviços contratados. Durante nossa consultoria inicial, avaliamos suas necessidades específicas e propomos um plano personalizado com valores transparentes e alinhados ao seu orçamento.',
  },
  {
    question: 'Vocês usam alguma tecnologia especial?',
    answer:
      'Sim. Contamos com ferramentas próprias para otimização de preços, monitoramento de anúncios e análise de demanda, o que nos permite tomar decisões mais rápidas e assertivas.',
  },
  {
    question: 'O que preciso pra começar?',
    answer:
      'Precisamos do acesso às suas contas nos marketplaces e das informações sobre seus produtos e estoque. O resto, nós organizamos e estruturamos em conjunto.',
  },
  {
    question: 'Vocês cuidam de fotos, vídeos e conteúdo?',
    answer:
      'Não realizamos a produção de conteúdo audiovisual, mas orientamos você sobre as melhores práticas para produção de imagens e vídeos que se adequem a cada marketplace. Otimizamos o material fornecido, garantindo que esteja de acordo com os padrões de cada plataforma para criar anúncios mais atrativos e com maior conversão.',
  },
  {
    question: 'E os anúncios pagos?',
    answer:
      'Sim, como serviço opcional, gerenciamos todo o seu investimento em mídia paga, incluindo Product Ads e estratégias de funil completo, de acordo com a necessidade do seu negócio. Cuidamos da estratégia, segmentação e criativos para garantir o melhor retorno sobre o investimento (ROAS) em cada canal. Este serviço é contratado à parte, com um plano personalizado para o seu negócio.',
  },
];

export const Faq = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary mb-4">
            <HelpCircle className="size-8" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Respostas diretas para as perguntas mais comuns. Se a sua dúvida não estiver aqui, fale
            com a gente.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <motion.div key={index} variants={item}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
