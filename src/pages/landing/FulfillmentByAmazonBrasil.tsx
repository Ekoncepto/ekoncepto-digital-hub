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
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é o Amazon FBA e Como Ele Transforma sua Loja?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O <strong>Fulfillment by Amazon (FBA)</strong> é o renomado programa de logística da Amazon, onde você, como vendedor, envia seus produtos para os modernos centros de distribuição da Amazon. A partir do momento em que seu estoque chega lá, a Amazon assume toda a complexa operação logística: eles armazenam seu estoque de forma segura, e quando um pedido é realizado, eles separam, embalam e enviam o produto para o cliente final. Além disso, a Amazon gerencia todo o atendimento ao cliente relacionado à entrega e também processa eventuais devoluções.
            </p>
            <p>
              O maior benefício de aderir ao FBA é que seus produtos se tornam elegíveis para o selo <strong>Amazon Prime</strong>. Isso significa que milhões de assinantes Prime verão suas ofertas com a promessa de frete rápido e, muitas vezes, gratuito. Esse selo é um poderoso fator de conversão, pois gera uma enorme confiança no comprador e aumenta drasticamente a atratividade e a visibilidade de seus anúncios, sendo um critério de desempate fundamental para ganhar o Buy Box.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Os Desafios da Logística Própria vs. a Complexidade do FBA</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Gerenciar a própria logística (modelo FBM - Fulfillment by Merchant) é um dos maiores desafios do e-commerce. Exige um investimento significativo em espaço para armazenamento, mão de obra para embalagem, negociação de contratos com transportadoras e um sistema de gestão eficiente para controle de envios e devoluções. Qualquer falha nesse processo — um atraso no envio, um produto mal embalado — pode gerar reclamações, avaliações negativas e danos irreparáveis à sua reputação como vendedor.
            </p>
            <p>
              Por outro lado, aderir ao <strong>Fulfillment by Amazon Brasil</strong> também tem seus próprios desafios e complexidades. Não se trata apenas de enviar os produtos. É preciso seguir regras rígidas de preparação, etiquetagem e envio de produtos para os centros da Amazon. Além disso, uma gestão de estoque ineficiente pode levar a custos inesperados de armazenamento de longa duração para produtos com baixo giro. Garantir que seus produtos tenham uma boa performance de vendas para justificar o investimento no programa é crucial.
            </p>
             <p>
              Muitos vendedores se sentem intimidados por esse processo inicial de configuração e pela necessidade de um planejamento de estoque mais rigoroso, e acabam não aproveitando os benefícios do programa.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Em Breve: Guia Completo</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nosso guia ilustrado sobre o Amazon FBA está sendo finalizado por nossos especialistas e estará disponível para download em breve. Deixe seu e-mail com a gente para ser o primeiro a saber!
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

export default FulfillmentByAmazonBrasilPage;
