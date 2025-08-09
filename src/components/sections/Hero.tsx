import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 size-[600px] rounded-full blur-3xl opacity-25 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT),transparent_60%)]" />
        <div className="absolute -bottom-40 -right-40 size-[600px] rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle_at_center,theme(colors.accent.DEFAULT),transparent_60%)]" />
      </div>
      <div className="container mx-auto py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Consultoria de E-commerce focada em Marketplaces
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Lançamos e escalamos suas vendas em plataformas como Mercado Livre, Amazon e Shopee
              com uma consultoria mão na massa orientada a resultados.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5511971630441?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="hero" size="lg" aria-label="Falar no WhatsApp">
                  Falar no WhatsApp
                  <MessageCircle className="ml-1" />
                </Button>
              </a>
              <a href="#servicos">
                <Button variant="outline" size="lg">
                  Conheça os serviços
                  <ArrowRight className="ml-1" />
                </Button>
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full blur-2xl opacity-30 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT),transparent_60%)]" />
              <img
                src="/images/hero-image.png"
                alt="Símbolo da E-Koncepto — crescimento em marketplaces"
                className="relative w-[380px] max-w-full h-auto"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
