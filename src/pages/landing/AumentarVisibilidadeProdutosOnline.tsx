import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AumentarVisibilidadeProdutosOnlinePage = () => {
  return (
    <LandingPage
      title="Torne Seus Produtos Mais Visíveis Online"
      description="Receba um checklist com técnicas de SEO e Ads para aumentar a visibilidade dos seus produtos e atrair mais clientes."
      slug="aumentar-visibilidade-produtos-online"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Como Aumentar a Visibilidade dos Seus Produtos Online
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Seus produtos podem ser incríveis, mas se os clientes não os encontram, você não vende. Aprenda a ser visto.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é Visibilidade de Produto?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              <strong>Visibilidade de produto</strong> é a capacidade que seus produtos têm de serem encontrados pelos consumidores nos canais digitais. Isso não se refere apenas a aparecer na primeira página do Google, mas também a ter destaque nos resultados de busca de marketplaces como Amazon e Mercado Livre, ser descoberto em redes sociais e alcançar seu público-alvo através de anúncios pagos.
            </p>
            <p>
              Aumentar a visibilidade é o primeiro e mais crucial passo de qualquer funil de vendas online. Envolve uma combinação de estratégias orgânicas (SEO, conteúdo) e pagas (Ads) para garantir que sua marca esteja presente onde seus potenciais clientes estão procurando.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio de Competir pela Atenção</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A internet é um ambiente infinitamente barulhento. A cada segundo, novos produtos e marcas surgem, disputando a atenção do mesmo consumidor que você. O principal desafio para <strong>aumentar a visibilidade dos produtos online</strong> é conseguir se destacar em meio a essa multidão.
            </p>
            <p>
              Isso exige um conhecimento técnico profundo de SEO para otimizar seus anúncios e páginas para os algoritmos dos buscadores, além de uma estratégia de publicidade paga bem segmentada para não desperdiçar dinheiro com um público que não tem interesse no que você vende. Fazer isso de forma eficaz em múltiplos canais é uma tarefa complexa e contínua.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Seu Checklist para Visibilidade Máxima</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para ajudar você a navegar neste desafio, criamos um checklist prático com as principais técnicas de SEO e Ads que você pode aplicar para aumentar a visibilidade dos seus produtos.
            </p>
            <p>
              Receba o checklist e comece a aplicar hoje mesmo as estratégias que vão colocar seus produtos na frente dos clientes certos.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Receber Checklist</CardTitle>
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

export default AumentarVisibilidadeProdutosOnlinePage;
