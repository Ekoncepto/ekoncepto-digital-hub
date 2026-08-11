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
    <section className="bg-gray-900 text-white text-center py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="max-w-4xl mx-auto animate-fade-in-up"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Eyebrow — positions us as insiders, not just consultants. */}
          <p className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary mb-6 border border-primary/30 rounded-full px-4 py-1.5">
            Ex-insiders do Mercado Livre e Americanas
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            O mesmo conhecimento que <span className="text-primary">moveu{' '}
            {socialProof.totalRevenue}</span> em marketplaces — agora aplicado ao seu negócio.
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Não somos mais uma consultoria de marketplace. Somos quem esteve dentro das plataformas,
            estruturando as maiores contas de CPG do Brasil e do México — e hoje colocamos essa
            inteligência a serviço do seu faturamento.
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
              Ver resultados reais
            </a>
          </div>

          {/* Friction reducers — answer the silent objections. */}
          <p className="text-sm text-gray-400 mb-12">
            Diagnóstico gratuito · Resposta em 1 dia útil · Sem compromisso
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
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Marketplace logos — positioned as "we know the rules of the game". */}
        <div
          className="bg-gray-800/50 py-8 mt-12 md:mt-16 rounded-xl backdrop-blur-sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-center text-gray-300 font-medium mb-6 text-sm sm:text-base">
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
