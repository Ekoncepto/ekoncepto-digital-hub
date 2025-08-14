import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgenciaParceiraAmazonPage = () => {
  return (
    <LandingPage
      title="Parceiro certificado para suas vendas na Amazon"
      description="Conheça nossos cases de sucesso como agência parceira certificada da Amazon."
      slug="agencia-parceira-amazon"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Parceiro certificado para suas vendas na Amazon
          </h1>
          <p className="text-lg text-muted-foreground">
            Somos uma agência parceira certificada pela Amazon. Nossa autoridade e cases de sucesso comprovam nossa capacidade de escalar suas vendas.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Credibilidade:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Logos da Amazon</li>
              <li>Depoimentos de clientes</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Conheça nossos cases</CardTitle>
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

export default AgenciaParceiraAmazonPage;
