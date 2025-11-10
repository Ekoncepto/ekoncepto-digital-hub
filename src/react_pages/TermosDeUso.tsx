import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const TermosDeUsoPage = () => {
  return (
    <>
      <Header />
      <main className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="prose lg:prose-xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Termos de Uso</h1>
            <p>
              Bem-vindo aos nossos Termos de Uso. Este é um documento placeholder. O conteúdo final
              desta página precisa ser escrito por um profissional da área jurídica.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-2">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar nosso site, você aceita e concorda em ficar vinculado pelos termos
              e disposições deste acordo.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-2">2. Modificações dos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Recomendamos
              que você revise esta página periodicamente para quaisquer alterações.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-2">3. Conteúdo do Site</h2>
            <p>
              Todo o conteúdo fornecido no site é apenas para fins informativos. Não nos
              responsabilizamos por quaisquer erros ou omissões nas informações.
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

export default TermosDeUsoPage;
