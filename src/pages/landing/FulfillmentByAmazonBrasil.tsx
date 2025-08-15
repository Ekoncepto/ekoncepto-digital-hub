import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FulfillmentByAmazonBrasilPage = () => {
  return (
    <LandingPage
      title="Venda Mais com a Logística Amazon FBA Brasil"
      description="Entenda o passo a passo do Fulfillment by Amazon (FBA) no Brasil com nosso guia ilustrado e veja como ele pode alavancar suas vendas."
      slug="fulfillment-by-amazon-brasil"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Venda Mais com a Logística do Fulfillment by Amazon (FBA) Brasil
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Terceirize seu armazenamento, embalagem e envio para a Amazon e ganhe agilidade, selo Prime e a confiança do cliente.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é o Amazon FBA?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O <strong>Fulfillment by Amazon (FBA)</strong> é o programa de logística da Amazon no qual você, vendedor, envia seus produtos para os centros de distribuição da Amazon. A partir daí, a Amazon cuida de todo o resto: armazenamento do estoque, embalagem e envio de cada pedido, além do atendimento ao cliente e do processamento de devoluções.
            </p>
            <p>
              Ao aderir ao FBA, seus produtos se tornam elegíveis para o selo <strong>Amazon Prime</strong>, o que significa frete rápido e grátis para milhões de assinantes. Isso aumenta drasticamente a atratividade e a visibilidade de suas ofertas.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Os Desafios da Logística Própria e do FBA</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Gerenciar a própria logística é um dos maiores desafios do e-commerce. Exige espaço para armazenamento, mão de obra para embalagem, contratos com transportadoras e um sistema eficiente para controle de envios e devoluções. Qualquer falha nesse processo pode gerar atrasos, reclamações e avaliações negativas, prejudicando sua reputação.
            </p>
            <p>
              Por outro lado, aderir ao FBA também tem seus desafios. É preciso entender as regras de preparação e envio de produtos para os centros da Amazon, gerenciar o nível de estoque para evitar custos de armazenamento de longa duração e garantir que seus produtos tenham um bom giro de vendas para justificar o investimento no programa.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Descomplique o FBA com Nosso Guia Ilustrado</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para ajudar você a aproveitar todos os benefícios do <strong>Fulfillment by Amazon Brasil</strong> sem dores de cabeça, criamos um guia ilustrado completo.
            </p>
            <p>
              Nele, você encontrará o passo a passo detalhado, desde a preparação dos seus produtos até o envio para a Amazon e a gestão do seu estoque. Baixe agora e entenda como usar a logística mais poderosa do mundo a seu favor.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Entenda o Passo a Passo</CardTitle>
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

export default FulfillmentByAmazonBrasilPage;
