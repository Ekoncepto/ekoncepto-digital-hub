import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgenciaEspecializadaShopeePage = () => {
  return (
    <LandingPage
      title="Gestão Especializada para Seus Anúncios na Shopee"
      description="Somos uma agência especializada em Shopee. Conte com nosso serviço profissional para escalar suas vendas."
      slug="agencia-especializada-shopee"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Agência Especializada Shopee: Venda Mais e Melhor
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Navegue na competitividade da Shopee com uma equipe de especialistas ao seu lado.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Por que Contratar uma Agência Especializada em Shopee?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A Shopee é um ambiente dinâmico e altamente competitivo, focado em preço e engajamento. Uma <strong>agência especializada em Shopee</strong> possui o conhecimento aprofundado das ferramentas e estratégias que funcionam especificamente neste canal. Isso inclui a otimização de anúncios para o algoritmo da Shopee, a criação de campanhas de marketing internas (Shopee Ads), a gestão de promoções e o uso de ferramentas de engajamento como o chat.
            </p>
            <p>
              Contratar especialistas significa ter uma equipe que entende as nuances da plataforma, permitindo que você se destaque da concorrência e aproveite ao máximo as oportunidades que a Shopee oferece.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio de se Destacar na Multidão</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O maior desafio na Shopee é a <strong>guerra de preços</strong>. Com um grande número de vendedores e um público focado em ofertas, é difícil manter uma operação lucrativa. Além disso, a plataforma exige um alto nível de <strong>interação e agilidade</strong>. A velocidade de resposta no chat e o tempo de envio dos produtos impactam diretamente no seu ranqueamento e na sua reputação.
            </p>
            <p>
              Tentar gerenciar tudo isso sem uma estratégia clara pode levar ao esgotamento e a resultados medíocres. Muitos vendedores acabam presos em uma rotina de baixar preços, sem conseguir construir uma marca sólida e uma operação rentável.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Serviço Profissional para Sua Operação na Shopee</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nossa <strong>agência especializada Shopee</strong> oferece um serviço de gestão completo, focado em resultados. Cuidamos de tudo, da otimização dos seus anúncios à gestão das suas campanhas de marketing, para que você possa vender mais e com maior lucratividade.
            </p>
            <p>
              Solicite uma proposta personalizada e veja como podemos transformar sua operação na Shopee.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Solicitar Proposta</CardTitle>
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

export default AgenciaEspecializadaShopeePage;
