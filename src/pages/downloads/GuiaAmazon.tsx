import { useEffect } from "react";

const GuiaAmazonDownloadPage = () => {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/downloads/guia-amazon.pdf";
    link.setAttribute("download", "guia-amazon.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="bg-white p-12 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Obrigado!</h1>
        <p className="text-gray-600 mb-8">
          O download do seu "Guia para Vender na Amazon" começará em breve.
        </p>
        <a
          href="/downloads/guia-amazon.pdf"
          download="guia-amazon.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Clique aqui se o download não iniciar
        </a>
      </div>
    </div>
  );
};

export default GuiaAmazonDownloadPage;
