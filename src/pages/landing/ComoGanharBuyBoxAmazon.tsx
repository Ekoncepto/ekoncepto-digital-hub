import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ComoGanharBuyBoxAmazonPage = () => {
  return (
    <LandingPage
      title="Domine o Buy Box e Aumente Suas Vendas na Amazon"
      description="Estratégias práticas de otimização para conquistar o Buy Box da Amazon e multiplicar suas vendas."
      slug="como-ganhar-buy-box-amazon"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Domine o Buy Box e Aumente Suas Vendas na Amazon
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Aprenda o que é o Buy Box, por que ele é crucial e como nossas estratégias podem colocar seu produto em destaque.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é o Buy Box da Amazon e Por Que Ele é Tão Importante?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O <strong>Buy Box</strong> da Amazon é a cobiçada caixa na página de um produto onde os clientes podem iniciar o processo de compra, clicando em "Comprar agora" ou "Adicionar ao carrinho". Sua importância é monumental: mais de 80% de todas as vendas na Amazon acontecem através do Buy Box, um número que é ainda maior em dispositivos móveis, onde a conveniência é rei. Quando vários vendedores oferecem o mesmo produto, eles entram em uma competição acirrada para "ganhar" o Buy Box. O vendedor vencedor tem sua oferta selecionada por padrão, tornando a compra quase automática para o cliente.
            </p>
            <p>
              Não ter a posse do Buy Box significa, na prática, ser quase invisível. Sua oferta fica relegada a uma lista secundária de "Outros vendedores na Amazon", exigindo que o cliente dê cliques extras para encontrá-lo — um esforço que a esmagadora maioria dos consumidores não está disposta a fazer. Portanto, entender <strong>como ganhar o Buy Box da Amazon</strong> não é apenas uma questão de otimização; é a diferença entre ter um fluxo constante de vendas e ter um estoque parado.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">A Complexidade de Conquistar e Manter o Buy Box</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Ganhar o Buy Box não é uma tarefa simples ou baseada em um único fator. O algoritmo da Amazon é sofisticado e leva em consideração uma infinidade de variáveis para decidir qual vendedor oferece a melhor experiência de compra possível. O preço final (produto + frete) é, sem dúvida, um fator de peso, mas está longe de ser o único. A Amazon também avalia rigorosamente a <strong>disponibilidade do produto</strong> — vendedores que utilizam o programa FBA (Fulfillment by Amazon) têm uma vantagem competitiva enorme aqui —, o <strong>tempo de envio</strong> prometido e, crucialmente, as <strong>métricas de performance</strong> da sua conta de vendedor.
            </p>
            <p>
              Essas métricas, conhecidas como "Account Health", incluem a pontuação de feedback do vendedor, a taxa de pedidos com problema (ODR), a taxa de envios com atraso (LSR) e o tempo de resposta ao cliente. Gerenciar todas essas variáveis de forma consistente e em tempo real, para cada um dos seus produtos, é um desafio monumental. Um pequeno deslize em qualquer uma dessas áreas pode fazer você perder o Buy Box para um concorrente mais atento.
            </p>
             <p>
              A competição é dinâmica. Seus concorrentes estão constantemente ajustando seus preços e melhorando suas operações. Manter-se à frente exige um monitoramento contínuo e uma estratégia proativa, algo que consome um tempo e recursos preciosos que poderiam ser usados para outras áreas do seu negócio.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Nossa Análise Gratuita Mostra o Caminho para o Buy Box</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nós da E-koncepto somos especialistas em decifrar o algoritmo da Amazon e em criar estratégias vencedoras. Com nossa auditoria gratuita de listagem, nossa equipe de especialistas realiza uma análise profunda da sua conta e dos seus principais produtos para identificar com precisão o que está impedindo você de ganhar o Buy Box.
            </p>
            <p>
              Não se trata de um relatório genérico. Entregamos um plano de ação claro e prático, com estratégias de precificação, recomendações de logística (como o uso do FBA) e um plano de otimização de conta para colocar sua oferta em destaque, de forma consistente e lucrativa.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Solicitar Análise de Listagem</CardTitle>
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

export default ComoGanharBuyBoxAmazonPage;
