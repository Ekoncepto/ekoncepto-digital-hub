import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ConsultoriaDeVendasOnlinePage = () => {
  return (
    <LandingPage
      title="Seu E-commerce Vendendo Mais em Menos Tempo"
      description="Nossa consultoria de vendas online é focada em sessões estratégicas para gerar resultados rápidos para sua loja."
      slug="consultoria-de-vendas-online"

      articleData={{
        author: 'E-koncepto',
        publisher: 'E-koncepto',
        datePublished: '2025-08-22',
        dateModified: '2025-08-22',
      }}>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Consultoria de Vendas Online: Mais Resultados em Menos Tempo
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Um plano de ação claro e acionável para alavancar as vendas do seu e-commerce, seja ele uma loja própria ou em marketplaces.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é e Como Funciona uma Consultoria de Vendas Online?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Uma <strong>consultoria de vendas online</strong> é um serviço onde especialistas em e-commerce e marketing digital analisam profundamente o seu negócio e criam um plano estratégico personalizado para acelerar seu crescimento. Diferente de uma agência que executa as tarefas do dia a dia, o consultor atua como um mentor e estrategista, oferecendo um diagnóstico preciso e um roadmap claro, capacitando você e sua equipe a tomarem as melhores decisões para o futuro do negócio.
            </p>
            <p>
              O trabalho envolve uma análise 360° da sua operação de vendas online. Isso pode incluir a otimização da sua plataforma de e-commerce (loja própria), a melhoria da experiência do usuário (UX), a definição de estratégias de marketing digital (como SEO, tráfego pago, e-mail marketing e redes sociais) e a otimização da sua performance em canais de venda externos, como os marketplaces. O foco é identificar os maiores gargalos e as maiores oportunidades de crescimento.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio da Falta de Foco e da Sobrecarga de Opções</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O universo do e-commerce é repleto de possibilidades, e essa é também a sua maior armadilha. Muitos gestores de lojas online se sentem constantemente sobrecarregados e perdidos, sem saber em qual estratégia focar. Devo investir mais em Instagram ou em Google Ads? Devo expandir para um novo marketplace ou focar em otimizar a taxa de conversão da minha loja própria? A falta de um diagnóstico claro e de um plano de prioridades leva ao desperdício de tempo, energia e, principalmente, dinheiro.
            </p>
            <p>
              Sem um parceiro experiente para oferecer uma visão externa e estratégica, a empresa corre o risco de caminhar em círculos, testando táticas aleatórias que leem em blogs ou veem concorrentes fazendo, sem nunca construir uma estratégia de crescimento sólida, coesa e sustentável a longo prazo. A operação fica estagnada, e a sensação de estar sempre "correndo atrás da máquina" é constante.
            </p>
             <p>
              Essa falta de direção não só impede o crescimento, como também desmotiva a equipe e o empreendedor, que não conseguem ver o resultado de seus esforços.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Ganhe Clareza e Direção com Nossas Sessões Estratégicas</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nossa <strong>consultoria de vendas online</strong> é entregue em sessões estratégicas, intensivas e focadas em resolver seus maiores gargalos para destravar seu potencial de crescimento. Nós não entregamos um relatório genérico de 100 páginas que ficará na gaveta. Nós construímos junto com você um plano de ação prático, com prioridades claras e metas mensuráveis.
            </p>
            <p>
              Peça uma proposta e descubra como nossa expertise pode trazer a clareza e a direção que seu e-commerce precisa para vender mais e de forma mais inteligente.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Pedir Proposta</CardTitle>
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

export default ConsultoriaDeVendasOnlinePage;
