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
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Por que Vender na Amazon Brasil?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A <strong>Amazon Brasil</strong> oferece uma oportunidade única para vendedores de todos os tamanhos. Com a confiança da marca Amazon, milhões de clientes fiéis (especialmente assinantes Prime) e a infraestrutura logística mais avançada do mundo (FBA), a plataforma é um terreno fértil para o crescimento.
            </p>
            <p>
              Vender na Amazon significa associar seus produtos a uma experiência de compra de excelência. O processo para começar envolve o cadastro no Seller Central, a escolha de um plano de vendas (Individual ou Profissional) e a listagem dos seus produtos, seja criando novas páginas ou se associando a produtos já existentes.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Os Desafios Iniciais na Amazon</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O ambiente da Amazon é altamente competitivo e baseado em regras rígidas. Para um iniciante, o primeiro desafio é entender a <strong>diferença entre criar uma nova oferta e um novo produto</strong>. Erros nesse processo podem levar a listagens duplicadas ou de baixa qualidade.
            </p>
            <p>
              Outro ponto crucial é a <strong>gestão da performance da conta</strong> (Account Health). A Amazon monitora de perto métricas como o tempo de envio, a taxa de cancelamento e a satisfação do cliente. Qualquer deslize pode resultar em perda de privilégios, como o Buy Box, ou até mesmo na suspensão da conta.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Seu Checklist para Começar com Segurança</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para garantir que sua jornada na Amazon Brasil comece da forma certa, criamos um e-book e um checklist prático. Nosso material cobre tudo o que você precisa saber.
            </p>
            <p>
              Evite os erros comuns de iniciantes e acelere seu caminho para o sucesso. Baixe nosso material gratuito agora.
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
