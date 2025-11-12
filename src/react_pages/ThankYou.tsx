import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { externalLinks } from "@/config/site";
import { CheckCircle } from "lucide-react";

const ThankYouPage = () => {
    return (
    <>
            <Header />
      <main className="py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tighter">
            Obrigado pelo seu contato!
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Recebemos suas informações. Para agilizar o atendimento, clique no botão abaixo para falar conosco diretamente no WhatsApp.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href={externalLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                Iniciar conversa no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ThankYouPage;
