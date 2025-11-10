import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ComoVenderNoMercadoLivrePage = () => {
  return (
    <LandingPage>
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
              Vender no Mercado Livre é o primeiro passo para muitos empreendedores que desejam entrar no e-commerce. Como a maior plataforma de marketplace da América Latina, o Mercado Livre oferece uma audiência gigantesca e uma infraestrutura completa de pagamentos e logística. O processo inicial envolve criar uma conta de vendedor, um passo simples, mas que já exige atenção aos detalhes para garantir que seu perfil seja profissional e confiável desde o início. Em seguida, é preciso escolher entre os tipos de anúncio — Gratuito, Clássico e Premium —, cada um com suas taxas e benefícios de exposição, uma decisão que impacta diretamente sua margem de lucro.
            </p>
            <p>
              Após a configuração inicial, o próximo passo é cadastrar seus produtos. Isso vai além de simplesmente preencher campos; é a sua primeira oportunidade de convencer o cliente. Fotos de alta qualidade, de diferentes ângulos, e descrições detalhadas e otimizadas com palavras-chave são cruciais. Além disso, entender a estrutura da plataforma, como o sistema de reputação (o termômetro de cores) e as ferramentas como o Mercado Envios e Mercado Pago, é fundamental. Cada elemento foi desenhado para criar um ambiente seguro tanto para compradores quanto para vendedores, e dominar essas ferramentas é o que diferencia um vendedor amador de um profissional de sucesso.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Os Desafios Reais de um Vendedor Iniciante</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Apesar da aparente simplicidade, a jornada de um novo vendedor no Mercado Livre é repleta de desafios. A primeira e mais intimidante barreira é a <strong>concorrência</strong>. Com milhões de vendedores e produtos similares, como fazer o seu anúncio se destacar na multidão e ser escolhido pelo cliente? Outro ponto crítico é a <strong>precificação estratégica</strong>. Calcular corretamente as taxas de comissão de cada tipo de anúncio, o custo do frete (e se vale a pena oferecer frete grátis) para garantir sua margem de lucro pode ser um quebra-cabeça complexo e desanimador.
            </p>
            <p>
              Além dos números, há o desafio de construir uma <strong>boa reputação</strong> do zero. O termômetro de reputação do Mercado Livre é implacável. As primeiras vendas são as mais difíceis, e um único feedback negativo ou um atraso no envio pode impactar sua credibilidade por meses. Manter um alto padrão de atendimento, respondendo rapidamente às perguntas, gerenciando o estoque para evitar vendas canceladas e garantindo um envio ágil são tarefas que exigem uma organização e um conhecimento da plataforma que muitos iniciantes subestimam.
            </p>
             <p>
              Por fim, há a constante necessidade de se manter atualizado. O Mercado Livre está sempre mudando, com novas políticas, ferramentas e atualizações no algoritmo. O que funcionava há seis meses pode não funcionar hoje, e essa necessidade de aprendizado contínuo pode ser exaustiva para quem está focado em gerir o próprio negócio.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Em Breve: Guia Completo</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nosso e-book "Guia Definitivo: Como Vender no Mercado Livre" está sendo finalizado por nossos especialistas e estará disponível para download em breve. Deixe seu e-mail com a gente para ser o primeiro a saber!
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Seja o primeiro a saber</CardTitle>
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
