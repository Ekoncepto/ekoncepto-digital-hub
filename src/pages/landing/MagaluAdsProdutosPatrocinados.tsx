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
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Como Funciona o Magalu Ads e Seus Produtos Patrocinados?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O <strong>Magalu Ads</strong> é a plataforma de publicidade nativa do Magazine Luiza, que permite aos vendedores do seu marketplace promoverem seus produtos através de anúncios, conhecidos como <strong>produtos patrocinados</strong>. De forma semelhante a outras grandes plataformas de e-commerce, esses anúncios garantem que suas ofertas apareçam em posições de destaque, como no topo dos resultados de busca, em páginas de categorias e em outros locais estratégicos, aumentando drasticamente a visibilidade e a probabilidade de venda.
            </p>
            <p>
              A ferramenta foi desenhada para ser acessível e intuitiva, permitindo a criação de campanhas baseadas em objetivos claros, como o aumento de vendas ou o reconhecimento de marca. O investimento é controlado por você através de um orçamento diário, e o modelo de cobrança é o de Custo por Clique (CPC), o que garante que você pague apenas por clientes que efetivamente demonstrarem interesse e clicarem no seu anúncio.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Os Desafios de Anunciar de Forma Eficiente no Magalu</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Embora seja uma plataforma em franca expansão e com uma base de clientes fiel, anunciar no Magalu Ads tem suas particularidades e desafios. O primeiro é entender o <strong>perfil do público</strong> do Magalu, que pode ter um comportamento de compra diferente de outros marketplaces. Criar anúncios com uma linguagem e apelo visual que ressoem com esses consumidores é fundamental para o sucesso.
            </p>
            <p>
              Além disso, a concorrência dentro da plataforma está cada vez mais profissional. Para se destacar, não basta apenas ativar uma campanha. É preciso ter uma estratégia de lances bem ajustada, um entendimento claro das <strong>métricas e diferenciais</strong> da plataforma, e uma seleção criteriosa de quais produtos promover. Sem um gerenciamento ativo, o risco de investir sem obter o retorno esperado é alto, e o orçamento pode ser consumido rapidamente por cliques de baixa qualidade.
            </p>
             <p>
              Muitos vendedores também enfrentam dificuldades em mensurar o real impacto das campanhas, não sabendo ao certo qual o Custo de Aquisição por Venda (ACOS) ou o Retorno sobre o Investimento (ROI), o que impede a tomada de decisões baseada em dados para otimizar futuras campanhas.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Comece com o Pé Direito: Receba Nosso Checklist Gratuito</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para ajudar você a navegar na plataforma de <strong>Magalu Ads Produtos Patrocinados</strong> com mais segurança e eficiência, preparamos um checklist exclusivo e gratuito. Este material é um guia de bolso para suas primeiras campanhas.
            </p>
            <p>
              Nele, você encontrará as principais métricas que você deve acompanhar, dicas práticas de otimização de campanhas e os diferenciais que você precisa conhecer para criar anúncios de sucesso, evitando os erros mais comuns de iniciantes.
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
