import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ComoGanharBuyBoxAmazonPage = () => {
  return (
    <LandingPage
      title="Domine o Buy Box e aumente suas vendas na Amazon"
      description="Aprenda estratégias práticas de otimização para ganhar o Buy Box da Amazon."
      slug="como-ganhar-buy-box-amazon"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Domine o Buy Box e aumente suas vendas na Amazon
          </h1>
          <p className="text-lg text-muted-foreground">
            Com nossas estratégias práticas de otimização, você vai aprender a conquistar o Buy Box e ver suas vendas decolarem. Solicite uma auditoria gratuita da sua listagem.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">O que você verá na prática:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Comparativo de antes e depois de uma otimização de sucesso</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Solicitar análise de listagem</CardTitle>
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

export default ComoGanharBuyBoxAmazonPage;
