import { whatsappLink, socialProof } from '@/config/site';

/**
 * /shopee Hero — solid Shopee orange background, seller-pain headline,
 * authority stats, yellow CTA. No marketplace logos (the visitor is
 * already on/coming from Shopee; the whole page is Shopee-branded).
 *
 * The copy leads with a specific Shopee seller pain ("anúncios não
 * vendem") and reframes it as a method problem, not luck — opening the
 * door to our diagnostic offer.
 */
export const HeroShopee = () => {
  const stats = [
    { value: socialProof.totalRevenue, label: socialProof.totalRevenueDescription },
    { value: socialProof.averageGrowth, label: socialProof.averageGrowthDescription },
    { value: `NPS ${socialProof.nps}`, label: socialProof.npsDescription },
  ];

  return (
    <section className="text-white text-center py-20 md:py-28 lg:py-36 bg-gradient-to-br from-[#EE4D2D] to-[#F69E15]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow — contextual to where they came from. */}
          <p className="inline-block text-sm md:text-base font-semibold tracking-wider uppercase text-white/90 mb-8 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2">
            Especialistas em Shopee
          </p>

          {/* Seller-pain headline — provokes the specific Shopee frustration. */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
            Seus anúncios na Shopee não vendem?{' '}
            <span className="underline decoration-4 underline-offset-4">
              É falta de método, não de sorte.
            </span>
          </h1>

          {/* Authority sub — one line, with the big number. */}
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-white/95 font-medium">
            O método que já moveu {socialProof.totalRevenue} em marketplaces — agora focado em fazer
            suas vendas na Shopee decolarem.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-5">
            <a
              href={whatsappLink('shopee-hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-[#EE4D2D] font-bold py-4 px-8 sm:px-10 rounded-lg text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Quero vender mais na Shopee
            </a>
            <a
              href="#cases"
              className="bg-[#F69E15] hover:bg-[#e08e0a] text-white font-bold py-4 px-8 sm:px-10 rounded-lg text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver quem já escalou
            </a>
          </div>

          {/* Friction reducer. */}
          <p className="text-base text-white/90 mb-14">
            Diagnóstico gratuito · Resposta em 1 dia útil
          </p>
        </div>

        {/* Authority stats — white numbers pop on orange. */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-base text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroShopee;
