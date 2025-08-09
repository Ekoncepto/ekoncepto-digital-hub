import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

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
          href="https://wa.me/5511971630441?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es."
          target="_blank"
          rel="noreferrer"
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
