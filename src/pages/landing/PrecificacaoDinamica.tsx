import LandingPage from "./LandingPage";
import { Button } from "@/components/ui/button";

const PrecificacaoDinamicaPage = () => {
  return (
    <LandingPage
      title="Aumente margem com preços dinâmicos"
      description="Simule o ROI em tempo real com nossa ferramenta interativa de precificação dinâmica."
      slug="precificacao-dinamica"
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Aumente sua margem com preços dinâmicos
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Use nossa ferramenta interativa para simular o impacto da precificação dinâmica no seu ROI em tempo real. Veja o poder do ajuste de preços inteligente.
        </p>
        <div className="py-8">
          {/* Placeholder for an interactive tool */}
          <div className="bg-muted rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Slider de Preços/Margem (Visual)</h3>
            <p>Aqui entrará um componente interativo de slider.</p>
          </div>
        </div>
        <Button size="lg">Simular ajuste de preços</Button>
      </div>
    </LandingPage>
  );
};

export default PrecificacaoDinamicaPage;
