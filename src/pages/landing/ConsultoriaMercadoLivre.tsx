import LandingPage from "./LandingPage";
import { LandingPageForm } from "@/components/sections/LandingPageForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ConsultoriaMercadoLivrePage = () => {
  return (
    <LandingPage
      title="Vendas no Mercado Livre: Melhore com Especialistas"
      description="Nossa consultoria focada em performance ajuda você a otimizar sua operação e escalar suas vendas no Mercado Livre."
      slug="consultoria-mercado-livre"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Consultoria Mercado Livre Focada em Performance
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Se você já vende, mas sente que seus resultados estagnaram, nossa consultoria é o caminho para o próximo nível.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é uma Consultoria de Mercado Livre?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Uma <strong>consultoria de Mercado Livre</strong> é um serviço especializado para vendedores que buscam otimizar sua performance na plataforma. Diferente de um curso, a consultoria é um trabalho prático e personalizado. Um consultor experiente analisa sua conta, identifica pontos fracos e fortes, e cria um plano de ação para atingir seus objetivos, seja aumentar o faturamento, melhorar a lucratividade ou ganhar visibilidade.
            </p>
            <p>
              As áreas abordadas incluem a otimização de anúncios (SEO), estratégias de precificação, gestão de campanhas de Mercado Ads, melhorias na reputação e na logística, e a escolha do mix de produtos ideal para a plataforma.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio do "Platô de Vendas"</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Muitos vendedores de sucesso no Mercado Livre eventualmente atingem um "platô", onde parece impossível continuar crescendo. As estratégias que funcionaram no início perdem a eficácia, a concorrência se intensifica e o retorno sobre os investimentos em publicidade começa a diminuir. Tentar sair dessa estagnação sozinho é difícil, pois exige um conhecimento profundo das nuances do algoritmo e das ferramentas mais avançadas da plataforma.
            </p>
            <p>
              Sem um olhar externo e especializado, é comum que o vendedor continue repetindo as mesmas ações, esperando resultados diferentes, ou pior, tome decisões baseadas em "achismos" que podem prejudicar a saúde da conta.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Uma Sessão Estratégica para Mudar seu Jogo</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nossa <strong>consultoria de Mercado Livre</strong> é focada em performance e foi desenhada para vendedores que querem sair do platô. Em sessões estratégicas, nosso time de especialistas mergulha na sua operação e entrega um plano de ação claro e acionável.
            </p>
            <p>
              Chega de incertezas. Agende uma sessão e tenha a clareza que você precisa para voltar a crescer de forma sustentável no Mercado Livre.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Agendar Sessão de Consultoria</CardTitle>
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

export default ConsultoriaMercadoLivrePage;
