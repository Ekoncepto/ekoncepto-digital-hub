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
    <section className="bg-gray-900 text-white text-center py-20 md:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="max-w-4xl mx-auto animate-fade-in-up"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Eyebrow — authority marker, no fluff. */}
          <p className="inline-block text-sm md:text-base font-semibold tracking-wider uppercase text-primary mb-8 border border-primary/30 rounded-full px-5 py-2">
            Especialistas que estiveram dentro do Mercado Livre
          </p>

          {/* Punchy headline — FOMO + contrast, big and bold for impact. */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
            Enquanto você tenta sozinho, seus{' '}
            <span className="text-primary">concorrentes faturam 3x mais.</span>
          </h1>

          {/* One-line subheadline — bright enough to read on dark bg. */}
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-gray-200 font-medium">
            O método que já moveu {socialProof.totalRevenue} em marketplaces — aplicado ao seu
            negócio em até 90 dias.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-5">
            <a
              href={whatsappLink('hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 sm:px-10 rounded-lg text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-500/30 animate-pulse"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              Quero parar de perder dinheiro
            </a>
            <a
              href="#cases"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 sm:px-10 rounded-lg text-lg sm:text-xl transition-all duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
            >
              Ver quem já escalou
            </a>
          </div>

          {/* Friction reducer — brighter on dark bg. */}
          <p className="text-base text-gray-300 mb-14">
            Diagnóstico gratuito · Resposta em 1 dia útil
          </p>
        </div>

        {/* Authority stats — big numbers on dark for drama. */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-14"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.value}</div>
              <div className="text-base text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Marketplace logos — dark card on dark bg, white inner cards pop. */}
        <div
          className="bg-gray-800/50 py-8 mt-12 md:mt-16 rounded-xl backdrop-blur-sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-center text-gray-200 font-medium mb-6 text-base sm:text-lg">
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
