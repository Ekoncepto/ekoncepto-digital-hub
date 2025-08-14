import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AumentarVisibilidadeProdutosOnlinePage = () => {
  return (
    <LandingPage
      title="Torne seus produtos mais visíveis"
      description="Receba um checklist com técnicas de SEO e Ads para aumentar a visibilidade dos seus produtos."
      slug="aumentar-visibilidade-produtos-online"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Torne seus produtos mais visíveis
          </h1>
          <p className="text-lg text-muted-foreground">
            Com nosso checklist, você aprenderá técnicas de SEO e Ads para que seus produtos sejam encontrados por mais clientes.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Material de Apoio:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Infográfico sobre visibilidade</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Receber checklist</CardTitle>
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

export default AumentarVisibilidadeProdutosOnlinePage;
