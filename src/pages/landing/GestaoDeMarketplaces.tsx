import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GestaoDeMarketplacesPage = () => {
  return (
    <LandingPage
      title="Maximize Seu Lucro com Gestão Profissional de Marketplaces"
      description="Centralize suas operações e otimize seus resultados com nosso serviço de gestão de marketplaces."
      slug="gestao-de-marketplaces"

      articleData={{
        author: 'E-koncepto',
        publisher: 'E-koncepto',
        datePublished: '2025-08-22',
        dateModified: '2025-08-22',
      }}>
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
              A <strong>gestão de marketplaces</strong> é a prática de administrar de forma centralizada e estratégica toda a presença de uma marca em canais de venda online como Amazon e Mercado Livre. Isso abrange um vasto leque de atividades críticas para o sucesso no e-commerce. Inclui desde o cadastro e otimização do catálogo de produtos, garantindo que eles sejam encontrados pelo algoritmo de busca, passando pela gestão de preços e estoque para evitar rupturas ou excessos, até a criação e otimização de campanhas de marketing e a análise de dados de performance.
            </p>
            <p>
              Em suma, uma gestão eficaz de marketplaces visa não apenas aumentar o volume de vendas bruto, mas também garantir a saúde da operação, a boa reputação da marca perante os consumidores e, o mais importante, a maximização da margem de lucro em cada canal de venda. É a diferença entre simplesmente estar presente online e construir uma operação de e-commerce verdadeiramente robusta e escalável.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">A Dificuldade da Operação Descentralizada e Fragmentada</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O maior desafio para empresas que vendem em múltiplos marketplaces é a <strong>fragmentação da operação</strong>. Quando cada canal é gerenciado de forma isolada, o caos se instala rapidamente. Gerenciar estoques diferentes, políticas de preço distintas, campanhas de marketing separadas e múltiplos canais de atendimento ao cliente consome um tempo e energia enormes, além de abrir margem para erros graves. Vender um produto sem estoque, anunciar com um preço defasado ou demorar para responder a um cliente são falhas que corroem a reputação e o lucro.
            </p>
            <p>
              Essa falta de centralização impede uma visão clara e unificada da performance geral do negócio. Torna-se impossível responder a perguntas simples como: "Qual canal é o mais lucrativo?" ou "Onde devemos concentrar nosso investimento em marketing?". A complexidade operacional, em vez de ser uma alavanca de crescimento, acaba sufocando o potencial da empresa e criando uma barreira para a escala.
            </p>
             <p>
              Muitos gestores se veem presos em um ciclo de tarefas manuais e reativas, sem tempo para pensar em estratégia. A operação se torna um fim em si mesma, em vez de um meio para o crescimento do negócio.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Centralize, Otimize e Escale com a E-koncepto</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nosso serviço de <strong>gestão de marketplaces</strong> foi desenhado para resolver exatamente esse problema. Através de uma combinação de tecnologia de ponta e expertise humana, nós centralizamos suas operações, unificando a gestão de catálogo, estoque, preços e pedidos para lhe dar uma visão 360° e em tempo real do seu negócio.
            </p>
            <p>
              Deixe a complexidade conosco. Solicite um diagnóstico de conta e descubra os pontos de melhoria e as oportunidades escondidas na sua operação atual. Vamos juntos construir uma operação de marketplaces eficiente, lucrativa e pronta para escalar.
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
