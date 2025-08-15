import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ComoVenderNoMercadoLivrePage = () => {
  return (
    <LandingPage
      title="Guia Definitivo: Como Vender no Mercado Livre e Lucrar Mais"
      description="Nosso guia completo ensina o passo a passo para iniciantes que desejam ter sucesso no Mercado Livre."
      slug="como-vender-no-mercado-livre"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Guia Definitivo: Como Vender no Mercado Livre e Lucrar Mais
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Aprenda com nosso e-book + checklist o caminho para se tornar um vendedor de sucesso no maior marketplace da América Latina.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Como Vender no Mercado Livre: O Básico para Começar</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Vender no Mercado Livre é o primeiro passo para muitos empreendedores que desejam entrar no e-commerce. Como a maior plataforma de marketplace da América Latina, o Mercado Livre oferece uma audiência gigantesca e uma infraestrutura completa de pagamentos e logística. O processo inicial envolve criar uma conta, escolher entre os tipos de anúncio (Gratuito, Clássico e Premium), e cadastrar seus produtos com fotos de qualidade e descrições detalhadas.
            </p>
            <p>
              Entender a estrutura da plataforma, como o sistema de reputação (o termômetro de cores) e as ferramentas como o Mercado Envios e Mercado Pago, é fundamental. Cada elemento foi desenhado para criar um ambiente seguro tanto para compradores quanto para vendedores, e dominar essas ferramentas é o que diferencia um vendedor amador de um profissional.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Os Desafios de um Vendedor Iniciante</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Apesar da aparente simplicidade, muitos novos vendedores encontram dificuldades. A primeira é a <strong>concorrência</strong>. Com tantos produtos similares, como fazer o seu anúncio se destacar? Outro ponto é a <strong>precificação</strong>: calcular corretamente as taxas de comissão de cada tipo de anúncio e o custo do frete para garantir sua margem de lucro pode ser confuso.
            </p>
            <p>
              Além disso, construir uma boa reputação do zero é um grande desafio. As primeiras vendas são as mais difíceis, e um único feedback negativo pode impactar sua credibilidade. Gerenciar o estoque, responder rapidamente às perguntas e garantir um envio ágil são tarefas que exigem organização e conhecimento da plataforma.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Seu Atalho para o Sucesso: Baixe Nosso Guia Gratuito</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para ajudar você a superar esses desafios, criamos um material completo. Nosso e-book "Guia Definitivo: Como Vender no Mercado Livre" e o checklist que o acompanha são o recurso que você precisa para começar com o pé direito.
            </p>
            <p>
              Compilamos todo o nosso conhecimento em um passo a passo prático para você evitar os erros mais comuns e acelerar seus primeiros resultados.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Baixar Guia Gratuito</CardTitle>
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

export default ComoVenderNoMercadoLivrePage;
