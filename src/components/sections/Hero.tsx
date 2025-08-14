import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export const Hero = () => {
  useEffect(() => {
    // Add scroll reveal animation to marketplace logos
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.marketplace-logo');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-brand-dark text-white text-center py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="max-w-4xl mx-auto animate-fade-in-up"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Aceleramos suas vendas em marketplaces com{' '}
            <span className="text-brand bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand-light">
              tecnologia e expertise.
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Utilizamos dados, tecnologia própria e um time certificado para posicionar seus produtos
            e multiplicar seu faturamento.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="#contato"
              className="bg-brand hover:bg-brand/90 text-white font-bold py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-brand/20"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              Quero vender mais
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
        </div>

        {/* Marketplaces Logos */}
        <div
          className="bg-gray-800/50 py-8 mt-12 md:mt-16 rounded-xl backdrop-blur-sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-300 font-medium mb-6 text-sm sm:text-base">
              Especialistas nos maiores canais de venda do Brasil:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 items-center justify-items-center">
              {[
                { src: '/images/marketplaces/mercado-livre.svg', alt: 'Mercado Livre' },
                { src: '/images/marketplaces/amazon.svg', alt: 'Amazon' },
                { src: '/images/marketplaces/shopee.svg', alt: 'Shopee' },
                //{ src: "/images/marketplaces/magalu.svg", alt: "Magazine Luiza" },
              ].map((marketplace, index) => (
                <div
                  key={marketplace.alt}
                  className="marketplace-logo opacity-0 transform translate-y-4 hover:scale-110 transition-all duration-500"
                  style={{
                    animationDelay: `${200 + index * 100}ms`,
                  }}
                >
                  <div className="bg-white/90 p-5 rounded-lg backdrop-blur-sm">
                    <img
                      src={marketplace.src}
                      alt={marketplace.alt}
                      className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-300"
                      width={marketplace.alt === 'Mercado Livre' ? 134 : marketplace.alt === 'Amazon' ? 100 : 82}
                      height={marketplace.alt === 'Mercado Livre' ? 42 : marketplace.alt === 'Amazon' ? 33 : 26}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
