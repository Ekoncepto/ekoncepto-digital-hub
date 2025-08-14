import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MagaluAdsProdutosPatrocinadosPage = () => {
  return (
    <LandingPage
      title="Anuncie no Magalu e venda mais"
      description="Receba um checklist gratuito com métricas e diferenciais para anunciar no Magalu Ads."
      slug="magalu-ads-produtos-patrocinados"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Anuncie no Magalu e venda mais
          </h1>
          <p className="text-lg text-muted-foreground">
            Entenda as métricas e os diferenciais do Magalu Ads com nosso checklist gratuito. Comece a anunciar seus produtos patrocinados da forma certa.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Visualização:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Mockup do painel Magalu</li>
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

export default MagaluAdsProdutosPatrocinadosPage;
