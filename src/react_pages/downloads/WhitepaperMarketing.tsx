import { useEffect } from "react";
import SEO from "@/components/SEO";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const WhitepaperMarketingDownloadPage = () => {
  const breadcrumbs = useBreadcrumbs();
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/downloads/whitepaper-marketing.pdf";
    link.setAttribute("download", "whitepaper-marketing.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <>
      <SEO
        title="Download | Whitepaper de Marketing para Marketplace"
        description="Download do whitepaper de marketing para marketplace."
        noIndex
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="flex-grow flex items-center justify-center py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Obrigado!</h1>
            <p className="text-gray-600 mb-8">
              O download do seu "Whitepaper sobre Marketing para Marketplace" começará em breve.
            </p>
            <a
              href="/downloads/whitepaper-marketing.pdf"
              download="whitepaper-marketing.pdf"
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

export default WhitepaperMarketingDownloadPage;
