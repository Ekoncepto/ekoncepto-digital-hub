import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgenciaEspecializadaShopeePage = () => {
  return (
    <LandingPage>
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
              A Shopee é um ambiente de vendas online vibrante, dinâmico e altamente competitivo, com um forte foco em preço, engajamento e uma experiência de compra mobile-first. Para ter sucesso, não basta apenas estar presente; é preciso dominar as ferramentas e estratégias que funcionam especificamente neste canal. Uma <strong>agência especializada em Shopee</strong>, como a E-koncepto, possui o conhecimento aprofundado e a experiência prática para isso.
            </p>
            <p>
              Nosso trabalho envolve a otimização completa dos seus anúncios para o algoritmo de busca da Shopee, a criação e gestão de campanhas de marketing internas (Shopee Ads), o uso estratégico de promoções e cupons para impulsionar as vendas, e a gestão eficiente do atendimento via chat para manter sua taxa de resposta alta. Contratar especialistas significa ter uma equipe que entende as nuances da plataforma, permitindo que você se destaque da concorrência e aproveite ao máximo as oportunidades que a Shopee oferece.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio de se Destacar na Multidão e Manter a Lucratividade</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O maior desafio na Shopee é, sem dúvida, a <strong>intensa guerra de preços</strong>. Com um grande número de vendedores, muitos deles internacionais, e um público constantemente em busca de ofertas, é extremamente difícil manter uma operação que seja ao mesmo tempo competitiva e lucrativa. Muitos vendedores se veem forçados a reduzir suas margens a níveis insustentáveis para conseguir vender.
            </p>
            <p>
              Além da questão do preço, a plataforma exige um <strong>alto nível de interação e agilidade operacional</strong>. A velocidade de resposta no chat e o tempo de preparo e envio dos produtos são fatores críticos que impactam diretamente no seu ranqueamento e na sua reputação. Tentar gerenciar tudo isso — preço, estoque, atendimento, envio e marketing — sem uma estratégia clara e processos bem definidos pode levar rapidamente ao esgotamento e a resultados medíocres.
            </p>
             <p>
              Muitos vendedores acabam presos em uma rotina de baixar preços e apagar incêndios operacionais, sem conseguir construir uma marca sólida e uma operação verdadeiramente rentável e escalável dentro da plataforma.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Serviço Profissional e Estratégico para Sua Operação na Shopee</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nossa <strong>agência especializada Shopee</strong> oferece um serviço de gestão completo, focado em resultados sustentáveis. Nós vamos além da simples operação; criamos uma estratégia de posicionamento para sua marca, otimizamos seus custos e gerenciamos suas campanhas de marketing para que você possa vender mais e com maior lucratividade.
            </p>
            <p>
              Solicite uma proposta personalizada e descubra como nossa expertise pode transformar sua operação na Shopee, tornando-a mais profissional, eficiente e lucrativa.
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
