import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MercadoEnviosFullPage = () => {
  return (
    <LandingPage
      title="Sua operação logística no Mercado Livre"
      description="Conheça os benefícios do Mercado Encios Full e simule seus custos."
      slug="mercado-envios-full"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Sua operação logística no Mercado Livre
          </h1>
          <p className="text-lg text-muted-foreground">
            Entenda os benefícios do Mercado Envios Full e use nossa ferramenta para simular os custos da sua operação logística.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ferramenta Visual:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Mapa de logística interativo</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Simular operação</CardTitle>
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

export default MercadoEnviosFullPage;
