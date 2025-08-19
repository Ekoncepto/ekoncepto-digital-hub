import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface DownloadPlaceholderPageProps {
  title: string;
  message: string;
  ctaButtonText: string;
}

const DownloadPlaceholderPage: React.FC<DownloadPlaceholderPageProps> = ({ title, message, ctaButtonText }) => {
  return (
    <>
      <SEO
        title={`Obrigado - ${title}`}
        description="Agradecemos seu interesse em nosso conteúdo."
        noIndex={true}
      />
      <Header />
      <main className="py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tighter">
            {title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {message}
          </p>
          <div className="mt-8">
            <Button size="lg" disabled>
              {ctaButtonText}
            </Button>
             <p className="mt-4 text-sm text-muted-foreground">
              (Link para download será ativado em breve)
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DownloadPlaceholderPage;
