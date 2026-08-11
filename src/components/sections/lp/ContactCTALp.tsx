import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { contactInfo, whatsappLink, socialProof } from '@/config/site';

/**
 * LP-only ContactCTA — aspirational close.
 *
 * Copy strategy: the home version is a polite "Pronto para vender mais?".
 * This version reframes the decision as identity ("stop being just another
 * seller"), names what they get (a 90-day plan built by ex-insiders), and
 * removes the friction (free, no commitment, 1-business-day response).
 * Phone/email are surfaced here instead of only in the footer.
 */
export const ContactCTALp = () => {
  const phoneDigits = contactInfo.phone.replace(/[^\d+]/g, '');

  return (
    <section id="contato" className="py-16 md:py-24 bg-gray-50">
      <div className="container text-center max-w-3xl mx-auto px-4">
        <div className="flex justify-center mb-4">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold">
          Pare de competir com um pé amarrado.
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Enquanto você tenta adivinhar o algoritmo, seus concorrentes já conversam com quem o
          construiu. Em 30 minutos de diagnóstico, mostramos onde você está perdendo dinheiro — e o
          caminho para os seus próprios números aqui em cima.
        </p>

        {/* What you get — make the offer concrete. */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mt-8 mb-8 max-w-2xl mx-auto text-left">
          <p className="font-semibold text-foreground mb-3 text-center">
            No diagnóstico gratuito, você recebe:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              Análise da sua operação atual nos marketplaces
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              Mapeamento das 3 maiores oportunidades de faturamento
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              Um plano de ação de 90 dias desenhado por ex-insiders das plataformas
            </li>
          </ul>
        </div>

        <a
          className="inline-block"
          href={whatsappLink('contact')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com um especialista no WhatsApp"
        >
          <Button
            variant="hero"
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Quero meu diagnóstico gratuito
            <MessageCircle className="ml-2" />
          </Button>
        </a>

        {/* Risk reversal — kill the "I'll be obligated" objection. */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-green-600" />
          <span>Gratuito · Sem compromisso · Resposta em até 1 dia útil</span>
        </div>

        {/* Micro proof — one last reminder of scale. */}
        <p className="text-sm text-muted-foreground mt-3 mb-10">
          {socialProof.totalRevenue} já movimentados para nossos clientes.
        </p>

        {/* Alternative channels — first time visible above the footer. */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-gray-200">
          <a
            href={`tel:${phoneDigits}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">{contactInfo.phone}</span>
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="font-medium">{contactInfo.email}</span>
          </a>
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          Atendimento: {contactInfo.workingHours}
        </p>
      </div>
    </section>
  );
};

export default ContactCTALp;
