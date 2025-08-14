import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MarketingParaEcommercePage = () => {
  return (
    <LandingPage
      title="Marketing que impulsiona seu e-commerce"
      description="Baixe nosso whitepaper sobre estratégias de marketing integradas para e-commerce."
      slug="marketing-para-ecommerce"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Marketing que impulsiona seu e-commerce
          </h1>
          <p className="text-lg text-muted-foreground">
            Descubra como estratégias de marketing integradas podem impulsionar seu e-commerce. Baixe nosso whitepaper completo.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Visual:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Ilustração omnichannel</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Baixar agora</CardTitle>
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

export default MarketingParaEcommercePage;
