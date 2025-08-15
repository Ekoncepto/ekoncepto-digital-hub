import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MaioresMarketplacesDoBrasilPage = () => {
  return (
    <LandingPage
      title="Comparativo dos Maiores Marketplaces do Brasil"
      description="Receba uma análise e dados sobre os maiores marketplaces do Brasil em um PDF comparativo para tomar a melhor decisão para o seu negócio."
      slug="maiores-marketplaces-do-brasil"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Comparativo: Os Maiores Marketplaces do Brasil
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Mercado Livre, Amazon, Shopee, Magalu... Onde sua marca deve estar? Tome decisões baseadas em dados.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Por que a Escolha do Canal é Crucial?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O Brasil possui um ecossistema de marketplaces vibrante e diversificado. Cada plataforma — seja Mercado Livre, Amazon, Shopee, Magazine Luiza, Americanas ou outras — atrai um perfil de público diferente, possui categorias de produtos mais fortes, e opera com modelos de comissão e logística distintos.
            </p>
            <p>
              Escolher em quais dos <strong>maiores marketplaces do Brasil</strong> atuar é uma das decisões estratégicas mais importantes para uma marca. Estar no canal errado pode significar um grande esforço com pouco retorno, enquanto focar nos canais certos pode acelerar exponencialmente o crescimento do seu negócio.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio de Analisar e Comparar</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Analisar qual marketplace é o melhor para o seu produto não é uma tarefa fácil. Requer uma pesquisa aprofundada para entender o público de cada um, as taxas de comissão, os custos de publicidade, os requisitos operacionais e o nível de concorrência em sua categoria.
            </p>
            <p>
              Muitos vendedores tomam essa decisão baseados em percepções superficiais ou simplesmente seguindo a maioria, sem uma análise de dados que justifique a escolha. Isso pode levar a uma alocação ineficiente de recursos e a uma grande frustração com os resultados obtidos.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Baixe Nosso Comparativo Exclusivo</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para ajudar você a tomar a melhor decisão, nossa equipe de especialistas compilou uma análise completa dos <strong>maiores marketplaces do Brasil</strong> em um PDF comparativo.
            </p>
            <p>
              Nele, você encontrará dados sobre o público, as principais categorias, e os prós e contras de cada plataforma, tudo em um formato claro e fácil de entender.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Baixar Comparativo</CardTitle>
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

export default MaioresMarketplacesDoBrasilPage;
