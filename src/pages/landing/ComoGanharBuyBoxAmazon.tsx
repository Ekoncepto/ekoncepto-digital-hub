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
              O <strong>Buy Box</strong> da Amazon é a caixa na página de um produto onde os clientes podem iniciar o processo de compra, adicionando o item ao carrinho. Mais de 80% das vendas na Amazon acontecem através do Buy Box, especialmente em dispositivos móveis. Quando vários vendedores oferecem o mesmo produto, eles competem para "ganhar" o Buy Box. O vendedor vencedor tem seu produto adicionado ao carrinho do cliente quando ele clica em "Comprar agora".
            </p>
            <p>
              Não ter o Buy Box significa que suas chances de venda são drasticamente reduzidas. O cliente precisaria clicar em "Ver todas as opções de compra" para encontrar sua oferta, um passo que a maioria não dá. Portanto, ganhar o Buy Box não é apenas uma vantagem competitiva; é essencial para o sucesso na Amazon.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">A Complexidade de Conquistar o Buy Box</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Ganhar o Buy Box não é uma tarefa simples. O algoritmo da Amazon leva em consideração uma série de variáveis para decidir qual vendedor oferece a melhor experiência de compra. O preço final (produto + frete) é um fator importante, mas não é o único. A Amazon também avalia a <strong>disponibilidade do produto</strong> (vendedores que usam FBA - Fulfillment by Amazon - têm grande vantagem), o <strong>tempo de envio</strong> e as <strong>métricas de performance</strong> da sua conta.
            </p>
            <p>
              Isso inclui a pontuação de feedback do vendedor, a taxa de pedidos com problema e o tempo de resposta ao cliente. Gerenciar todas essas variáveis de forma consistente é um grande desafio, especialmente para vendedores que operam com uma grande variedade de produtos.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Nossa Análise Gratuita Mostra o Caminho</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nós da E-koncepto somos especialistas em decifrar o algoritmo da Amazon. Com nossa auditoria gratuita de listagem, analisamos sua conta e seus produtos para identificar exatamente o que está impedindo você de ganhar o Buy Box.
            </p>
            <p>
              Criamos um plano de ação claro com estratégias de precificação, logística e otimização de conta para colocar sua oferta em destaque.
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
