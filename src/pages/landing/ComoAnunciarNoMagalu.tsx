import LandingPage from "./LandingPage";
import { Button } from "@/components/ui/button";

const ComoAnunciarNoMagaluPage = () => {
  return (
    <LandingPage
      title="Anuncie no Magalu de Forma Profissional"
      description="Aprenda o passo a passo e dicas essenciais para criar anúncios eficazes no Magalu com nosso tutorial em vídeo."
      slug="como-anunciar-no-magalu"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Como Anunciar no Magalu de Forma Profissional
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Assista ao nosso tutorial em vídeo e aprenda a criar campanhas de sucesso no Magalu Ads.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Potencial do Magalu Ads</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              <strong>Anunciar no Magalu</strong> através da plataforma Magalu Ads é uma das formas mais eficazes de ganhar destaque em um dos maiores varejistas do Brasil. A ferramenta de produtos patrocinados permite que seus produtos apareçam em posições privilegiadas, alcançando milhões de consumidores no momento exato da decisão de compra.
            </p>
            <p>
              As campanhas podem ser configuradas de forma rápida, com controle total sobre o orçamento e com relatórios que ajudam a medir a eficácia de cada anúncio, tornando o Magalu Ads uma peça fundamental na estratégia de quem vende na plataforma.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Desafios Comuns ao Anunciar</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Apesar da interface amigável, muitos vendedores não conseguem extrair o máximo da ferramenta. Um dos principais desafios é a <strong>escolha dos produtos certos</strong> para anunciar. Promover itens com baixa margem de lucro ou pouca atratividade pode levar a um retorno sobre o investimento negativo.
            </p>
            <p>
              Outra dificuldade é a <strong>otimização dos lances</strong>. Sem um acompanhamento constante e uma estratégia clara, é fácil pagar caro por cliques que não convertem ou perder visibilidade para concorrentes que gerenciam suas campanhas de forma mais profissional.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Aprenda na Prática com Nosso Tutorial em Vídeo</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Para desmistificar o processo de <strong>como anunciar no Magalu</strong>, criamos um tutorial em vídeo completo e direto ao ponto. Nele, mostramos o passo a passo da criação de uma campanha, desde a escolha dos produtos até a análise dos resultados.
            </p>
            <p>
              Assista agora e comece a criar anúncios que realmente convertem.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="#" target="_blank" rel="noopener noreferrer">Assistir Tutorial</a>
            </Button>
          </div>
        </section>
      </div>
    </LandingPage>
  );
};

export default ComoAnunciarNoMagaluPage;
