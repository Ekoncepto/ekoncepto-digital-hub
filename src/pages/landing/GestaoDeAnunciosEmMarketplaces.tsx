import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GestaoDeAnunciosEmMarketplacesPage = () => {
  return (
    <LandingPage
      title="Anúncios que convertem em qualquer marketplace"
      description="Expertise multicanal para criar anúncios que geram resultados. Fale com nosso time."
      slug="gestao-de-anuncios-em-marketplaces"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Anúncios que convertem em qualquer marketplace
          </h1>
          <p className="text-lg text-muted-foreground">
            Com nossa expertise multicanal, criamos e gerenciamos anúncios que convertem de verdade, seja no Mercado Livre, Amazon, Shopee ou outros.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">ROI Comprovado:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Gráfico de ROI de campanhas reais</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Fale com nosso time</CardTitle>
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

export default GestaoDeAnunciosEmMarketplacesPage;
