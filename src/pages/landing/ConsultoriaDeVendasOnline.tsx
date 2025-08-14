import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ConsultoriaDeVendasOnlinePage = () => {
  return (
    <LandingPage
      title="Seu e-commerce vendendo mais em menos tempo"
      description="Consultoria estratégica para lojas online que buscam resultados rápidos."
      slug="consultoria-de-vendas-online"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Seu e-commerce vendendo mais em menos tempo
          </h1>
          <p className="text-lg text-muted-foreground">
            Nossa consultoria para lojas online é focada em sessões estratégicas que geram ações práticas e resultados rápidos. Peça sua proposta.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Visualização:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Ilustração do funil de vendas</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Pedir proposta</CardTitle>
            </Header>
            <CardContent>
              <LandingPageForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </LandingPage>
  );
};

export default ConsultoriaDeVendasOnlinePage;
