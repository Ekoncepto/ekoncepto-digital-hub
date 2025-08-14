import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { externalLinks } from '@/config/site';

export const ContactCTA = () => {
  return (
    <section id="contato" className="py-16">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Pronto para vender mais?</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Vamos entender seu momento e montar um plano de ação para os próximos 90 dias.
        </p>
        <a
          className="inline-block mt-6"
          href={externalLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com um especialista no WhatsApp"
        >
          <Button variant="hero" size="lg">
            Fale com um especialista
            <MessageCircle className="ml-1" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
