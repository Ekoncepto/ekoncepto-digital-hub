import { useEffect } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const ChecklistVisibilidadeDownloadPage = () => {
    useEffect(() => {
    const link = document.createElement("a");
    link.href = "/downloads/checklist-visibilidade.pdf";
    link.setAttribute("download", "checklist-visibilidade.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <>
            <Header />
      <main className="flex-grow flex items-center justify-center py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Obrigado!</h1>
            <p className="text-gray-600 mb-8">
              O download do seu "Checklist para Aumentar a Visibilidade" começará em breve.
            </p>
            <a
              href="/downloads/checklist-visibilidade.pdf"
              download="checklist-visibilidade.pdf"
              className="text-brand hover:underline"
            >
              Clique aqui se o download não iniciar
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ChecklistVisibilidadeDownloadPage;
