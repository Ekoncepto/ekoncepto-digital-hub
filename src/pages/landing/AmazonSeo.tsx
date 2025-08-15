import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AmazonSeoPage = () => {
  return (
    <LandingPage
      title="Otimize Suas Listagens com Amazon SEO"
      description="Aprenda como funciona o algoritmo A9 da Amazon e solicite uma auditoria gratuita para melhorar o ranking dos seus produtos."
      slug="amazon-seo"
    >
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
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é Amazon SEO?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              <strong>Amazon SEO</strong> é o processo de otimização das suas páginas de produto (listagens) para que elas apareçam nas primeiras posições dos resultados de busca da Amazon. Diferente do Google, o motor de busca da Amazon, conhecido como A9, tem um único objetivo: vender. Portanto, os fatores de ranqueamento são todos focados em conversão.
            </p>
            <p>
              Isso inclui a relevância das palavras-chave no título e na descrição, a qualidade das imagens, o preço do produto, as avaliações dos clientes e, crucialmente, o histórico de vendas. Uma boa estratégia de Amazon SEO garante que seus produtos sejam encontrados pelos clientes certos e os convence a comprar.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio de Ranqueamento no A9</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O algoritmo A9 é um ciclo que se retroalimenta: para ranquear bem, você precisa de vendas; mas para ter vendas, você precisa ranquear bem. Romper esse ciclo é o maior desafio. Muitos vendedores se concentram apenas em palavras-chave e esquecem que fatores de performance, como a taxa de conversão e a satisfação do cliente, são igualmente importantes.
            </p>
            <p>
              Fazer uma pesquisa de palavras-chave eficaz, escrever títulos e descrições que sejam ao mesmo tempo otimizados para o algoritmo e persuasivos para o cliente, e gerenciar os fatores de performance da conta é um trabalho contínuo e complexo.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Receba uma Auditoria Gratuita de Amazon SEO</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nossos especialistas em <strong>Amazon SEO</strong> sabem exatamente o que o algoritmo A9 procura. Com nossa auditoria gratuita, analisamos sua listagem e apontamos as oportunidades de otimização.
            </p>
            <p>
              Descubra como pequenas mudanças podem gerar um grande impacto no seu ranqueamento e, consequentemente, nas suas vendas.
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
