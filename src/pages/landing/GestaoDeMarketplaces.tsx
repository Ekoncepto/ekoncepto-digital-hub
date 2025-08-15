import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GestaoDeMarketplacesPage = () => {
  return (
    <LandingPage
      title="Maximize Seu Lucro com Gestão Profissional de Marketplaces"
      description="Centralize suas operações e otimize seus resultados com nosso serviço de gestão de marketplaces."
      slug="gestao-de-marketplaces"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Maximize Seu Lucro com Gestão Profissional de Marketplaces
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Mais do que vender, é sobre vender com inteligência e lucratividade em todos os canais.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que Significa Fazer a Gestão de Marketplaces?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A <strong>gestão de marketplaces</strong> é a prática de administrar de forma centralizada e estratégica toda a presença de uma marca em canais de venda online como Amazon e Mercado Livre. Isso abrange um vasto leque de atividades: desde o cadastro e otimização do catálogo de produtos, passando pela gestão de preços e estoque, até a criação de campanhas de marketing e a análise de dados de performance.
            </p>
            <p>
              Uma gestão eficaz visa não apenas aumentar o volume de vendas, mas também garantir a saúde da operação, a boa reputação da marca e, principalmente, a maximização da margem de lucro em cada canal.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">A Dificuldade da Operação Descentralizada</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O maior desafio para empresas que vendem em múltiplos marketplaces é a <strong>fragmentação da operação</strong>. Gerenciar estoques diferentes, políticas de preço distintas e campanhas de marketing separadas para cada canal consome um tempo enorme e abre margem para erros graves, como vender um produto sem estoque ou anunciar com um preço defasado.
            </p>
            <p>
              Essa falta de centralização impede uma visão clara da performance geral do negócio, tornando difícil identificar quais canais são mais lucrativos e onde os investimentos devem ser concentrados. A complexidade operacional acaba sufocando o potencial de crescimento da empresa.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Centralize e Otimize com a E-koncepto</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nosso serviço de <strong>gestão de marketplaces</strong> foi desenhado para resolver esse problema. Através de tecnologia e expertise, centralizamos suas operações, unificando a gestão de catálogo, estoque e pedidos para lhe dar uma visão 360° do seu negócio.
            </p>
            <p>
              Solicite um diagnóstico de conta e descubra os pontos de melhoria na sua operação atual. Vamos juntos construir uma operação de marketplaces eficiente e lucrativa.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Solicitar Diagnóstico</CardTitle>
              </CardHeader>
              <CardContent>
                <LandingPageForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </LandingPage>
  );
};

export default GestaoDeMarketplacesPage;
