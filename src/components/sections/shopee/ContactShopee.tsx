import { MessageCircle, Phone, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { contactInfo, whatsappLink } from '@/config/site';
import { ShopeePromoReminder } from './ShopeeAdsPromo';

/**
 * /shopee Contact — climax section, dark orange background.
 *
 * Order matters: H2 → paragraph → CTA (immediately, before the fold of
 * the section) → "what you get" reinforcement → risk reversal → channels.
 * Users who scrolled here are high-intent; show the action first.
 *
 * Timeframes are standardized across the page: 1 dia util (response SLA),
 * 30 min (call length), 90 dias (plan horizon). Don't mix "7 dias" here.
 */
export const ContactShopee = () => {
  const phoneDigits = contactInfo.phone.replace(/[^\d+]/g, '');

  return (
    <section id="contato" className="py-12 md:py-16 lg:py-20 bg-[#d4421f] text-white">
      <div className="container text-center max-w-3xl mx-auto px-4">
        <div className="flex justify-center mb-4">
          <Sparkles className="w-10 h-10 text-[#F69E15]" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Pronto para dominar a Shopee?
        </h2>
        <p className="text-white/90 text-lg mt-3 max-w-2xl mx-auto mb-8">
          Em 30 minutos de diagnóstico, mostramos onde sua operação na Shopee está perdendo dinheiro
          — e o caminho para os seus próprios números aqui em cima.
        </p>

        {/* Lembrete fino da promo 01/09 com countdown — acima do CTA
            (auto-expira após 01/09). */}
        <ShopeePromoReminder />

        {/* CTA FIRST — high-intent users should see the action immediately. */}
        <a
          className="inline-block mb-4"
          href={whatsappLink('shopee-contact')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com um especialista no WhatsApp"
        >
          <span className="inline-flex items-center justify-center bg-[#EE4D2D] hover:bg-[#c93a18] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl ring-2 ring-white/30">
            <MessageCircle className="mr-2" />
            Quero meu diagnóstico Shopee
          </span>
        </a>

        {/* Risk reversal right under the CTA. */}
        <div className="flex items-center justify-center gap-2 mb-10 text-base text-white/90">
          <ShieldCheck className="w-5 h-5 text-[#F69E15]" />
          <span>Gratuito · Sem compromisso · Resposta em 1 dia útil</span>
        </div>

        {/* What you get — reinforcement after the CTA. */}
        <div className="bg-white/10 border border-white/25 rounded-xl p-6 mb-10 max-w-2xl mx-auto text-left backdrop-blur-sm">
          <p className="font-semibold text-white mb-4 text-center text-lg">
            No diagnóstico gratuito, você recebe:
          </p>
          <ul className="space-y-3 text-base text-white/95">
            <li className="flex items-start gap-3">
              <span className="text-[#F69E15] mt-0.5 font-bold">✓</span>
              Análise da sua conta, anúncios e concorrência na Shopee
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#F69E15] mt-0.5 font-bold">✓</span>
              Mapeamento das 3 maiores oportunidades de faturamento
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#F69E15] mt-0.5 font-bold">✓</span>
              Um plano de ação de 90 dias para escalar suas vendas na Shopee
            </li>
          </ul>
        </div>

        {/* Micro proof removido: "R$ movimentados" já aparece no hero (stats)
            e a credibilidade aqui vem do risco reverso + lista acima.
            Repetir o número uma 3ª vez no fim da página era ruído. */}

        {/* Alternative channels. */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-white/20">
          <a
            href={`tel:${phoneDigits}`}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">{contactInfo.phone}</span>
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">{contactInfo.email}</span>
          </a>
        </div>

        <p className="text-sm text-white/80 mt-4">
          Atendimento: {contactInfo.workingHours}
        </p>
      </div>
    </section>
  );
};

export default ContactShopee;
