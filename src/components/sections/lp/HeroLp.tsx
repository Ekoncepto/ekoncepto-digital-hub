import { whatsappLink, socialProof } from '@/config/site';
import { useEffect } from 'react';

/**
 * LP-only Hero — premium authority positioning.
 *
 * Copy strategy vs. competitor (Mamba Digital):
 * They lead with scale/volume ("#1 da LATAM", "+6k clientes", "+R$ 1Bi").
 * We lead with INSIDER EXPERTISE — the founders ran marketplaces from the
 * inside (Mercado Livre, Americanas) before fighting for the brand's side.
 * This is the boutique-vs-factory positioning: you talk to the people who
 * built the rules, not a queue of 6.000 accounts.
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

  // Hero stats — the authority markers that make a cold visitor trust us.
  const stats = [
    { value: socialProof.totalRevenue, label: socialProof.totalRevenueDescription },
    { value: socialProof.averageGrowth, label: socialProof.averageGrowthDescription },
    { value: `NPS ${socialProof.nps}`, label: socialProof.npsDescription },
  ];

  return (
    <section className="bg-white text-foreground text-center py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="max-w-4xl mx-auto animate-fade-in-up"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Eyebrow — authority marker, no fluff. */}
          <p className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary mb-6 border border-primary/30 rounded-full px-4 py-1.5">
            Especialistas que estiveram dentro do Mercado Livre
          </p>

          {/* Punchy headline — FOMO + contrast, à la Mamba. Short and aggressive. */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-5">
            Enquanto você tenta sozinho, seus{' '}
            <span className="text-primary">concorrentes faturam 3x mais.</span>
          </h1>

          {/* One-line subheadline — curiosity + path forward, no paragraph. */}
          <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-muted-foreground font-medium">
            O método que já moveu {socialProof.totalRevenue} em marketplaces — aplicado ao seu
            negócio em até 90 dias.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <a
              href={whatsappLink('hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 sm:px-10 rounded-lg text-base sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-500/30 animate-pulse"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              Quero parar de perder dinheiro
            </a>
            <a
              href="#cases"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 sm:px-10 rounded-lg text-base sm:text-xl transition-all duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
            >
              Ver quem já escalou
            </a>
          </div>

          {/* Friction reducer — single line, tight. */}
          <p className="text-sm text-muted-foreground/70 mb-12">
            Diagnóstico gratuito · Resposta em 1 dia útil
          </p>
        </div>

        {/* Authority stats — the proof that backs the headline. */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Marketplace logos — positioned as "we know the rules of the game". */}
        <div
          className="bg-muted/50 py-8 mt-12 md:mt-16 rounded-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-center text-muted-foreground font-medium mb-6 text-sm sm:text-base">
            Conhecemos os bastidores dos maiores canais de venda do Brasil:
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
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
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
