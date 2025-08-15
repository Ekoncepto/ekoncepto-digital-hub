import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MercadoEnviosFullPage = () => {
  return (
    <LandingPage
      title="Sua Operação Logística no Mercado Livre com o Full"
      description="Conheça os benefícios do Mercado Encios Full, o programa de fulfillment do Mercado Livre, e simule seus custos."
      slug="mercado-envios-full"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Mercado Envios Full: A Logística do Mercado Livre a Seu Favor
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Entregas mais rápidas, destaque nos anúncios e menos trabalho para você. Entenda como funciona o fulfillment do Mercado Livre.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é o Mercado Envios Full?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O <strong>Mercado Envios Full</strong>, ou "Full", é o serviço de fulfillment do Mercado Livre. De forma similar ao FBA da Amazon, você envia seu estoque para o centro de distribuição do Mercado Livre, e eles cuidam de todo o processo logístico: armazenam, separam, embalam e enviam seus produtos para o cliente final. Eles também gerenciam o atendimento pós-venda relacionado à entrega.
            </p>
            <p>
              Os produtos no Full ganham um filtro exclusivo, destaque nos resultados de busca e a promessa de entrega mais rápida do Brasil, o que aumenta significativamente a taxa de conversão. Além disso, a reputação da sua conta fica protegida de eventuais problemas na entrega, pois a responsabilidade é do Mercado Livre.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Os Desafios de Operar no Full</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Apesar dos enormes benefícios, operar no <strong>Mercado Envios Full</strong> exige planejamento. O principal desafio é a <strong>gestão de estoque</strong>. É preciso ter um controle preciso do seu giro de vendas para não enviar produtos que ficarão parados, gerando custos de armazenamento, nem deixar faltar estoque dos seus campeões de venda, o que significa perder vendas.
            </p>
            <p>
              Além disso, o processo de agendamento e envio dos produtos para o centro de distribuição tem regras específicas que precisam ser seguidas à risca para evitar recusas e atrasos. A preparação dos produtos e a documentação fiscal também são pontos de atenção.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Simule Sua Operação e Veja os Benefícios</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Será que o Full é para você? Quais seriam os custos? E os benefícios? Para responder a essas perguntas, oferecemos uma simulação de custos personalizada.
            </p>
            <p>
              Nossos especialistas analisam seu portfólio de produtos e seu volume de vendas para projetar o impacto financeiro e operacional da migração para o Mercado Envios Full.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Simular Minha Operação</CardTitle>
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

export default MercadoEnviosFullPage;
