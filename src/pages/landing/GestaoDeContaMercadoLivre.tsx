import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GestaoDeContaMercadoLivrePage = () => {
  return (
    <LandingPage
      title="Gestão de Conta Mercado Livre: Liberte-se da Operação"
      description="Nosso serviço terceirizado de gestão de conta Mercado Livre cuida de tudo para você focar no que realmente importa: seu negócio."
      slug="gestao-de-conta-mercado-livre"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Gestão de Conta Mercado Livre: Liberte-se da Operação
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Terceirize a complexidade e ganhe tempo e eficiência para escalar suas vendas.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é a Gestão de Conta Mercado Livre?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A <strong>gestão de conta Mercado Livre</strong> é um serviço completo onde uma equipe de especialistas assume a responsabilidade por todas as atividades operacionais e estratégicas da sua loja dentro da plataforma. Isso inclui desde o cadastro de produtos e otimização de anúncios até a gestão de campanhas de publicidade, controle de reputação, atendimento ao cliente pré e pós-venda, e a análise de métricas de performance.
            </p>
            <p>
              O objetivo é profissionalizar sua operação, garantindo que as melhores práticas do mercado sejam aplicadas para aumentar suas vendas e lucratividade, enquanto você e sua equipe se concentram em outras áreas do seu negócio.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio de Gerenciar Tudo Sozinho</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O Mercado Livre é uma plataforma em constante evolução. Novas ferramentas, políticas e mudanças no algoritmo são introduzidas o tempo todo. Para um vendedor que precisa gerenciar o próprio negócio, é quase impossível se manter 100% atualizado e aplicar todas as otimizações necessárias.
            </p>
            <p>
              Essa sobrecarga de tarefas leva a uma gestão reativa em vez de proativa. Você acaba "apagando incêndios" — respondendo a perguntas, resolvendo reclamações, ajustando um anúncio ou outro — em vez de trabalhar de forma estratégica para o crescimento. Isso limita seu potencial de escala e pode até prejudicar sua reputação.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Nós Cuidamos de Tudo para Você</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Com o nosso serviço de <strong>gestão de conta Mercado Livre</strong>, você ganha um time de especialistas dedicados ao seu sucesso. Nós cuidamos de toda a complexidade operacional e estratégica, entregando a você relatórios claros e, o mais importante, resultados.
            </p>
            <p>
              Marque uma reunião para receber uma proposta personalizada e descubra como podemos libertar seu tempo e escalar suas vendas.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Marcar Reunião</CardTitle>
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

export default GestaoDeContaMercadoLivrePage;
