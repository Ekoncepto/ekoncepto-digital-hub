import LandingPage from "./LandingPage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VenderNoMarketplacePage = () => {
  return (
    <LandingPage
      title="Tudo que Você Precisa Saber para Vender em Marketplaces"
      description="Um hub de artigos com conteúdo amplo sobre como vender nos principais marketplaces do Brasil."
      slug="vender-no-marketplace"
    >
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
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é Vender em um Marketplace?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              <strong>Vender em marketplace</strong> significa usar a estrutura de um grande site de e-commerce, como Amazon ou Mercado Livre, para listar e vender seus próprios produtos. Em vez de criar um site do zero, você aproveita o tráfego, a tecnologia de pagamento e, muitas vezes, a logística de uma plataforma já estabelecida e confiável.
            </p>
            <p>
              Essa é a maneira mais rápida e acessível para uma marca ou empreendedor começar a vender online, alcançando milhões de clientes em potencial sem a necessidade de um grande investimento inicial em marketing e tecnologia.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio da Sobrecarga de Informação</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Apesar das vantagens, o universo dos marketplaces pode ser esmagador. Cada plataforma tem suas próprias regras, taxas, e estratégias de sucesso. A quantidade de informação disponível é vasta, mas muitas vezes desorganizada e contraditória. Vendedores, especialmente os iniciantes, ficam perdidos sem saber por onde começar ou em qual canal focar.
            </p>
            <p>
              Gastar tempo e recursos na plataforma errada ou com a estratégia equivocada pode levar à frustração e a prejuízos financeiros, desmotivando muitos a continuar.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Seu Hub de Conhecimento Centralizado</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para resolver esse problema, criamos um <strong>hub de artigos</strong> completo. Aqui, você encontrará guias, análises e tutoriais sobre tudo o que você precisa saber para <strong>vender em marketplaces</strong>.
            </p>
            <p>
              Nosso conteúdo é organizado, prático e constantemente atualizado para refletir as últimas tendências do mercado.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/conteudos">Ler Mais em Nosso Hub</Link>
            </Button>
          </div>
        </section>
      </div>
    </LandingPage>
  );
};

export default VenderNoMarketplacePage;
