import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GestaoDeMarketplacesPage = () => {
  return (
    <LandingPage
      title="Maximize seu lucro com gestão profissional"
      description="Centralize suas operações e maximize seu lucro com uma gestão de marketplaces profissional."
      slug="gestao-de-marketplaces"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Maximize seu lucro com gestão profissional
          </h1>
          <p className="text-lg text-muted-foreground">
            Centralize suas operações e ganhe eficiência. Nossa gestão profissional de marketplaces é o caminho para escalar suas vendas e maximizar a lucratividade.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">O que oferecemos:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Visualização de um dashboard de gestão real</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Solicitar diagnóstico</CardTitle>
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

export default GestaoDeMarketplacesPage;
