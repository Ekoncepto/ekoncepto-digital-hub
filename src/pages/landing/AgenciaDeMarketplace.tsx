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
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que uma Agência de Marketplace Realmente Faz?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Uma <strong>agência de marketplace</strong> é uma parceira de negócios estratégica que assume a gestão completa ou parcial da operação de vendas de uma empresa dentro de plataformas como Mercado Livre, Amazon, Shopee, Magazine Luiza, entre outras. O escopo do trabalho vai muito além de simplesmente cadastrar produtos. Uma agência de ponta envolve-se desde a criação de uma estratégia de canais — decidindo quais marketplaces são ideais para cada tipo de produto — até a otimização diária de anúncios (SEO), a gestão de campanhas de publicidade paga (como Mercado Ads e Amazon Ads), o controle de estoque para evitar rupturas, a implementação de estratégias de precificação inteligente e a análise contínua de dados de performance.
            </p>
            <p>
              Essencialmente, uma agência de marketplace atua como uma extensão especializada do seu time. Ela traz o conhecimento técnico e a experiência aprofundada das regras, algoritmos e melhores práticas de cada plataforma, permitindo que sua marca maximize os resultados de vendas, evite erros operacionais custosos e se mantenha à frente da concorrência. É um investimento em expertise que se traduz em crescimento e lucratividade.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio de Gerenciar Múltiplos Canais Sozinho</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Vender em marketplaces é extremamente promissor, mas a complexidade da gestão cresce exponencialmente a cada novo canal adicionado. Cada plataforma é um universo próprio, com políticas de venda, algoritmos de ranqueamento, ferramentas de publicidade e um perfil de consumidor distintos. Tentar dominar todas essas nuances internamente exige um investimento massivo em tempo, treinamento e uma equipe dedicada, recursos que muitas empresas, especialmente as que estão em fase de crescimento, simplesmente não possuem.
            </p>
            <p>
              Essa falta de especialização e de braço operacional leva a uma série de erros comuns e prejudiciais: anúncios com baixa visibilidade que não atraem compradores, investimentos em publicidade que não geram retorno, problemas de reputação por falhas na logística ou no atendimento ao cliente e, o pior de tudo, a perda constante de oportunidades de venda para concorrentes que estão mais bem preparados e assessorados. A gestão de marketplaces, quando feita de forma amadora, pode se tornar um gargalo que impede o crescimento da empresa.
            </p>
             <p>
              O resultado final é uma operação que consome muitos recursos para gerar um resultado medíocre, criando uma percepção de que "marketplaces não funcionam", quando na verdade o que falta é a estratégia e a execução corretas.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">A E-koncepto é a Parceria Estratégica que seu Negócio Precisa</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Na E-koncepto, oferecemos um serviço <strong>full-service</strong> de gestão de marketplaces, o que significa que cuidamos de toda a sua operação de vendas online, de ponta a ponta. Nossa equipe de especialistas está pronta para estruturar, otimizar e escalar suas vendas, permitindo que você foque no que faz de melhor: desenvolver produtos incríveis e gerir seu negócio.
            </p>
            <p>
              Não se contente com resultados medianos. Fale com um de nossos especialistas, receba uma proposta personalizada e descubra como nossa expertise pode se tornar o motor de crescimento que sua empresa precisa para dominar o e-commerce.
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
