import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgenciaParceiraAmazonPage = () => {
  return (
    <LandingPage>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Agência Parceira Certificada Amazon: Sua Garantia de Expertise
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Conte com a autoridade e o conhecimento de um parceiro oficial para navegar no ecossistema da Amazon.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que Significa ser uma Agência Parceira da Amazon?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Ser uma <strong>agência parceira da Amazon</strong>, ou fazer parte da Amazon Service Provider Network (SPN), significa que fomos rigorosamente avaliados e oficialmente certificados pela própria Amazon como provedores de serviços de alta qualidade para seus vendedores. Esta certificação não é apenas um selo; é uma validação do nosso profundo conhecimento técnico, do nosso histórico comprovado de sucesso na gestão de contas, e da nossa expertise em todas as áreas do ecossistema Amazon, incluindo publicidade (Amazon Ads), otimização de listagens para o algoritmo A9 (SEO), e logística avançada (FBA).
            </p>
            <p>
              Trabalhar com uma agência parceira certificada oferece a você uma camada extra de segurança e confiança. Significa que você está recebendo orientação 100% alinhada com as melhores práticas e as últimas novidades da plataforma, diretamente de uma equipe que possui um canal de comunicação direto com a Amazon e acesso a treinamentos e recursos exclusivos. É a garantia de que sua conta e sua marca estão em boas mãos.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Risco de Trabalhar com Agências Não Certificadas</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O ecossistema da Amazon é extremamente complexo e suas políticas de venda são notoriamente rígidas. Trabalhar com agências, consultores ou freelancers que não possuem a certificação oficial da Amazon pode expor sua conta a riscos significativos. Estratégias desalinhadas com as políticas da plataforma, mesmo que bem-intencionadas, podem levar a advertências, suspensão de anúncios, perda do Buy Box ou, em casos mais graves, até mesmo ao bloqueio permanente da sua conta de vendedor, o que representa um prejuízo enorme.
            </p>
            <p>
              Além do risco de penalidades, há o imenso custo de oportunidade. Uma gestão amadora ou desatualizada pode não apenas falhar em gerar o crescimento esperado, mas também pode manchar a reputação da sua marca com os consumidores, resultar em investimentos ineficazes em publicidade e fazer você perder um tempo precioso que poderia ser usado para escalar de forma segura e eficiente. No ambiente competitivo da Amazon, não ter a melhor expertise ao seu lado significa ficar para trás.
            </p>
             <p>
              A escolha do parceiro certo não é um custo, mas um investimento na segurança e no futuro do seu negócio na maior varejista do mundo.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Conheça Nossos Cases de Sucesso e Fale Conosco</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nossa autoridade como <strong>agência parceira Amazon</strong> é comprovada não apenas pelo nosso selo, mas principalmente pelos resultados que geramos para nossos clientes. Temos um portfólio de cases de sucesso em diversos segmentos, demonstrando nossa capacidade de adaptação, nossa busca incessante por performance e nosso compromisso com o crescimento dos nossos parceiros.
            </p>
            <p>
              Conheça nossos cases, veja na prática como podemos ajudar sua marca a ter sucesso na Amazon e entre em contato para uma conversa sem compromisso.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Conheça Nossos Cases</CardTitle>
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

export default AgenciaParceiraAmazonPage;
