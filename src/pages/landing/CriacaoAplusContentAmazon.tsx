import LandingPage from "./LandingPage";
import { Button } from "@/components/ui/button";

const CriacaoAplusContentAmazonPage = () => {
  return (
    <LandingPage
      title="Seu produto com apresentação A+ de alta conversão"
      description="Veja nosso portfólio e provas de como o conteúdo A+ pode transformar sua página de produto."
      slug="criacao-a-plus-content-amazon"
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Seu produto com apresentação A+ de alta conversão
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          O conteúdo A+ na Amazon é um diferencial competitivo. Explore nosso portfólio e veja exemplos de como uma apresentação de produto profissional pode alavancar suas vendas.
        </p>
        <div className="py-8">
          {/* Placeholder for an interactive gallery */}
          <div className="bg-muted rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Galeria Interativa (Visual)</h3>
            <p>Aqui entrará uma galeria com exemplos do nosso trabalho.</p>
          </div>
        </div>
        <Button size="lg">Veja exemplos</Button>
      </div>
    </LandingPage>
  );
};

export default CriacaoAplusContentAmazonPage;
