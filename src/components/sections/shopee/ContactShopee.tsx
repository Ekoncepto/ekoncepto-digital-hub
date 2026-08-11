import { MessageCircle, Phone, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { contactInfo, whatsappLink, socialProof } from '@/config/site';

/**
 * /shopee Contact — climax section, dark orange background so the yellow
 * CTA button pops. Names the 3 deliverables of the free diagnostic,
 * surfaces phone/email, and ends with risk-reversal + micro proof.
 */
export const ContactShopee = () => {
  const phoneDigits = contactInfo.phone.replace(/[^\d+]/g, '');

  return (
    <section id="contato" className="py-16 md:py-24 bg-[#d4421f] text-white">
      <div className="container text-center max-w-3xl mx-auto px-4">
        <div className="flex justify-center mb-4">
          <Sparkles className="w-10 h-10 text-[#F69E15]" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Pronto para dominar a Shopee?
        </h2>
        <p className="text-white/90 text-lg mt-4 max-w-2xl mx-auto">
          Em 30 minutos de diagnóstico, mostramos onde sua operação na Shopee está perdendo dinheiro
          — e o caminho para os seus próprios números aqui em cima.
        </p>

        {/* What you get — dark card on dark bg. */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-6 mt-8 mb-8 max-w-2xl mx-auto text-left backdrop-blur-sm">
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

        <a
          className="inline-block"
          href={whatsappLink('shopee-contact')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com um especialista no WhatsApp"
        >
          <span className="inline-flex items-center justify-center bg-[#F69E15] hover:bg-[#e08e0a] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse">
            <MessageCircle className="mr-2" />
            Quero meu diagnóstico Shopee
          </span>
        </a>

        {/* Risk reversal. */}
        <div className="flex items-center justify-center gap-2 mt-6 text-base text-white/90">
          <ShieldCheck className="w-5 h-5 text-[#F69E15]" />
          <span>Gratuito · Sem compromisso · Resposta em até 1 dia útil</span>
        </div>

        {/* Micro proof. */}
        <p className="text-base text-white/80 mt-3 mb-10">
          {socialProof.totalRevenue} já movimentados para nossos clientes em marketplaces.
        </p>

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

        <p className="text-sm text-white/70 mt-4">
          Atendimento: {contactInfo.workingHours}
        </p>
      </div>
    </section>
  );
};

export default ContactShopee;
