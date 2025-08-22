import { useEffect } from "react";

const GuiaFbaDownloadPage = () => {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/downloads/guia-fba.pdf";
    link.setAttribute("download", "guia-fba.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="bg-white p-12 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Obrigado!</h1>
        <p className="text-gray-600 mb-8">
          O download do seu "Guia do Amazon FBA" começará em breve.
        </p>
        <a
          href="/downloads/guia-fba.pdf"
          download="guia-fba.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Clique aqui se o download não iniciar
        </a>
      </div>
    </div>
  );
};

export default GuiaFbaDownloadPage;
