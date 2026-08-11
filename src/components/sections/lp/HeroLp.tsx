import { whatsappLink } from '@/config/site';
import { useEffect } from 'react';

/**
 * LP-only Hero — adds a social-proof stats bar, a risk-reversal CTA
 * ("Quero meu diagnóstico gratuito"), microcopy to reduce friction,
 * and a contextual WhatsApp message so inbound leads are attributable.
 */
export const HeroLp = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.marketplace-logo');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Social proof stats — surfaced from the About section up to the hero.
  const stats = [
    { value: '+R$ 100M', label: 'em vendas geradas' },
    { value: '+70%', label: 'crescimento médio em 6 meses' },
    { value: 'NPS 90', label: 'satisfação dos clientes' },
  ];

  return (
    <section className="bg-gray-900 text-white text-center py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="max-w-4xl mx-auto animate-fade-in-up"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Aceleramos suas vendas em marketplaces com{' '}
            <span className="text-primary">tecnologia e expertise.</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Utilizamos dados, tecnologia própria e um time certificado para posicionar seus produtos
            e multiplicar seu faturamento.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <a
              href={whatsappLink('hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/20"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              Quero meu diagnóstico gratuito
            </a>
            <a
              href="#cases"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
            >
              Veja nossos resultados
            </a>
          </div>

          {/* Microcopy — reduces psychological friction below the CTA. */}
          <p className="text-sm text-gray-400 mb-12">
            Resposta em até 1 dia útil · Sem compromisso · Diagnóstico gratuito
          </p>
        </div>

        {/* Social proof stats — pulled up from the About section. */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Marketplaces Logos */}
        <div
          className="bg-gray-800/50 py-8 mt-12 md:mt-16 rounded-xl backdrop-blur-sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-center text-gray-300 font-medium mb-6 text-sm sm:text-base">
            Especialistas nos maiores canais de venda do Brasil:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 items-center justify-items-center">
            {[
              { src: '/images/marketplaces/mercado-livre.svg', alt: 'Mercado Livre' },
              { src: '/images/marketplaces/amazon.svg', alt: 'Amazon' },
              { src: '/images/marketplaces/shopee.svg', alt: 'Shopee' },
            ].map((marketplace, index) => (
              <div
                key={marketplace.alt}
                className="marketplace-logo transform translate-y-4 hover:scale-110 transition-all duration-500"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="bg-white/90 p-5 rounded-lg backdrop-blur-sm">
                  <img
                    src={marketplace.src}
                    alt={marketplace.alt}
                    className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-300"
                    width={
                      marketplace.alt === 'Mercado Livre'
                        ? 134
                        : marketplace.alt === 'Amazon'
                          ? 100
                          : 82
                    }
                    height={
                      marketplace.alt === 'Mercado Livre'
                        ? 42
                        : marketplace.alt === 'Amazon'
                          ? 33
                          : 26
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLp;
