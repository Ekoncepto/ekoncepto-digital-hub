import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GestaoDeAnunciosEmMarketplacesPage = () => {
  return (
    <LandingPage
      title="Anúncios que Convertem em Qualquer Marketplace"
      description="Com nossa expertise multicanal, criamos e otimizamos anúncios para gerar o máximo de resultado em qualquer plataforma."
      slug="gestao-de-anuncios-em-marketplaces"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Gestão de Anúncios em Marketplaces: Anúncios que Convertem
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Expertise multicanal para criar, gerenciar e otimizar campanhas de publicidade que geram ROI positivo.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é a Gestão de Anúncios em Marketplaces?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A <strong>gestão de anúncios em marketplaces</strong> é o serviço de planejamento e execução de campanhas de publicidade paga dentro de plataformas como Mercado Livre (Mercado Ads), Amazon (Amazon Ads) e Magalu (Magalu Ads). O trabalho envolve desde a definição do orçamento e dos produtos a serem promovidos até a otimização diária dos lances e a análise de métricas de performance.
            </p>
            <p>
              O objetivo é utilizar as ferramentas de publicidade de cada canal da forma mais eficiente possível, garantindo que os anúncios sejam exibidos para o público certo, no momento certo, e que o investimento se traduza em um aumento real e lucrativo nas vendas.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio da Expertise Multicanal</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Cada marketplace tem sua própria plataforma de anúncios, com suas próprias regras, formatos e estratégias de otimização. O que funciona no Mercado Ads pode não funcionar no Amazon Ads. Tentar gerenciar campanhas em múltiplos canais sem um conhecimento profundo de cada um deles é uma receita para o desperdício de dinheiro.
            </p>
            <p>
              Muitos vendedores acabam com um baixo retorno sobre o investimento (ROI) porque não conseguem ajustar suas estratégias às nuances de cada plataforma, perdendo competitividade e deixando de aproveitar o potencial máximo que os anúncios patrocinados podem oferecer.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Fale com Nosso Time de Especialistas</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nossa equipe tem <strong>expertise multicanal</strong>. Dominamos as principais plataformas de anúncios em marketplaces e sabemos como extrair o melhor de cada uma delas. Criamos estratégias integradas que respeitam as particularidades de cada canal para maximizar seu resultado global.
            </p>
            <p>
              Agende uma consultoria gratuita e entenda como podemos otimizar seus investimentos em publicidade.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Fale com Nosso Time</CardTitle>
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

export default GestaoDeAnunciosEmMarketplacesPage;
