import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GestaoDeContaMercadoLivrePage = () => {
  return (
    <LandingPage
      title="Liberte-se da gestão e foque em vender"
      description="Oferecemos um serviço terceirizado de gestão de conta no Mercado Livre."
      slug="gestao-de-conta-mercado-livre"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Liberte-se da gestão e foque em vender
          </h1>
          <p className="text-lg text-muted-foreground">
            Nosso serviço terceirizado de gestão de conta no Mercado Livre cuida de tudo para você. Marque uma reunião e receba uma proposta personalizada.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nosso Processo:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Workflow visual do nosso serviço</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Marcar reunião</CardTitle>
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

export default GestaoDeContaMercadoLivrePage;
