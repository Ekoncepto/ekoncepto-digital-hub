import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgenciaDeMarketplacePage = () => {
  return (
    <LandingPage
      title="A gestão de marketplaces que vende por você"
      description="Oferecemos um serviço full-service para gerenciar suas vendas em marketplaces."
      slug="agencia-de-marketplace"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            A gestão de marketplaces que vende por você
          </h1>
          <p className="text-lg text-muted-foreground">
            Delegue a gestão dos seus canais de venda para especialistas e foque no que realmente importa: o seu negócio. Oferecemos um serviço full-service de ponta a ponta.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Provas de sucesso:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Logos de clientes satisfeitos</li>
              <li>Depoimentos reais de parceiros</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Fale com especialista</CardTitle>
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

export default AgenciaDeMarketplacePage;
