import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MaioresMarketplacesDoBrasilPage = () => {
  return (
    <LandingPage
      title="Comparativo dos maiores marketplaces do Brasil"
      description="Análise e dados sobre os maiores marketplaces do Brasil em um PDF comparativo."
      slug="maiores-marketplaces-do-brasil"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Comparativo dos maiores marketplaces do Brasil
          </h1>
          <p className="text-lg text-muted-foreground">
            Tome decisões baseadas em dados. Baixe nosso PDF com uma análise comparativa dos maiores marketplaces do Brasil e escolha o melhor para o seu negócio.
          </p>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Baixar comparativo</CardTitle>
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

export default MaioresMarketplacesDoBrasilPage;
