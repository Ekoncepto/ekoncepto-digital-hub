import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EstrategiasMercadoAdsPage = () => {
  return (
    <LandingPage
      title="Estratégias para dominar o Mercado Ads"
      description="Participe do nosso webinar e tenha acesso a conteúdo avançado sobre Mercado Ads."
      slug="estrategias-mercado-ads"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Estratégias para dominar o Mercado Ads
          </h1>
          <p className="text-lg text-muted-foreground">
            Vá além do básico. Participe do nosso webinar exclusivo com conteúdo avançado e estratégias para você dominar o Mercado Ads.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Material:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Slides da apresentação</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Participar do webinar</CardTitle>
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

export default EstrategiasMercadoAdsPage;
