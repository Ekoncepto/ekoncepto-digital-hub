import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MagaluAdsProdutosPatrocinadosPage = () => {
  return (
    <LandingPage
      title="Anuncie no Magalu e Venda Mais"
      description="Receba um checklist gratuito com métricas e diferenciais para anunciar no Magalu Ads e destacar seus produtos patrocinados."
      slug="magalu-ads-produtos-patrocinados"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Anuncie no Magalu e Venda Mais com Produtos Patrocinados
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Aprenda a usar o Magalu Ads para colocar seus produtos na frente de milhões de clientes e potencialize seus resultados.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Como Funciona o Magalu Ads?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O <strong>Magalu Ads</strong> é a plataforma de publicidade do Magazine Luiza, que permite aos vendedores do marketplace promoverem seus produtos através de anúncios patrocinados. Assim como em outras grandes plataformas, esses anúncios garantem que suas ofertas apareçam em posições de destaque nos resultados de busca e nas páginas de produtos, aumentando drasticamente a visibilidade.
            </p>
            <p>
              A ferramenta foi desenhada para ser intuitiva, permitindo a criação de campanhas baseadas em objetivos como aumento de vendas ou reconhecimento de marca. O investimento é controlado por você, em um modelo de Custo por Clique (CPC), garantindo que você pague apenas por clientes que demonstrarem interesse.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Os Desafios de Anunciar no Magalu</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Embora seja uma plataforma em crescimento, anunciar no Magalu Ads tem suas particularidades. O primeiro desafio é entender o <strong>perfil do público</strong> do Magalu, que pode ser diferente de outros marketplaces. Criar anúncios que ressoem com esses consumidores é fundamental.
            </p>
            <p>
              Além disso, a concorrência está cada vez mais profissional. Para se destacar, é preciso ter uma estratégia de lances bem ajustada e um entendimento claro das <strong>métricas e diferenciais</strong> da plataforma. Sem isso, o risco de investir sem obter o retorno esperado é alto.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Comece com o Pé Direito: Receba Nosso Checklist Gratuito</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para ajudar você a navegar na plataforma de <strong>Magalu Ads Produtos Patrocinados</strong>, preparamos um checklist exclusivo e gratuito.
            </p>
            <p>
              Nele, você encontrará as principais métricas para acompanhar, dicas de otimização e os diferenciais que você precisa conhecer para criar campanhas de sucesso.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Receber Checklist Gratuito</CardTitle>
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

export default MagaluAdsProdutosPatrocinadosPage;
