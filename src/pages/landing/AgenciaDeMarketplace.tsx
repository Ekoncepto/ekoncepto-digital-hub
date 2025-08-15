import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgenciaDeMarketplacePage = () => {
  return (
    <LandingPage
      title="A Gestão de Marketplaces que Vende por Você"
      description="Conheça nosso serviço full-service e entenda por que uma agência de marketplace é o parceiro ideal para escalar seu negócio."
      slug="agencia-de-marketplace"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            A Agência de Marketplace que Vende por Você
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Foque no seu produto e deixe a complexidade dos marketplaces com quem entende do assunto.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que uma Agência de Marketplace Faz?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Uma <strong>agência de marketplace</strong> é uma parceira estratégica que assume a gestão completa ou parcial da operação de vendas de uma empresa dentro de plataformas como Mercado Livre, Amazon, Shopee, Magalu, entre outras. O trabalho vai muito além de simplesmente cadastrar produtos. Envolve a criação de uma estratégia de canais, otimização de anúncios (SEO), gestão de campanhas de publicidade (como Mercado Ads), controle de estoque, precificação inteligente e análise de performance.
            </p>
            <p>
              Essencialmente, uma agência de marketplace atua como uma extensão do seu time, trazendo expertise técnica e conhecimento aprofundado das regras e algoritmos de cada plataforma para maximizar seus resultados e evitar erros custosos.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio de Gerenciar Múltiplos Canais</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Vender em marketplaces é promissor, mas a gestão se torna exponencialmente mais complexa a cada novo canal adicionado. Cada plataforma tem suas próprias políticas, algoritmos de ranqueamento e ferramentas de publicidade. Tentar dominar todas elas internamente exige tempo, treinamento e uma equipe dedicada, recursos que muitas empresas não possuem.
            </p>
            <p>
              A falta de especialização leva a erros comuns: anúncios com baixa visibilidade, investimentos em publicidade sem retorno, problemas de reputação por falhas na logística e, o pior de tudo, perda de oportunidades de venda para concorrentes mais bem preparados.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">A E-koncepto é a Parceria que seu Negócio Precisa</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Na E-koncepto, oferecemos um serviço <strong>full-service</strong> de gestão de marketplaces. Cuidamos de toda a sua operação de vendas online para que você possa focar no seu core business. Nossa equipe de especialistas está pronta para estruturar, otimizar e escalar suas vendas.
            </p>
            <p>
              Receba uma proposta personalizada e descubra como nossa expertise pode se tornar o motor de crescimento do seu negócio.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Fale com um Especialista</CardTitle>
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

export default AgenciaDeMarketplacePage;
