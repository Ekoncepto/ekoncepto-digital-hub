import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ComoVenderNoMercadoLivrePage = () => {
  return (
    <LandingPage
      title="Guia definitivo: como vender no Mercado Livre e lucrar mais"
      description="Conteúdo educacional para iniciantes que querem começar a vender no Mercado Livre."
      slug="como-vender-no-mercado-livre"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Guia definitivo: como vender no Mercado Livre e lucrar mais
          </h1>
          <p className="text-lg text-muted-foreground">
            Aprenda tudo o que você precisa para começar a vender no Mercado Livre com o nosso guia completo e checklist prático. Conteúdo educacional focado em iniciantes.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">O que você vai receber:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Infográficos com o passo a passo</li>
              <li>Mockup do guia para visualização</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Baixar guia gratuito</CardTitle>
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

export default ComoVenderNoMercadoLivrePage;
