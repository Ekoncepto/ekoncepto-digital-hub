import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, ShieldCheck } from 'lucide-react';
import { contactInfo, whatsappLink } from '@/config/site';

/**
 * LP-only ContactCTA — the home version is a single WhatsApp button.
 * This version surfaces phone/email (previously buried in the footer),
 * adds a risk-reversal line ("Diagnóstico gratuito · Sem compromisso"),
 * and a micro social-proof stat next to the CTA.
 */
export const ContactCTALp = () => {
  const phoneDigits = contactInfo.phone.replace(/[^\d+]/g, '');

  return (
    <section id="contato" className="py-16 md:py-24 bg-gray-50">
      <div className="container text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Pronto para vender mais?</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Vamos entender seu momento e montar um plano de ação para os próximos 90 dias.
        </p>

        {/* Micro social proof near the CTA. */}
        <p className="text-sm text-muted-foreground mt-4 mb-8">
          <span className="font-semibold text-foreground">+R$ 100M</span> gerados para nossos
          clientes em marketplaces.
        </p>

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
            Fale com um especialista
            <MessageCircle className="ml-2" />
          </Button>
        </a>

        {/* Risk reversal — removes the "I'll be obligated" fear. */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-green-600" />
          <span>Diagnóstico gratuito · Sem compromisso · Resposta em 1 dia útil</span>
        </div>

        {/* Alternative contact channels — visible above the footer for the first time. */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 pt-8 border-t border-gray-200">
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
          Horário de atendimento: {contactInfo.workingHours}
        </p>
      </div>
    </section>
  );
};

export default ContactCTALp;
