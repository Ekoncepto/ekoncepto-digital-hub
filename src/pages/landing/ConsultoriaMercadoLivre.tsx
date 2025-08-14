import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ConsultoriaMercadoLivrePage = () => {
  return (
    <LandingPage
      title="Vendas no Mercado Livre: melhore com especialistas"
      description="Nossa consultoria é focada em performance e resultados no Mercado Livre."
      slug="consultoria-mercado-livre"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Vendas no Mercado Livre: melhore com especialistas
          </h1>
          <p className="text-lg text-muted-foreground">
            Se você já vende no Mercado Livre mas sente que pode mais, nossa consultoria focada em performance é o que você precisa. Agende uma sessão e veja como podemos ajudar.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Resultados Reais:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Print de resultados de clientes</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Agendar agora</CardTitle>
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

export default ConsultoriaMercadoLivrePage;
