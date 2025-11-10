import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MercadoEnviosFullPage = () => {
  return (
    <LandingPage>
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
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é o Mercado Envios Full e Quais os Benefícios?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O <strong>Mercado Envios Full</strong>, popularmente conhecido como "Full", é o serviço de fulfillment do Mercado Livre. De forma muito similar ao FBA da Amazon, neste modelo você envia seu estoque para o centro de distribuição do Mercado Livre, e a partir daí, eles assumem toda a responsabilidade pela sua operação logística. Isso inclui armazenar seus produtos, separar, embalar e enviar cada pedido para o cliente final. Além disso, eles também gerenciam todo o atendimento pós-venda relacionado à entrega, como o rastreamento e as reclamações por atraso.
            </p>
            <p>
              Os benefícios de aderir ao Full são imensos. Seus produtos ganham um filtro de busca exclusivo, um enorme destaque nos resultados de busca com o selo "Full", e a promessa de entrega mais rápida do Brasil. Esses fatores aumentam significativamente a taxa de conversão dos seus anúncios. Um benefício adicional de grande importância é que sua reputação como vendedor (o termômetro) fica protegida de eventuais problemas ou atrasos na entrega, já que a responsabilidade logística passa a ser inteiramente do Mercado Livre.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Os Desafios de Planejamento e Gestão para Operar no Full</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Apesar das enormes vantagens, operar no <strong>Mercado Envios Full</strong> exige um planejamento cuidadoso e uma gestão de estoque precisa. O principal desafio é a <strong>gestão de inventário</strong>. É crucial ter um controle rigoroso do seu giro de vendas para não enviar produtos que ficarão parados no centro de distribuição, o que gera custos de armazenamento que podem corroer sua margem de lucro. Da mesma forma, é vital não deixar faltar estoque dos seus produtos campeões de venda, o que significaria perder vendas e relevância.
            </p>
            <p>
              Além do estoque, o processo de agendamento e envio dos produtos para o centro de distribuição do Mercado Livre tem regras específicas e rigorosas que precisam ser seguidas à risca para evitar que sua carga seja recusada, gerando custos e atrasos. A preparação dos produtos, a correta etiquetagem e a emissão da documentação fiscal correta também são pontos de atenção que demandam um processo operacional bem definido.
            </p>
             <p>
              Sem um planejamento prévio, o que deveria ser uma solução logística pode se tornar uma fonte de custos e dores de cabeça.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Simule Sua Operação e Veja os Benefícios na Prática</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              O <strong>Mercado Envios Full</strong> é a melhor opção para o seu negócio? Quais seriam os custos reais de armazenamento e envio? E quais os benefícios em termos de aumento de vendas e economia de tempo? Para responder a essas perguntas, nós oferecemos uma simulação de custos e benefícios personalizada.
            </p>
            <p>
              Nossa equipe de especialistas analisa seu portfólio de produtos, seu volume de vendas e seus custos atuais para projetar o impacto financeiro e operacional da migração para o Full, permitindo que você tome a melhor decisão para o seu negócio com base em dados.
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
