import LandingPage from "./LandingPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrecificacaoDinamicaPage = () => {
  return (
    <LandingPage
      title="Aumente Sua Margem com Precificação Dinâmica"
      description="Entenda como a precificação dinâmica funciona e como nossa ferramenta interativa pode simular seu ROI."
      slug="precificacao-dinamica"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Aumente Sua Margem com Precificação Dinâmica
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Deixe de perder dinheiro com preços fixos. Reaja ao mercado em tempo real e maximize sua lucratividade.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é Precificação Dinâmica?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A <strong>precificação dinâmica</strong>, também conhecida como "dynamic pricing", é uma estratégia onde os preços de produtos ou serviços são ajustados em tempo real com base em diferentes variáveis. Em vez de um preço fixo, o valor flutua de acordo com a demanda do mercado, o nível de estoque, os preços da concorrência, o dia da semana e até mesmo o comportamento de navegação do usuário.
            </p>
            <p>
              Grandes players do e-commerce, como a Amazon, utilizam essa estratégia para otimizar constantemente suas vendas e margens. O objetivo é encontrar o preço ideal para cada momento, vendendo mais caro quando a demanda é alta e mais barato para liquidar o estoque ou competir de forma agressiva quando necessário.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">A Dificuldade de Implementar Sem a Ferramenta Certa</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Para a maioria dos vendedores, implementar uma estratégia de precificação dinâmica manualmente é praticamente impossível. O volume de dados a serem analisados é imenso: monitorar dezenas de concorrentes, cruzar com seu próprio nível de estoque e aplicar as mudanças de preço em tempo hábil exige uma dedicação que desvia o foco do negócio principal.
            </p>
            <p>
              Sem automação, o processo é lento, sujeito a erros e incapaz de reagir com a velocidade que o mercado exige. O resultado é a perda de vendas quando seu preço está muito alto e a perda de margem quando está muito baixo.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Simule seu ROI com Nossa Ferramenta Interativa</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Quer ver o poder da precificação dinâmica na prática? Desenvolvemos uma ferramenta interativa que permite simular o impacto de pequenos ajustes de preço no seu faturamento e margem de lucro.
            </p>
            <p>
              Veja em tempo real como uma estratégia de preços inteligente pode transformar seus resultados.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Simular Ajuste de Preços</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center">
                  <p>Aqui entrará um componente interativo de slider.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </LandingPage>
  );
};

export default PrecificacaoDinamicaPage;
