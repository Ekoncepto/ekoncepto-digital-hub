import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GestaoDeAnunciosEmMarketplacesPage = () => {
  return (
    <LandingPage>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Gestão de Anúncios em Marketplaces: Anúncios que Convertem
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Expertise multicanal para criar, gerenciar e otimizar campanhas de publicidade que geram ROI positivo.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é a Gestão de Anúncios em Marketplaces?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A <strong>gestão de anúncios em marketplaces</strong> é o serviço especializado de planejamento, execução e otimização de campanhas de publicidade paga dentro das principais plataformas de e-commerce, como Mercado Livre (Mercado Ads), Amazon (Amazon Ads), Magazine Luiza (Magalu Ads), entre outras. O trabalho de um gestor de anúncios vai muito além de simplesmente "impulsionar" um produto. Envolve a definição de um orçamento estratégico, a seleção dos produtos com maior potencial de conversão, a pesquisa de palavras-chave, a criação de campanhas segmentadas e a otimização diária dos lances para garantir o melhor posicionamento pelo menor custo.
            </p>
            <p>
              O objetivo final é utilizar as ferramentas de publicidade nativas de cada canal da forma mais eficiente e lucrativa possível. Isso garante que seus anúncios sejam exibidos para o público certo, no momento exato da intenção de compra, e que o investimento em mídia se traduza em um aumento real e mensurável nas vendas, com um retorno sobre o investimento (ROI) positivo.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio da Expertise Multicanal e das Plataformas Distintas</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O maior desafio na <strong>gestão de anúncios em marketplaces</strong> é que cada plataforma é um universo único. Cada uma possui sua própria ferramenta de publicidade, com suas próprias regras, formatos de anúncio, opções de segmentação e estratégias de otimização. O que funciona de forma brilhante no Mercado Ads pode ser completamente ineficaz no Amazon Ads, e vice-versa. Tentar gerenciar campanhas em múltiplos canais sem um conhecimento profundo e especializado de cada um deles é uma receita quase certa para o desperdício de dinheiro e tempo.
            </p>
            <p>
              Muitos vendedores, por falta de tempo ou de conhecimento técnico, acabam aplicando a mesma estratégia genérica para todos os canais, resultando em um baixo retorno sobre o investimento (ROI). Eles perdem competitividade para vendedores que entendem as nuances de cada plataforma e ajustam suas estratégias para extrair o máximo de cada uma. A falta de uma gestão profissional de anúncios é um dos principais motivos pelos quais muitas lojas não conseguem escalar suas vendas em marketplaces.
            </p>
             <p>
              Sem uma análise de dados aprofundada para cada canal, é impossível saber o que está funcionando, o que não está, e onde alocar o orçamento para o próximo mês, transformando o investimento em marketing em um jogo de azar.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Fale com Nosso Time de Especialistas Multicanal</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nossa equipe tem <strong>expertise multicanal</strong> comprovada. Nós dominamos as principais plataformas de anúncios em marketplaces do Brasil e do mundo, e sabemos exatamente como extrair o melhor de cada uma delas. Nós não aplicamos fórmulas prontas; nós criamos estratégias integradas que respeitam as particularidades de cada canal para maximizar seu resultado global.
            </p>
            <p>
              Agende uma consultoria gratuita com nosso time. Vamos analisar sua operação e mostrar como podemos otimizar seus investimentos em publicidade para gerar mais vendas e mais lucro.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Fale com Nosso Time</CardTitle>
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

export default GestaoDeAnunciosEmMarketplacesPage;
