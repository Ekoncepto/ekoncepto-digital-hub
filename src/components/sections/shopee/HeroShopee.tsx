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
      {/* Brand identity — logo only, no header bar. Links to home so visitors
          who want to know more about the company can leave cleanly. */}
      <div className="container mx-auto px-4 sm:px-6">
        <a
          href="/"
          aria-label="E-Koncepto"
          className="inline-block mb-12 md:mb-16"
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
            Seus anúncios na Shopee não vendem?{' '}
            <span className="underline decoration-4 underline-offset-4">
              É falta de método, não de sorte.
            </span>
          </h1>

          {/* Authority sub — one line, with the big number + multi-channel scope. */}
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-white/95 font-medium">
            O método que já moveu {socialProof.totalRevenue} em marketplaces — com expertise em
            Mercado Livre, Amazon e Shopee para fazer suas vendas decolarem.
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-14">
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-base text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/*
         * Multi-channel scope — subtle strip so a Shopee seller who also sells
         * (or wants to sell) on ML/Amazon sees we cover those too. Kept visually
         * quiet so it doesn't compete with the Shopee CTA above.
         */}
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-white/80 font-medium mb-4 text-sm sm:text-base">
            Atendemos também nos principais marketplaces:
          </p>
          <div className="flex items-center justify-center gap-6 md:gap-10">
            <img
              src="/images/marketplaces/mercado-livre.svg"
              alt="Mercado Livre"
              className="h-8 md:h-10 w-auto bg-white/95 rounded-md p-2"
              width={90}
              height={28}
            />
            <img
              src="/images/marketplaces/amazon.svg"
              alt="Amazon"
              className="h-8 md:h-10 w-auto bg-white/95 rounded-md p-2"
              width={68}
              height={22}
            />
            <img
              src="/images/marketplaces/shopee.svg"
              alt="Shopee"
              className="h-8 md:h-10 w-auto bg-white/95 rounded-md p-2"
              width={55}
              height={18}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroShopee;
