import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const PoliticaDePrivacidadePage = () => {
    return (
    <>
            <Header />
      <main className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="prose lg:prose-xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
            <p>
              Bem-vindo à nossa Política de Privacidade. Este é um documento placeholder. O
              conteúdo final desta página precisa ser escrito por um profissional da área
              jurídica.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-2">1. Coleta de Informações</h2>
            <p>
              Coletamos informações pessoais quando você se registra em nosso site, faz um
              pedido, se inscreve em nossa newsletter ou preenche um formulário.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-2">2. Uso das Informações</h2>
            <p>
              As informações que coletamos podem ser usadas para personalizar sua experiência,
              melhorar nosso site, melhorar o atendimento ao cliente e processar transações.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-2">3. Proteção das Informações</h2>
            <p>
              Implementamos uma variedade de medidas de segurança para manter a segurança de suas
              informações pessoais.
            </p>
            <p className="mt-8 text-sm text-gray-500">
              Última atualização: 19 de Agosto de 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PoliticaDePrivacidadePage;
