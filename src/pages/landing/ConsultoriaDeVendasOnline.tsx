import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ConsultoriaDeVendasOnlinePage = () => {
  return (
    <LandingPage
      title="Seu E-commerce Vendendo Mais em Menos Tempo"
      description="Nossa consultoria de vendas online é focada em sessões estratégicas para gerar resultados rápidos para sua loja."
      slug="consultoria-de-vendas-online"
    >
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
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é uma Consultoria de Vendas Online?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Uma <strong>consultoria de vendas online</strong> é um serviço onde especialistas em e-commerce analisam seu negócio e criam um plano estratégico personalizado para acelerar seu crescimento. Diferente de uma agência que executa as tarefas, o consultor atua como um mentor e estrategista, capacitando você e sua equipe a tomarem as melhores decisões.
            </p>
            <p>
              O trabalho envolve uma análise 360° da sua operação: desde a plataforma de e-commerce e a experiência do usuário até as estratégias de marketing digital (SEO, tráfego pago, e-mail marketing) e a performance nos canais de venda, como os marketplaces.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio da Falta de Foco e Direção</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O universo do e-commerce é repleto de possibilidades, e essa é também sua maior armadilha. Muitos gestores de lojas online se sentem perdidos, sem saber em qual estratégia focar. Devo investir mais em redes sociais ou em Google Ads? Devo expandir para um novo marketplace ou otimizar minha loja própria? A falta de um diagnóstico claro e de um plano de prioridades leva ao desperdício de tempo e dinheiro.
            </p>
            <p>
              Sem um parceiro experiente, a empresa corre o risco de caminhar em círculos, testando táticas aleatórias sem nunca construir uma estratégia de crescimento sólida e sustentável.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Ganhe Clareza e Direção com Nossas Sessões Estratégicas</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nossa <strong>consultoria de vendas online</strong> é entregue em sessões estratégicas, focadas em resolver seus maiores gargalos e destravar seu potencial de crescimento. Nós não entregamos um relatório genérico; nós construímos junto com você um plano de ação prático.
            </p>
            <p>
              Peça uma proposta e descubra como podemos ajudar seu e-commerce a vender mais.
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
