import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MercadoAdsPage = () => {
  return (
    <LandingPage
      title="Transforme suas vendas no Mercado Livre com Ads inteligentes"
      description="Prova de aumento de vendas com campanhas otimizadas"
      slug="mercado-ads"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Transforme suas vendas no Mercado Livre com Ads inteligentes
          </h1>
          <p className="text-lg text-muted-foreground">
            Prova de aumento de vendas com campanhas otimizadas. Veja na prática como podemos alavancar seus resultados com uma consultoria gratuita.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nesta página você encontrará:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Vídeo-case de sucesso</li>
              <li>Print de ROI real de um de nossos clientes</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Agendar diagnóstico</CardTitle>
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

export default MercadoAdsPage;
