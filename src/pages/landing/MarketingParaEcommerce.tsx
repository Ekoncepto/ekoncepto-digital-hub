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
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é, de Fato, Marketing para E-commerce?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              <strong>Marketing para e-commerce</strong> é o conjunto completo de estratégias e ações digitais focadas em atingir um objetivo claro: atrair, converter e reter clientes para uma loja online. Diferente do marketing tradicional, sua maior vantagem é ser totalmente mensurável, permitindo que cada real investido seja rastreado e otimizado. Ele abrange uma vasta gama de disciplinas, como SEO (otimização para mecanismos de busca como o Google), marketing de conteúdo (criação de blogs, vídeos e guias), tráfego pago (Google Ads, Social Ads), e-mail marketing, automação, e marketing de influência.
            </p>
            <p>
              Uma estratégia de sucesso no e-commerce moderno não se baseia em ações isoladas e esporádicas. Pelo contrário, ela reside na integração inteligente de múltiplos canais para criar uma jornada de compra coesa, consistente e eficiente para o consumidor, desde o primeiro contato com a marca até a recompra. É sobre estar presente no lugar certo, na hora certa, com a mensagem certa.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Grande Desafio da Atribuição e da Prova de ROI</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Com tantos canais e ferramentas disponíveis, o maior desafio para um gestor de e-commerce é saber onde investir seu limitado tempo e dinheiro. Como saber qual canal está trazendo o maior retorno sobre o investimento (ROI)? A jornada do cliente raramente é linear. Um consumidor pode descobrir sua marca através de um anúncio no Instagram, pesquisar mais sobre ela no Google, se cadastrar na sua newsletter para receber um cupom e só então, semanas depois, realizar a compra. A qual canal atribuir essa venda?
            </p>
            <p>
              Sem um entendimento claro de modelos de atribuição de marketing e uma análise de dados bem estruturada, é extremamente fácil tomar decisões erradas: investir em canais que não trazem clientes lucrativos, atrair um público não qualificado que abandona o carrinho, e, no fim das contas, não conseguir provar o valor e o impacto das suas ações de marketing para a diretoria da empresa.
            </p>
             <p>
              Essa falta de clareza sobre o que realmente funciona é o que impede muitas lojas online de saírem do lugar e escalarem de forma previsível e sustentável.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Aprenda a Integrar Estratégias: Baixe nosso Whitepaper Gratuito</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para ajudar você a construir uma estratégia de <strong>marketing para e-commerce</strong> que seja verdadeiramente eficaz e orientada a dados, nossa equipe de especialistas preparou um whitepaper completo e aprofundado sobre estratégias integradas.
            </p>
            <p>
              Nele, você aprenderá como combinar diferentes canais para potencializar seus resultados, como mensurar o ROI de forma mais inteligente e como construir uma máquina de vendas previsível e escalável para o seu negócio.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Baixar Whitepaper Agora</CardTitle>
              </CardHeader>
              <CardContent>
                <LandingPageForm redirectPath="/downloads/whitepaper-marketing" />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </LandingPage>
  );
};

export default MarketingParaEcommercePage;
