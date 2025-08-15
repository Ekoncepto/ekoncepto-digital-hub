import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgenciaParceiraAmazonPage = () => {
  return (
    <LandingPage
      title="Parceiro Certificado para Suas Vendas na Amazon"
      description="Somos uma agência parceira certificada pela Amazon. Conheça nossos cases de sucesso e veja como podemos escalar suas vendas."
      slug="agencia-parceira-amazon"
    >
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
              Ser uma <strong>agência parceira da Amazon</strong> (Amazon Service Provider Network) significa que fomos avaliados e certificados pela própria Amazon como provedores de serviços de alta qualidade para seus vendedores. Isso atesta nossa expertise técnica e nosso histórico de sucesso na gestão de contas, publicidade (Amazon Ads), otimização de listagens (SEO) e logística (FBA).
            </p>
            <p>
              Trabalhar com uma agência parceira dá a você a segurança de que está recebendo orientação alinhada com as melhores práticas e as últimas novidades da plataforma, diretamente de quem tem um canal de comunicação com a Amazon.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Risco de Trabalhar com Agências Não Certificadas</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O ecossistema da Amazon é complexo e suas políticas são rígidas. Trabalhar com agências ou freelancers que não possuem a certificação oficial da Amazon pode expor sua conta a riscos. Estratégias desalinhadas com as políticas da plataforma podem levar a advertências, suspensão de anúncios ou, em casos graves, até mesmo ao bloqueio da sua conta de vendedor.
            </p>
            <p>
              Além do risco, há o custo de oportunidade. Uma gestão amadora pode não apenas falhar em gerar crescimento, mas também pode manchar a reputação da sua marca e fazer você perder um tempo precioso, que poderia ser usado para escalar de forma segura e eficiente.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Conheça Nossos Cases de Sucesso</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nossa autoridade como <strong>agência parceira Amazon</strong> é comprovada pelos resultados que geramos para nossos clientes. Temos um portfólio de cases de sucesso em diversos segmentos, demonstrando nossa capacidade de adaptação e nossa busca incessante por performance.
            </p>
            <p>
              Conheça nossos cases e veja na prática como podemos ajudar sua marca a ter sucesso na Amazon.
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
