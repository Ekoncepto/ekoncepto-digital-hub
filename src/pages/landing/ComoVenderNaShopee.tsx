import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ComoVenderNaShopeePage = () => {
  return (
    <LandingPage
      title="Guia atualizado para vender na Shopee"
      description="Conteúdo educacional completo para você começar a vender na Shopee."
      slug="como-vender-na-shopee"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Guia atualizado para vender na Shopee
          </h1>
          <p className="text-lg text-muted-foreground">
            Aprenda com nosso conteúdo educacional, que inclui um e-book e vídeo, a dar os primeiros passos e ter sucesso na Shopee.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Material de Apoio:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Print da interface da Shopee</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Baixar guia Shopee</CardTitle>
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

export default ComoVenderNaShopeePage;
