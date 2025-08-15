import LandingPage from "./LandingPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CriacaoAplusContentAmazonPage = () => {
  return (
    <LandingPage
      title="Seu Produto com Apresentação A+ de Alta Conversão na Amazon"
      description="Descubra como o conteúdo A+ pode transformar a página do seu produto e veja nosso portfólio."
      slug="criacao-a-plus-content-amazon"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Seu Produto com Apresentação A+ de Alta Conversão na Amazon
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Vá além das descrições simples. Use imagens, textos ricos e comparativos para contar a história do seu produto e aumentar sua taxa de conversão.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O que é o Conteúdo A+ da Amazon?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O <strong>Conteúdo A+</strong> (anteriormente conhecido como Enhanced Brand Content) é um recurso premium da Amazon que permite aos vendedores de marcas registradas enriquecer a descrição de seus produtos com elementos visuais avançados. Em vez de um simples bloco de texto, você pode usar imagens de alta qualidade, layouts modulares, banners, tabelas comparativas e textos formatados para criar uma experiência de compra muito mais imersiva e informativa.
            </p>
            <p>
              O objetivo do Conteúdo A+ é ajudar os clientes a tomarem uma decisão de compra mais informada, respondendo a perguntas comuns, destacando os diferenciais do produto e contando a história da sua marca. Segundo a Amazon, o uso de Conteúdo A+ pode aumentar a taxa de conversão de 3% a 10%.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">O Desafio de Criar um Conteúdo A+ Eficaz</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Ter acesso à ferramenta não garante um bom resultado. A criação de um <strong>Conteúdo A+</strong> de alta conversão exige uma combinação de habilidades: design gráfico, redação publicitária (copywriting) e conhecimento das políticas da Amazon. Muitas marcas acabam criando conteúdos que são visualmente confusos, com excesso de informação ou que não destacam os benefícios mais importantes para o cliente.
            </p>
            <p>
              Além disso, cada módulo do Conteúdo A+ tem suas próprias especificações de tamanho e formato. Criar os assets visuais, escrever os textos e montar o layout de forma estratégica consome tempo e requer um conhecimento que muitas equipes internas não possuem.
            </p>
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Veja Exemplos e Peça sua Proposta</h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Nossa equipe de designers e redatores é especializada na criação de Conteúdo A+ que vende. Nós estudamos seu produto e seu público para criar uma página que não apenas informa, mas também encanta e converte.
            </p>
            <p>
              Explore nossa galeria interativa de cases e veja o antes e depois.
            </p>
          </div>
          <div className="mt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Veja Nossos Exemplos</CardTitle>
              </CardHeader>
              <CardContent>
                 <div className="p-8 text-center">
                  <p>Aqui entrará uma galeria interativa.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </LandingPage>
  );
};

export default CriacaoAplusContentAmazonPage;
