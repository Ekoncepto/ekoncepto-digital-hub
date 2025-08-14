import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgenciaEspecializadaShopeePage = () => {
  return (
    <LandingPage
      title="Gestão especializada para seus anúncios na Shopee"
      description="Serviço profissional de gestão de anúncios na Shopee. Solicite uma proposta."
      slug="agencia-especializada-shopee"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Gestão especializada para seus anúncios na Shopee
          </h1>
          <p className="text-lg text-muted-foreground">
            Deixe a gestão dos seus anúncios na Shopee com quem entende do assunto. Oferecemos um serviço profissional focado em resultados.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Resultados:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Cases reais de clientes</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Solicitar proposta</CardTitle>
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

export default AgenciaEspecializadaShopeePage;
