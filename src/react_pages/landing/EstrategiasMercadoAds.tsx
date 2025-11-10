import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EstrategiasMercadoAdsPage = () => {
  return (
    <LandingPage>
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
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Por que as Estratégias Básicas de Mercado Ads Não São Suficientes?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Muitos vendedores no Mercado Livre adotam uma abordagem superficial para o Mercado Ads: ativam a ferramenta, definem um orçamento diário e esperam que as vendas aconteçam magicamente. Essa estratégia básica pode até gerar alguns resultados iniciais, especialmente se o produto tiver baixa concorrência, mas raramente é lucrativa ou escalável a longo prazo. O Mercado Ads é uma ferramenta complexa e sofisticada, com diversas camadas de otimização que, se bem utilizadas, podem gerar um retorno sobre o investimento exponencial.
            </p>
            <p>
              As <strong>estratégias de Mercado Ads</strong> avançadas vão muito além do "ligar e torcer". Elas envolvem uma análise criteriosa de rentabilidade por produto para decidir onde investir, a segmentação de campanhas por estágio do funil de vendas (por exemplo, campanhas para produtos em lançamento vs. produtos já consolidados), o uso de lances manuais para ter controle total sobre produtos estratégicos, e a otimização contínua e diária baseada em dados de performance, e não em suposições ou "achismos".
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio de se Manter Atualizado e à Frente da Concorrência</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O cenário do Mercado Ads é um dos mais dinâmicos do e-commerce. Novas funcionalidades são lançadas pela plataforma, a concorrência se torna mais profissional e sofisticada a cada dia, e o comportamento do consumidor online está em constante evolução. Tentar acompanhar todas essas mudanças e, ao mesmo tempo, gerenciar o dia a dia do seu negócio (compras, estoque, logística, atendimento) é um desafio gigantesco.
            </p>
            <p>
              Sem um conhecimento aprofundado e constantemente atualizado, suas campanhas inevitavelmente perdem eficiência. Seu custo por aquisição de cliente (CAC) aumenta, seu Retorno sobre o Investimento (ROI) diminui, e você perde espaço e visibilidade para concorrentes que aplicam <strong>estratégias de Mercado Ads</strong> mais refinadas e baseadas em dados. Ficar para trás na gestão de anúncios significa, hoje, ficar para trás nas vendas.
            </p>
             <p>
              O conhecimento que funcionava no ano passado pode não ser mais suficiente para garantir sua competitividade hoje, exigindo uma dedicação ao estudo e à análise que a maioria dos vendedores simplesmente não tem tempo para ter.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Participe do Nosso Webinar e Eleve seu Nível de Estratégia</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para compartilhar nosso conhecimento e ajudar vendedores a saírem do nível básico, nós promovemos um webinar exclusivo e aprofundado sobre <strong>estratégias avançadas de Mercado Ads</strong>. Nele, nossos especialistas abrem o jogo, mostrando as táticas e metodologias que usamos na gestão das contas dos nossos clientes para alcançar máxima performance.
            </p>
            <p>
              Inscreva-se gratuitamente e tenha acesso a insights e estratégias que podem transformar completamente seus resultados e a forma como você enxerga a publicidade no Mercado Livre.
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
