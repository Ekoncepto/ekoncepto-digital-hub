import LandingPage from "./LandingPage";
import { Button } from "@/components/ui/button";

const VenderNoMarketplacePage = () => {
  return (
    <LandingPage>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Tudo o que Você Precisa Saber para Vender em Marketplaces
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Do iniciante ao avançado, nosso hub de conteúdo é o seu ponto de partida para dominar as vendas online.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que Significa Vender em um Marketplace?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              <strong>Vender em marketplace</strong> é, na sua essência, usar a estrutura, a audiência e a credibilidade de um grande site de e-commerce já estabelecido, como Amazon, Mercado Livre ou Magazine Luiza, para listar e vender seus próprios produtos. Em vez de arcar com os altos custos e a complexidade de criar um site do zero, atrair tráfego e construir uma marca confiável, você aproveita uma plataforma que já possui milhões de clientes e uma infraestrutura robusta de tecnologia de pagamento e, muitas vezes, de logística.
            </p>
            <p>
              Esta é, sem dúvida, a maneira mais rápida, acessível e com menor risco para uma marca, um distribuidor ou um empreendedor individual começar a vender online. Você pode alcançar milhões de clientes em potencial em um curto espaço de tempo, sem a necessidade de um grande investimento inicial em marketing e desenvolvimento de tecnologia, validando seus produtos e seu modelo de negócio de forma ágil.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio da Sobrecarga de Informação e da Complexidade</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Apesar de todas as vantagens, o universo dos marketplaces pode ser esmagador para quem está começando. Cada plataforma é um ecossistema único, com suas próprias regras, políticas de comissão, ferramentas de publicidade e, o mais importante, um algoritmo de busca que decide quais produtos serão mostrados aos clientes. A quantidade de informação disponível na internet é vasta, mas frequentemente desorganizada, desatualizada e contraditória.
            </p>
            <p>
              Vendedores, especialmente os iniciantes, muitas vezes se sentem perdidos, sem saber por onde começar, em qual canal focar seus esforços ou qual estratégia seguir. Gastar tempo e recursos preciosos na plataforma errada ou com a estratégia equivocada pode levar à frustração, a prejuízos financeiros e à desmotivação de continuar no e-commerce. A complexidade não está em apenas vender, mas em vender de forma lucrativa e escalável.
            </p>
             <p>
              A falta de um guia confiável e de um caminho claro a seguir é um dos maiores obstáculos para o sucesso de quem decide <strong>vender em marketplace</strong>.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Seu Hub de Conhecimento Centralizado e Confiável</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para resolver esse problema de sobrecarga de informação e falta de direção, criamos um <strong>hub de artigos</strong> completo e gratuito. Aqui, você encontrará guias passo a passo, análises de ferramentas, comparativos entre plataformas e tutoriais sobre tudo o que você precisa saber para <strong>vender em marketplaces</strong> com sucesso.
            </p>
            <p>
              Nosso conteúdo é organizado, prático, fácil de entender e constantemente atualizado por especialistas que vivem o dia a dia dos marketplaces. Chega de informações soltas. Comece sua jornada aqui.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="/landing">Explorar Nossos Conteúdos</a>
            </Button>
          </div>
        </section>
      </div>
    </LandingPage>
  );
};

export default VenderNoMarketplacePage;
