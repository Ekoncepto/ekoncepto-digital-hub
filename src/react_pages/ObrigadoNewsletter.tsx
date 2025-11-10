import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import SEO from "@/components/SEO";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ObrigadoNewsletterPage = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <SEO
        title="Inscrição Confirmada!"
        description="Obrigado por se inscrever em nossa newsletter."
        noIndex={true}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tighter">
            Inscrição Confirmada!
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Obrigado por se inscrever em nossa newsletter. Fique de olho na sua caixa de entrada para receber nossas novidades e dicas.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="/">
                Voltar para a página inicial
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ObrigadoNewsletterPage;
