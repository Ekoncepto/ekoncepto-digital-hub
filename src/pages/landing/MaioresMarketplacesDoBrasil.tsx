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
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Por que a Escolha do Canal de Venda é Tão Crucial?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O Brasil possui um ecossistema de marketplaces vibrante, competitivo e extremamente diversificado. Cada plataforma — seja o gigante Mercado Livre, a global Amazon, a popular Shopee, ou os fortes players nacionais como Magazine Luiza e Americanas — possui uma identidade única. Elas atraem um perfil de público diferente, têm categorias de produtos que são mais fortes ou mais fracas, e operam com modelos de comissão, logística e publicidade completamente distintos.
            </p>
            <p>
              Escolher em quais dos <strong>maiores marketplaces do Brasil</strong> atuar é, portanto, uma das decisões estratégicas mais importantes e impactantes para uma marca que deseja ter sucesso no e-commerce. Estar no canal errado pode significar um enorme investimento de tempo e dinheiro com pouco ou nenhum retorno, enquanto focar nos canais certos, onde seu público-alvo está e onde seu produto se encaixa melhor, pode acelerar exponencialmente o crescimento do seu negócio.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio de Analisar e Comparar um Cenário Complexo</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Analisar qual marketplace é o melhor para o seu produto, seu nicho e seu momento de negócio não é uma tarefa fácil. Requer uma pesquisa de mercado aprofundada para entender o perfil demográfico e comportamental do público de cada plataforma, as taxas de comissão que impactarão sua margem, os custos de publicidade para ter visibilidade, os requisitos operacionais para manter uma boa reputação e, claro, o nível de concorrência que você enfrentará em sua categoria.
            </p>
            <p>
              Muitos vendedores, por falta de dados ou de tempo para a análise, tomam essa decisão crucial baseados em percepções superficiais ("todo mundo está vendendo lá") ou simplesmente seguindo a maioria, sem uma análise de dados que justifique a escolha. Isso pode levar a uma alocação ineficiente de recursos, a uma grande frustração com os resultados obtidos e à perda de oportunidades em canais que poderiam ser muito mais rentáveis.
            </p>
             <p>
              A falta de uma comparação clara e objetiva entre os <strong>maiores marketplaces do Brasil</strong> é uma grande dor para quem quer começar ou expandir sua operação de vendas online.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Em Breve: Comparativo Completo</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nossa análise comparativa dos maiores marketplaces do Brasil está sendo finalizada por nossos especialistas e estará disponível para download em breve. Deixe seu e-mail com a gente para ser o primeiro a saber!
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Seja o primeiro a saber</CardTitle>
              </CardHeader>
              <CardContent>
                <LandingPageForm redirectPath="/obrigado-newsletter" />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </LandingPage>
  );
};

export default MaioresMarketplacesDoBrasilPage;
