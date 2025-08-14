import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ComoVenderNaAmazonBrasilPage = () => {
  return (
    <LandingPage
      title="Comece a vender na Amazon Brasil"
      description="Guia prático para iniciantes que querem começar a vender na Amazon Brasil."
      slug="como-vender-na-amazon-brasil"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Comece a vender na Amazon Brasil
          </h1>
          <p className="text-lg text-muted-foreground">
            Nosso guia prático para iniciantes é tudo o que você precisa para dar os primeiros passos na Amazon Brasil. Baixe o e-book e o checklist.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Material de Apoio:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Print da interface da Amazon</li>
            </ul>
          </div>
        </div>
        <div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Baixar checklist</CardTitle>
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

export default ComoVenderNaAmazonBrasilPage;
