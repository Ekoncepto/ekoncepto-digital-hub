import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

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
              Lançamos e escalamos suas vendas em plataformas como Mercado Livre, Amazon e Shopee com uma consultoria mão na massa orientada a resultados.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/5511971630441?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es." target="_blank" rel="noreferrer">
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
          <div className="relative">
            <svg
              viewBox="0 0 520 400"
              className="w-full h-auto drop-shadow-xl"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={`hsl(var(--primary))`} />
                  <stop offset="100%" stopColor={`hsl(var(--accent))`} />
                </linearGradient>
              </defs>

              {/* Outer ring */}
              <circle cx="260" cy="200" r="150" fill="none" stroke="url(#g1)" strokeWidth="20" opacity="0.9" />
              {/* Inner subtle ring */}
              <circle cx="260" cy="200" r="110" fill="none" stroke={`hsl(var(--border))`} strokeWidth="14" />

              {/* Growth bars */}
              <rect x="200" y="240" width="28" height="60" rx="8" fill={`hsl(var(--accent))`} />
              <rect x="238" y="210" width="28" height="90" rx="8" fill={`hsl(var(--primary))`} />
              <rect x="276" y="180" width="28" height="120" rx="8" fill="url(#g1)" />

              {/* Decorative curved shape */}
              <path d="M40 340 C 150 300, 370 420, 520 320 L520 400 L40 400 Z" fill={`hsl(var(--secondary))`} opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
