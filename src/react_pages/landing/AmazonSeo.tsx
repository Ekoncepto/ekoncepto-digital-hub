import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AmazonSeoPage = () => {
  return (
    <LandingPage>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Amazon SEO: Otimize Suas Listagens para Vender Mais
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Apareça na primeira página da Amazon. Entenda como o algoritmo A9 funciona e posicione seus produtos na frente dos concorrentes.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é Amazon SEO e Como Funciona o Algoritmo A9?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              <strong>Amazon SEO</strong> (Search Engine Optimization) é o processo de otimização contínua das suas páginas de produto (também conhecidas como listagens ou ASINs) para que elas apareçam nas primeiras posições dos resultados de busca da Amazon para palavras-chave relevantes. Diferente do Google, que busca organizar a informação mundial, o motor de busca da Amazon, conhecido como A9, tem um único e implacável objetivo: vender produtos. Portanto, todos os seus fatores de ranqueamento são direta ou indiretamente focados em maximizar a conversão.
            </p>
            <p>
              O algoritmo A9 analisa dois grandes grupos de fatores. O primeiro são os <strong>fatores de relevância</strong>, que dizem ao algoritmo sobre o que é o seu produto. Isso inclui a otimização de palavras-chave no título, nos bullet points, na descrição e nos termos de busca de backend. O segundo grupo são os <strong>fatores de performance</strong>, que provam ao algoritmo que seu produto vende bem. Isso inclui o histórico de vendas, a taxa de conversão, as avaliações dos clientes e a qualidade das imagens. Uma boa estratégia de Amazon SEO equilibra esses dois pilares para garantir que seus produtos não apenas sejam encontrados, mas que também convençam o cliente a comprar.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio de Ranquear Bem no Algoritmo A9</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O grande desafio do <strong>Amazon SEO</strong> está no ciclo que o algoritmo A9 cria: para ranquear bem e ter visibilidade, você precisa de um bom histórico de vendas; mas para ter vendas, você precisa de visibilidade e ranquear bem. Romper esse ciclo vicioso é a principal dificuldade para produtos novos ou com baixo desempenho. Muitos vendedores cometem o erro de se concentrar apenas em encher a listagem de palavras-chave (fatores de relevância) e esquecem que os fatores de performance, como a taxa de conversão e a satisfação do cliente, são igualmente, se não mais, importantes para o sucesso a longo prazo.
            </p>
            <p>
              Além disso, a pesquisa de palavras-chave para a Amazon é diferente da do Google. É preciso usar ferramentas específicas e pensar como o comprador busca dentro da plataforma. Escrever títulos e descrições que sejam ao mesmo tempo otimizados para o algoritmo e persuasivos para o ser humano é uma arte. Gerenciar todos os fatores de performance da conta, como o tempo de envio e a qualidade do atendimento, também impacta o seu SEO, tornando o trabalho de otimização contínuo e multifacetado.
            </p>
             <p>
              Sem uma estratégia integrada, que combine SEO on-page com ações para impulsionar as vendas iniciais (como publicidade ou promoções), é muito difícil ganhar tração e superar concorrentes já estabelecidos.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Receba uma Auditoria Gratuita de Amazon SEO</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nossos especialistas em <strong>Amazon SEO</strong> sabem exatamente o que o algoritmo A9 procura e como equilibrar os fatores de relevância e performance. Com nossa auditoria gratuita, nós analisamos em detalhes a sua listagem, seus concorrentes e sua performance atual para apontar as oportunidades de otimização mais impactantes.
            </p>
            <p>
              Você receberá um diagnóstico claro, sem custo, mostrando como pequenas e grandes mudanças podem afetar seu ranqueamento e, consequentemente, suas vendas. Deixe-nos mostrar o caminho para a primeira página.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Solicitar Otimização</CardTitle>
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

export default AmazonSeoPage;
