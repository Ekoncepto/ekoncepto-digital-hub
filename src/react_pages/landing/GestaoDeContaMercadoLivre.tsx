import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GestaoDeContaMercadoLivrePage = () => {
  return (
    <LandingPage
      title="Gestão de Conta Mercado Livre: Liberte-se da Operação"
      description="Nosso serviço terceirizado de gestão de conta Mercado Livre cuida de tudo para você focar no que realmente importa: seu negócio."
      slug="gestao-de-conta-mercado-livre"

      articleData={{
        author: 'E-koncepto',
        publisher: 'E-koncepto',
        datePublished: '2025-08-22',
        dateModified: '2025-08-22',
      }}>
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
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é a Gestão de Conta (Full-Service) no Mercado Livre?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A <strong>gestão de conta Mercado Livre</strong>, também conhecida como "full-commerce" ou "full-service", é um serviço completo onde uma equipe de especialistas assume a total responsabilidade por todas as atividades operacionais e estratégicas da sua loja dentro da plataforma. Isso significa que nós cuidamos de tudo: desde o planejamento inicial, cadastro de produtos e otimização de anúncios (SEO), até a gestão diária de campanhas de publicidade (Mercado Ads), controle de reputação, precificação, e o atendimento ao cliente pré e pós-venda.
            </p>
            <p>
              O objetivo deste serviço é profissionalizar completamente sua operação, garantindo que as melhores e mais atuais práticas do mercado sejam aplicadas para aumentar suas vendas e, principalmente, sua lucratividade. Ao terceirizar a gestão, você e sua equipe ganham um tempo valioso para se concentrarem em outras áreas estratégicas do seu negócio, como o desenvolvimento de novos produtos, compras e gestão da marca.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio de Gerenciar Tudo Sozinho e a Sobrecarga Operacional</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O Mercado Livre é uma plataforma extremamente dinâmica e em constante evolução. Novas ferramentas, políticas de venda, e mudanças no algoritmo de busca são introduzidas o tempo todo. Para um vendedor que precisa, ao mesmo tempo, gerenciar o próprio negócio, é quase impossível se manter 100% atualizado, dominar todas as ferramentas e aplicar todas as otimizações necessárias para se manter competitivo.
            </p>
            <p>
              Essa sobrecarga de tarefas invariavelmente leva a uma gestão reativa, em vez de proativa. O vendedor passa o dia "apagando incêndios": respondendo a perguntas urgentes, resolvendo reclamações para não afetar a reputação, ajustando um anúncio ou outro sem uma estratégia clara. Não sobra tempo para pensar no crescimento, analisar a concorrência ou planejar ações de longo prazo. Isso limita drasticamente o potencial de escala do negócio e pode, com o tempo, levar à estagnação e perda de relevância na plataforma.
            </p>
             <p>
              Muitas vezes, a operação no Mercado Livre se torna tão complexa e demandante que consome todo o tempo do empreendedor, que deixa de lado o que realmente faz a empresa crescer.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Nós Cuidamos de Toda a Complexidade para Você</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Com o nosso serviço de <strong>gestão de conta Mercado Livre</strong>, você ganha um time completo de especialistas — analistas de dados, especialistas em marketing, e gerentes de conta — dedicados ao sucesso da sua loja. Nós cuidamos de toda a complexidade operacional e estratégica, e entregamos a você o que mais importa: relatórios claros e, principalmente, resultados em vendas e lucratividade.
            </p>
            <p>
              Liberte seu tempo e sua mente para focar no crescimento do seu negócio. Marque uma reunião, receba uma proposta personalizada e descubra como a nossa parceria pode ser a chave para escalar suas vendas no Mercado Livre.
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
