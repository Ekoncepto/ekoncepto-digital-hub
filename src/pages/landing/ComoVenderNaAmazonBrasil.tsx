import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ComoVenderNaAmazonBrasilPage = () => {
  return (
    <LandingPage
      title="Comece a Vender na Amazon Brasil: Guia Prático"
      description="Nosso guia prático para iniciantes ensina tudo o que você precisa para começar a vender na Amazon Brasil."
      slug="como-vender-na-amazon-brasil"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Guia Prático: Como Vender na Amazon Brasil
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Um passo a passo completo para você se cadastrar, listar seus produtos e fazer sua primeira venda no maior varejista do mundo.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Por que e Como Vender na Amazon Brasil?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A <strong>Amazon Brasil</strong> representa uma oportunidade única para vendedores de todos os tamanhos que desejam alcançar uma audiência massiva e construir uma marca de confiança. Vender na Amazon significa associar seus produtos à excelência em logística e atendimento ao cliente, aproveitando a credibilidade de uma das marcas mais valiosas do mundo. Com milhões de clientes fiéis, especialmente os assinantes do programa Prime, e a infraestrutura logística mais avançada do planeta (com o programa FBA), a plataforma é um terreno fértil para o crescimento acelerado.
            </p>
            <p>
              O processo para começar a <strong>vender na Amazon Brasil</strong> é estruturado e começa com o cadastro no Seller Central, o portal do vendedor. Em seguida, você deve escolher um plano de vendas (Individual, para quem vende pouco, ou Profissional, para quem busca escalar) e começar a listar seus produtos. Este passo é crucial e envolve criar novas páginas de produto ou, mais comumente, se associar a produtos já existentes no catálogo da Amazon, competindo com outros vendedores pelo Buy Box.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Os Desafios Iniciais e as Regras do Jogo na Amazon</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O ambiente da Amazon é altamente competitivo e governado por regras rígidas, o que pode ser um grande desafio para um vendedor iniciante. Um dos primeiros obstáculos é entender a <strong>diferença entre criar uma nova "oferta" e um novo "produto" (ASIN)</strong>. Erros nesse processo podem levar a listagens duplicadas, de baixa qualidade, ou até mesmo à suspensão da sua capacidade de criar novos anúncios. É fundamental entender a lógica do catálogo da Amazon para começar com o pé direito.
            </p>
            <p>
              Outro ponto de extrema importância é a <strong>gestão da saúde da conta</strong> (Account Health). A Amazon monitora de perto e de forma automatizada dezenas de métricas de performance, como o tempo de envio, a taxa de cancelamento por falta de estoque, a taxa de defeitos em pedidos e a satisfação do cliente. Qualquer deslize, mesmo que pequeno, pode resultar em penalidades severas, como a perda de privilégios importantes (como a elegibilidade para o Buy Box) ou, em casos recorrentes, na suspensão temporária ou permanente da sua conta.
            </p>
             <p>
              Para o novo vendedor, navegar por essas regras e manter todas as métricas em dia, enquanto tenta fazer as primeiras vendas, pode ser uma tarefa assustadora e complexa.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Seu Checklist para Começar com Total Segurança</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para garantir que sua jornada de <strong>como vender na Amazon Brasil</strong> comece da forma mais suave e segura possível, nós criamos um e-book detalhado e um checklist prático. Nosso material cobre tudo o que você precisa saber, desde o processo de cadastro até as melhores práticas para criar suas primeiras listagens e gerenciar a saúde da sua conta.
            </p>
            <p>
              Evite os erros mais comuns que a maioria dos iniciantes comete e acelere seu caminho para o sucesso na Amazon. Baixe nosso material gratuito agora e comece a vender com confiança.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Baixar Checklist Gratuito</CardTitle>
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

export default ComoVenderNaAmazonBrasilPage;
