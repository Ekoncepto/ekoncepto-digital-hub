import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MarketingParaEcommercePage = () => {
  return (
    <LandingPage
      title="Marketing que Impulsiona seu E-commerce"
      description="Baixe nosso whitepaper sobre estratégias de marketing integradas e veja como impulsionar seu e-commerce."
      slug="marketing-para-ecommerce"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Marketing para E-commerce: Estratégias que Geram Vendas
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Vá além do básico. Aprenda a integrar canais e criar uma estratégia de marketing que realmente impulsiona seu negócio online.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é Marketing para E-commerce?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              <strong>Marketing para e-commerce</strong> é o conjunto de estratégias e ações focadas em atrair, converter e reter clientes para uma loja online. Diferente do marketing tradicional, ele é totalmente mensurável e abrange uma vasta gama de disciplinas, como SEO (otimização para buscadores), marketing de conteúdo, tráfego pago (Google Ads, Social Ads), e-mail marketing, e marketing de influência.
            </p>
            <p>
              Uma estratégia de sucesso não se baseia em ações isoladas, mas sim na integração inteligente de múltiplos canais para criar uma jornada de compra coesa e eficiente para o consumidor.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio da Atribuição e do ROI</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Com tantos canais disponíveis, o maior desafio para um gestor de e-commerce é saber onde investir seu tempo e dinheiro. Como saber qual canal está trazendo o maior retorno sobre o investimento (ROI)? A jornada do cliente raramente é linear; um consumidor pode descobrir sua marca no Instagram, pesquisar no Google e só depois comprar na sua loja.
            </p>
            <p>
              Sem um entendimento claro de modelos de atribuição e uma análise de dados bem estruturada, é fácil investir nos canais errados, atrair um público não qualificado e, no fim das contas, não conseguir provar o valor das suas ações de marketing.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Aprenda a Integrar Estratégias: Baixe nosso Whitepaper</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para ajudar você a construir uma estratégia de <strong>marketing para e-commerce</strong> verdadeiramente eficaz, preparamos um whitepaper completo sobre estratégias integradas.
            </p>
            <p>
              Nele, você aprenderá como combinar diferentes canais para potencializar seus resultados e construir uma máquina de vendas previsível e escalável.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Baixar Whitepaper Agora</CardTitle>
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

export default MarketingParaEcommercePage;
