import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MercadoAdsPage = () => {
  return (
    <LandingPage
      title="Transforme suas vendas no Mercado Livre com Ads inteligentes"
      description="Aprenda como o Mercado Ads funciona, os desafios de otimização e como nossa consultoria pode alavancar suas vendas."
      slug="mercado-ads"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Dominando o Mercado Ads: O Guia Completo para Vender Mais no Mercado Livre
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Aumente a visibilidade dos seus produtos e transforme cliques em vendas com a plataforma de anúncios do Mercado Livre.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é e Como Funciona o Mercado Ads?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O <strong>Mercado Ads</strong> é a plataforma de publicidade nativa do Mercado Livre, projetada para ajudar os vendedores a promoverem seus produtos diretamente dentro do ecossistema. O objetivo principal é simples: aumentar a visibilidade dos seus anúncios para impulsionar as vendas. Quando um comprador procura por um produto, os anúncios do Mercado Ads aparecem em locais estratégicos e de alta visibilidade, como os primeiros resultados de busca, páginas de categorias e até mesmo nas páginas de produtos de concorrentes.
            </p>
            <p>
              A plataforma opera em um modelo de leilão de Custo por Clique (CPC), o que significa que você só paga quando um usuário realmente clica no seu anúncio. Isso torna a ferramenta poderosa, pois o investimento é direcionado para atrair um público que já demonstrou interesse no que você vende. Gerenciar o orçamento, definir o valor do lance e escolher os produtos certos para anunciar são as chaves para uma campanha de sucesso dentro do Mercado Ads.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Os Desafios: Por Que é Difícil Otimizar e se Destacar?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Embora o Mercado Ads seja uma ferramenta potente, obter resultados consistentes e lucrativos é um desafio complexo. Muitos vendedores enfrentam dificuldades que limitam o potencial de suas campanhas. A primeira barreira é a <strong>concorrência acirrada</strong>. Com milhares de vendedores utilizando a plataforma, destacar-se exige mais do que apenas um bom produto; requer uma estratégia de lances inteligente e anúncios bem otimizados.
            </p>
            <p>
              Outro grande obstáculo é a <strong>complexidade na gestão de campanhas</strong>. Decidir quais produtos patrocinar, quanto investir em cada um, e como ajustar os lances para não pagar caro demais por um clique são decisões difíceis. Além disso, a análise de dados é crucial. Sem entender métricas como ACOS (Custo de Publicidade sobre Vendas), CTR (Taxa de Cliques) e ROI (Retorno sobre o Investimento), é fácil desperdiçar o orçamento em campanhas que não geram vendas, atraindo um público que não converte.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">A Solução: Deixe a E-koncepto Gerenciar Seus Anúncios</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              É exatamente aqui que a nossa expertise faz a diferença. Na E-koncepto, transformamos a complexidade do Mercado Ads em uma poderosa alavanca de vendas para o seu negócio. Nossa equipe de especialistas cuida de tudo para você, desde o diagnóstico inicial até a otimização diária das suas campanhas.
            </p>
            <p>
              Nós eliminamos as suposições e aplicamos uma metodologia baseada em dados para garantir que cada real investido traga o máximo de retorno. Deixe a gestão do seu <strong>Mercado Ads</strong> conosco e foque no que você faz de melhor: gerenciar o seu negócio.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Agende um Diagnóstico Gratuito</CardTitle>
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

export default MercadoAdsPage;
