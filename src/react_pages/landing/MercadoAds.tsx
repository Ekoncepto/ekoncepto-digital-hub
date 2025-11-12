import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MercadoAdsPage = () => {
  return (
    <LandingPage>
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
              O <strong>Mercado Ads</strong> é a plataforma de publicidade nativa do Mercado Livre, uma ferramenta poderosa projetada para ajudar os vendedores a promoverem seus produtos diretamente dentro do ecossistema do marketplace. O objetivo principal é simples e direto: aumentar a visibilidade dos seus anúncios para impulsionar as vendas de forma significativa. Quando um comprador em potencial procura por um produto, os anúncios criados através do Mercado Ads aparecem em locais estratégicos e de alta visibilidade, como os primeiros resultados de busca, em banners em páginas de categorias e, de forma muito eficaz, nas páginas de produtos de concorrentes diretos.
            </p>
            <p>
              A plataforma opera em um modelo de leilão de Custo por Clique (CPC). Isso significa que você, como vendedor, só paga quando um usuário realmente demonstra interesse e clica no seu anúncio. Este modelo torna a ferramenta extremamente poderosa, pois o investimento é direcionado para atrair um público que já está no processo de compra, buscando ativamente o que você vende. O sucesso dentro da plataforma depende de uma trindade de fatores: um orçamento bem gerenciado, a definição de um valor de lance competitivo e a escolha estratégica dos produtos certos para anunciar. Dominar esses três pilares é o que separa uma campanha de sucesso de um gasto ineficaz.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Os Desafios: Por Que é Difícil Otimizar e se Destacar?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Apesar de o Mercado Ads ser uma ferramenta potente, alcançar resultados consistentes e lucrativos é um desafio complexo que frustra muitos vendedores. A primeira e mais óbvia barreira é a <strong>concorrência acirrada</strong>. Com milhões de vendedores ativos, destacar-se na multidão exige muito mais do que um bom produto; requer uma estratégia de lances sofisticada, anúncios visualmente atraentes e uma otimização constante para superar os concorrentes que disputam os mesmos clientes.
            </p>
            <p>
              Outro grande obstáculo é a <strong>complexidade na gestão de campanhas</strong>. A tarefa de decidir quais produtos patrocinar, quanto do seu valioso orçamento alocar para cada um, e como ajustar os lances para maximizar a visibilidade sem pagar caro demais por um clique, são decisões difíceis que exigem análise e experiência. Além disso, a análise de dados é um ponto cego para muitos. Sem um entendimento profundo de métricas como ACOS (Custo de Publicidade sobre Vendas), CTR (Taxa de Cliques) e ROI (Retorno sobre o Investimento), é extremamente fácil desperdiçar o orçamento em campanhas que geram cliques, mas não vendas, atraindo um público curioso, mas não comprador.
            </p>
            <p>
              Finalmente, a própria plataforma está em constante evolução. Novas funcionalidades, mudanças no algoritmo de leilão e nas políticas de anúncios exigem uma atenção contínua. Para o vendedor que já está ocupado com a gestão do negócio, do estoque e do atendimento, torna-se quase impossível se manter atualizado e competitivo, resultando em campanhas estagnadas e um ROI decrescente.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">A Solução: Deixe a E-koncepto Gerenciar Seus Anúncios</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              É exatamente neste cenário de alta complexidade que a nossa expertise faz a diferença. Na E-koncepto, nós transformamos a complexidade do Mercado Ads em uma poderosa e previsível alavanca de vendas para o seu negócio. Nossa equipe de especialistas certificados cuida de toda a sua estratégia de publicidade, desde o diagnóstico inicial e pesquisa de mercado até a otimização diária e minuciosa de suas campanhas. Nós eliminamos as suposições e aplicamos uma metodologia rigorosamente baseada em dados para garantir que cada real do seu investimento traga o máximo de retorno.
            </p>
            <p>
              Deixe a gestão do seu <strong>Mercado Ads</strong> conosco e foque no que você faz de melhor: comprar bem, gerenciar sua marca e fazer seu negócio crescer. Nós cuidamos das vendas.
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
