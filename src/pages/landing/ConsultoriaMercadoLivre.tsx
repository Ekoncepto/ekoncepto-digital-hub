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
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é e para quem é a Consultoria de Mercado Livre?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Uma <strong>consultoria de Mercado Livre</strong> é um serviço altamente especializado e personalizado, desenhado para vendedores que buscam otimizar sua performance e escalar seus resultados na plataforma. Diferente de um curso genérico, uma consultoria oferece um trabalho prático e focado nos desafios específicos da sua conta. Um consultor experiente realiza um diagnóstico profundo da sua operação, identifica pontos fracos e oportunidades de crescimento, e cria um plano de ação claro e acionável para que você atinja seus objetivos, seja aumentar o faturamento, melhorar a lucratividade, ganhar visibilidade ou otimizar processos.
            </p>
            <p>
              Este serviço é ideal para vendedores que já possuem uma operação ativa, mas sentem que atingiram um teto de crescimento. As áreas abordadas em nossa consultoria são abrangentes e incluem a otimização avançada de anúncios (SEO para o algoritmo do Mercado Livre), estratégias de precificação competitiva, gestão de campanhas de Mercado Ads para máximo ROI, melhorias na reputação da conta (termômetro), otimização da logística e a escolha estratégica do mix de produtos ideal para a plataforma.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio do "Platô de Vendas" no Mercado Livre</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              É um cenário comum: um vendedor de sucesso no Mercado Livre, após um período de crescimento, atinge um "platô", onde parece impossível continuar crescendo. As estratégias que funcionaram no início perdem a eficácia, a concorrência se torna mais acirrada e profissional, e o retorno sobre os investimentos em publicidade começa a diminuir, ou até mesmo a se tornar negativo. Tentar sair dessa estagnação sozinho é um desafio imenso, pois exige um conhecimento profundo das nuances do algoritmo do Mercado Livre e de suas ferramentas mais avançadas, que estão em constante atualização.
            </p>
            <p>
              Sem um olhar externo, experiente e especializado, é muito comum que o vendedor continue repetindo as mesmas ações, esperando resultados diferentes, ou pior, tome decisões baseadas em "achismos" e informações desatualizadas que podem prejudicar a saúde da conta e a lucratividade do negócio. A falta de tempo para se aprofundar em análises e estratégias acaba mantendo a operação em um ciclo de estagnação.
            </p>
             <p>
              Este platô não é um sinal de que o negócio chegou ao seu limite, mas sim de que é preciso um novo nível de estratégia e otimização para continuar crescendo, algo que uma consultoria especializada pode proporcionar.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Uma Sessão Estratégica para Mudar o Jogo do seu Negócio</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nossa <strong>consultoria de Mercado Livre</strong> é 100% focada em performance e foi desenhada para vendedores como você, que querem sair do platô e voltar a crescer. Em sessões estratégicas e intensivas, nosso time de especialistas mergulha na sua operação, analisa seus dados e entrega um plano de ação claro, prático e acionável.
            </p>
            <p>
              Chega de incertezas e de ações sem resultado. Agende uma sessão de consultoria e tenha a clareza e a direção que você precisa para levar sua operação no Mercado Livre para o próximo nível de faturamento e lucratividade.
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
