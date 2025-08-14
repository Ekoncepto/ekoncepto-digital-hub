import LandingPage from "./LandingPage";
import { Button } from "@/components/ui/button";

const VenderNoMarketplacePage = () => {
  return (
    <LandingPage
      title="Tudo que você precisa saber para vender online"
      description="Um hub de artigos com conteúdo amplo sobre como vender em marketplaces."
      slug="vender-no-marketplace"
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Tudo que você precisa saber para vender online
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Navegue pelo nosso hub de artigos e encontre conteúdo amplo e detalhado sobre tudo o que envolve vender em marketplaces.
        </p>
        <div className="py-8">
          {/* Placeholder for article list */}
          <div className="bg-muted rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Ilustrações de Marketplaces (Visual)</h3>
            <p>Aqui entrará uma lista de artigos do hub.</p>
          </div>
        </div>
        <Button size="lg">Ler mais</Button>
      </div>
    </LandingPage>
  );
};

export default VenderNoMarketplacePage;
