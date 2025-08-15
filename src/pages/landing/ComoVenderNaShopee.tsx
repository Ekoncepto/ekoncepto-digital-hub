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
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Por que Vender na Shopee e Como Começar?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A <strong>Shopee</strong> se consolidou como um dos marketplaces de mais rápido crescimento no Brasil, e não é por acaso. A plataforma atraiu milhões de consumidores com uma estratégia agressiva de cupons de frete grátis e uma experiência de compra gamificada e focada em dispositivos móveis. Para vendedores, a Shopee oferece uma porta de entrada para o e-commerce com taxas competitivas, uma base de usuários gigantesca e altamente engajada, e uma barreira de entrada relativamente baixa.
            </p>
            <p>
              O processo para começar a <strong>vender na Shopee</strong> é direto: o cadastro da loja é rápido, e a plataforma oferece ferramentas intuitivas para a listagem de produtos. O sucesso, no entanto, depende de entender as particularidades da plataforma. Isso inclui o uso estratégico das campanhas de marketing internas, a oferta de cupons de desconto para atrair clientes, e a manutenção de uma comunicação constante e ágil com os clientes através do chat, um fator que a Shopee valoriza muito.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Os Desafios Reais para Novos Vendedores na Shopee</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O principal desafio que um novo vendedor enfrenta na Shopee é, sem dúvida, a <strong>forte concorrência baseada em preço</strong>. Como a plataforma atrai um grande volume de compradores em busca de ofertas e preços baixos, é crucial ter uma estratégia de precificação muito bem definida para ser competitivo sem sacrificar toda a sua margem de lucro. Muitos vendedores acabam entrando em uma "guerra de preços" que se torna insustentável a longo prazo.
            </p>
            <p>
              Outro ponto de atenção fundamental é a <strong>gestão da reputação da loja</strong>. A Shopee é extremamente focada na experiência do cliente. A velocidade com que você responde às perguntas no chat e o tempo que você leva para preparar e enviar os produtos (o "Tempo de Preparo") impactam diretamente no seu ranqueamento e na confiança que os consumidores depositam em você. Manter um alto padrão de atendimento e agilidade logística é um desafio operacional constante.
            </p>
             <p>
              Por fim, destacar-se visualmente também é um desafio. Com tantos produtos similares, a qualidade das suas fotos, a clareza das suas descrições e o uso de vídeos podem ser o diferencial que convence o cliente a escolher a sua loja em vez da do concorrente.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Tudo o que Você Precisa para Começar, em um só Lugar</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para facilitar sua jornada e encurtar sua curva de aprendizado, compilamos nosso conhecimento e experiência em um guia completo sobre <strong>como vender na Shopee</strong>. Nosso material educacional, que inclui um e-book detalhado e um vídeo com o passo a passo, foi criado para levar você do zero à sua primeira venda de forma estruturada.
            </p>
            <p>
              Pare de procurar informações soltas e desencontradas. Baixe nosso guia gratuito e comece a vender na Shopee da maneira certa, com estratégia e confiança.
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
