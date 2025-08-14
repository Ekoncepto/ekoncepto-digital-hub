import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FulfillmentByAmazonBrasilPage = () => {
  return (
    <LandingPage
      title="Venda mais com logística Amazon FBA"
      description="Entenda o passo a passo da logística FBA da Amazon com nosso guia ilustrado."
      slug="fulfillment-by-amazon-brasil"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Venda mais com a logística Amazon FBA
          </h1>
          <p className="text-lg text-muted-foreground">
            Descomplique o Fulfillment by Amazon (FBA) no Brasil. Baixe nosso guia ilustrado e entenda o passo a passo para usar a logística da Amazon a seu favor.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Material Visual:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Infográfico da logística FBA</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Entenda o passo a passo</CardTitle>
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

export default FulfillmentByAmazonBrasilPage;
