import { whatsappLink, socialProof } from '@/config/site';

/**
 * /shopee Hero — solid Shopee orange background, seller-pain headline,
 * authority stats, yellow CTA.
 *
 * Multi-marketplace coverage (ML/Amazon/Shopee) lives in the sub-headline
 * text only — no logo strip, which used to duplicate that info and steal
 * ~100px from the first fold (worst on mobile, where most Shopee traffic
 * is).
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
    <section className="text-white text-center py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#EE4D2D] to-[#F69E15]">
      {/* Brand identity — white logo, links to home. */}
      <div className="container mx-auto px-4 sm:px-6">
        <a
          href="/"
          aria-label="E-Koncepto"
          className="inline-block mb-8 md:mb-10"
        >
          <img
            src="/images/ekoncepto-logo branco.svg"
            alt="E-Koncepto"
            className="h-8 md:h-10 w-auto mx-auto"
            width={245}
            height={32}
          />
        </a>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow — contextual to where they came from. */}
          <p className="inline-block text-sm md:text-base font-semibold tracking-wider uppercase text-white/90 mb-8 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2">
            Especialistas em Shopee
          </p>

          {/* Seller-pain headline — provokes the specific Shopee frustration. */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
            Seus anúncios na Shopee não vendem?{' '}
            <span className="underline decoration-2 underline-offset-4">
              É falta de método, não de sorte.
            </span>
          </h1>

          {/* Authority sub — one line, with the big number + multi-channel scope. */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/95 font-medium">
            O método que já moveu {socialProof.totalRevenue} em marketplaces — com expertise em
            Mercado Livre, Amazon e Shopee para fazer suas vendas decolarem.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <a
              href={whatsappLink('shopee-hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EE4D2D] hover:bg-[#d4421f] text-white font-bold py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl ring-2 ring-white/30"
            >
              Quero vender mais
            </a>
            <a
              href="#cases"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-[#EE4D2D]"
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-8">
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
