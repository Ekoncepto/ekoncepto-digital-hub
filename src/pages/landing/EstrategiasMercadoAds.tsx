import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EstrategiasMercadoAdsPage = () => {
  return (
    <LandingPage
      title="Estratégias Avançadas para Dominar o Mercado Ads"
      description="Participe do nosso webinar e tenha acesso a conteúdo avançado sobre estratégias de Mercado Ads para escalar suas vendas."
      slug="estrategias-mercado-ads"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Estratégias Avançadas para Dominar o Mercado Ads
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Vá além do básico. Aprenda estratégias de segmentação, lances e otimização para se tornar um expert em Mercado Ads.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Por que as Estratégias Básicas Não São Suficientes?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Muitos vendedores no Mercado Livre ativam o Mercado Ads, definem um orçamento diário e esperam que as vendas aconteçam. Essa abordagem básica pode até gerar alguns resultados iniciais, mas raramente é lucrativa ou escalável a longo prazo. O Mercado Ads é uma ferramenta complexa, com diversas camadas de otimização que, se bem utilizadas, podem gerar um retorno exponencial.
            </p>
            <p>
              <strong>Estratégias de Mercado Ads</strong> avançadas envolvem a análise de rentabilidade por produto, a segmentação de campanhas por estágio do funil, o uso de lances manuais para produtos estratégicos e a otimização contínua baseada em dados de performance, e não em suposições.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio de se Manter Atualizado e Competitivo</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O cenário do Mercado Ads está em constante mudança. Novas funcionalidades são lançadas, a concorrência se torna mais sofisticada e o comportamento do consumidor evolui. Tentar acompanhar tudo isso enquanto gerencia o dia a dia do seu negócio é um grande desafio.
            </p>
            <p>
              Sem um conhecimento aprofundado e atualizado, suas campanhas perdem eficiência, seu custo por aquisição aumenta e você perde espaço para concorrentes que aplicam <strong>estratégias de Mercado Ads</strong> mais refinadas.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Participe do Nosso Webinar Avançado</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para compartilhar nosso conhecimento, promovemos um webinar exclusivo com conteúdo avançado sobre <strong>estratégias de Mercado Ads</strong>. Nele, abrimos nossas próprias táticas e mostramos na prática como otimizar campanhas para máxima performance.
            </p>
            <p>
              Inscreva-se e tenha acesso a insights que podem transformar seus resultados.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Participar do Webinar</CardTitle>
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

export default EstrategiasMercadoAdsPage;
