import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AmazonSeoPage = () => {
  return (
    <LandingPage
      title="Otimize suas listagens na Amazon"
      description="Conheça nossas estratégias e cases de SEO para Amazon e solicite uma auditoria gratuita."
      slug="amazon-seo"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Otimize suas listagens na Amazon
          </h1>
          <p className="text-lg text-muted-foreground">
            Melhore o posicionamento dos seus produtos na Amazon com estratégias de SEO comprovadas. Veja nossos cases e solicite uma otimização gratuita.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Resultados Visíveis:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Comparativo de antes e depois</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Solicitar otimização</CardTitle>
            </CardHeader>
            <CardContent>
              <LandingPageForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </LandingPage>
  );
};

export default AmazonSeoPage;
