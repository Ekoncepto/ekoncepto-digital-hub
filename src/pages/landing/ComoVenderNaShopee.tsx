import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ComoVenderNaShopeePage = () => {
  return (
    <LandingPage
      title="Guia Atualizado para Vender na Shopee"
      description="Aprenda como vender na Shopee com nosso conteúdo educacional completo, incluindo e-book e vídeo."
      slug="como-vender-na-shopee"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Guia Completo: Como Vender na Shopee em 2024
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Do cadastro do primeiro produto à sua primeira venda, nosso guia tem tudo o que você precisa.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Por que Vender na Shopee?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A <strong>Shopee</strong> se consolidou como um dos marketplaces de mais rápido crescimento no Brasil, atraindo milhões de consumidores com sua política de frete grátis e uma experiência de compra focada em dispositivos móveis. Para vendedores, a plataforma oferece uma porta de entrada para o e-commerce com taxas competitivas e uma base de usuários altamente engajada.
            </p>
            <p>
              Vender na Shopee envolve um processo simples de cadastro, mas o sucesso depende de entender as particularidades da plataforma, como as campanhas de marketing internas, o uso de cupons e a interação constante com os clientes através do chat.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Os Desafios para Novos Vendedores na Shopee</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O principal desafio na Shopee é a <strong>forte concorrência baseada em preço</strong>. Como a plataforma atrai muitos compradores em busca de ofertas, é crucial ter uma estratégia de precificação muito bem definida para ser competitivo sem sacrificar toda a sua margem de lucro.
            </p>
            <p>
              Outro ponto de atenção é a <strong>gestão da reputação</strong>. A Shopee valoriza muito a avaliação da loja e a velocidade de resposta no chat. Manter um alto padrão de atendimento e agilidade no envio é fundamental para se destacar e ganhar a confiança dos consumidores.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Tudo o que Você Precisa em um só Lugar</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para facilitar sua jornada, compilamos nosso conhecimento em um guia completo sobre <strong>como vender na Shopee</strong>. Nosso material educacional inclui um e-book detalhado e um vídeo com o passo a passo.
            </p>
            <p>
              Pare de procurar informações soltas. Baixe nosso guia e comece a vender na Shopee da maneira certa.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Baixar Guia Shopee</CardTitle>
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

export default ComoVenderNaShopeePage;
