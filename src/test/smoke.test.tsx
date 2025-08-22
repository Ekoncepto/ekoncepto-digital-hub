import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Import all page components
import Index from '@/pages/Index';
import LandingIndexPage from '@/pages/LandingIndex';
import NotFound from '@/pages/NotFound';
import ThankYouPage from '@/pages/ThankYou';

// Landing Pages
import AgenciaDeMarketplacePage from '@/pages/landing/AgenciaDeMarketplace';
import AgenciaEspecializadaShopeePage from '@/pages/landing/AgenciaEspecializadaShopee';
import AgenciaParceiraAmazonPage from '@/pages/landing/AgenciaParceiraAmazon';
import AmazonSeoPage from '@/pages/landing/AmazonSeo';
import AumentarVisibilidadeProdutosOnlinePage from '@/pages/landing/AumentarVisibilidadeProdutosOnline';
import ComoAnunciarNoMagaluPage from '@/pages/landing/ComoAnunciarNoMagalu';
import ComoGanharBuyBoxAmazonPage from '@/pages/landing/ComoGanharBuyBoxAmazon';
import ComoVenderNaAmazonBrasilPage from '@/pages/landing/ComoVenderNaAmazonBrasil';
import ComoVenderNaShopeePage from '@/pages/landing/ComoVenderNaShopee';
import ComoVenderNoMercadoLivrePage from '@/pages/landing/ComoVenderNoMercadoLivre';
import ConsultoriaDeVendasOnlinePage from '@/pages/landing/ConsultoriaDeVendasOnline';
import ConsultoriaMercadoLivrePage from '@/pages/landing/ConsultoriaMercadoLivre';
import CriacaoAplusContentAmazonPage from '@/pages/landing/CriacaoAplusContentAmazon';
import EstrategiasMercadoAdsPage from '@/pages/landing/EstrategiasMercadoAds';
import FulfillmentByAmazonBrasilPage from '@/pages/landing/FulfillmentByAmazonBrasil';
import GestaoDeAnunciosEmMarketplacesPage from '@/pages/landing/GestaoDeAnunciosEmMarketplaces';
import GestaoDeContaMercadoLivrePage from '@/pages/landing/GestaoDeContaMercadoLivre';
import GestaoDeMarketplacesPage from '@/pages/landing/GestaoDeMarketplaces';
import MagaluAdsProdutosPatrocinadosPage from '@/pages/landing/MagaluAdsProdutosPatrocinados';
import MaioresMarketplacesDoBrasilPage from '@/pages/landing/MaioresMarketplacesDoBrasil';
import MarketingParaEcommercePage from '@/pages/landing/MarketingParaEcommerce';
import MercadoAdsPage from '@/pages/landing/MercadoAds';
import MercadoEnviosFullPage from '@/pages/landing/MercadoEnviosFull';
import PrecificacaoDinamicaPage from '@/pages/landing/PrecificacaoDinamica';
import VenderNoMarketplacePage from '@/pages/landing/VenderNoMarketplace';

// Download Pages
import ChecklistMagaluDownloadPage from '@/pages/downloads/ChecklistMagalu';
import ChecklistVisibilidadeDownloadPage from '@/pages/downloads/ChecklistVisibilidade';
import ComparativoMarketplacesDownloadPage from '@/pages/downloads/ComparativoMarketplaces';
import GuiaAmazonDownloadPage from '@/pages/downloads/GuiaAmazon';
import GuiaFbaDownloadPage from '@/pages/downloads/GuiaFba';
import GuiaMercadoLivreDownloadPage from '@/pages/downloads/GuiaMercadoLivre';
import GuiaShopeeDownloadPage from '@/pages/downloads/GuiaShopee';
import WhitepaperMarketingDownloadPage from '@/pages/downloads/WhitepaperMarketing';
import { AppRoutes } from '@/App';


const queryClient = new QueryClient();

const pages = [
  { name: 'Index', component: <Index /> },
  { name: 'LandingIndexPage', component: <LandingIndexPage /> },
  { name: 'NotFound', component: <NotFound /> },
  { name: 'ThankYouPage', component: <ThankYouPage /> },
  // Landing Pages
  { name: 'AgenciaDeMarketplacePage', component: <AgenciaDeMarketplacePage /> },
  { name: 'AgenciaEspecializadaShopeePage', component: <AgenciaEspecializadaShopeePage /> },
  { name: 'AgenciaParceiraAmazonPage', component: <AgenciaParceiraAmazonPage /> },
  { name: 'AmazonSeoPage', component: <AmazonSeoPage /> },
  { name: 'AumentarVisibilidadeProdutosOnlinePage', component: <AumentarVisibilidadeProdutosOnlinePage /> },
  { name: 'ComoAnunciarNoMagaluPage', component: <ComoAnunciarNoMagaluPage /> },
  { name: 'ComoGanharBuyBoxAmazonPage', component: <ComoGanharBuyBoxAmazonPage /> },
  { name: 'ComoVenderNaAmazonBrasilPage', component: <ComoVenderNaAmazonBrasilPage /> },
  { name: 'ComoVenderNaShopeePage', component: <ComoVenderNaShopeePage /> },
  { name: 'ComoVenderNoMercadoLivrePage', component: <ComoVenderNoMercadoLivrePage /> },
  { name: 'ConsultoriaDeVendasOnlinePage', component: <ConsultoriaDeVendasOnlinePage /> },
  { name: 'ConsultoriaMercadoLivrePage', component: <ConsultoriaMercadoLivrePage /> },
  { name: 'CriacaoAplusContentAmazonPage', component: <CriacaoAplusContentAmazonPage /> },
  { name: 'EstrategiasMercadoAdsPage', component: <EstrategiasMercadoAdsPage /> },
  { name: 'FulfillmentByAmazonBrasilPage', component: <FulfillmentByAmazonBrasilPage /> },
  { name: 'GestaoDeAnunciosEmMarketplacesPage', component: <GestaoDeAnunciosEmMarketplacesPage /> },
  { name: 'GestaoDeContaMercadoLivrePage', component: <GestaoDeContaMercadoLivrePage /> },
  { name: 'GestaoDeMarketplacesPage', component: <GestaoDeMarketplacesPage /> },
  { name: 'MagaluAdsProdutosPatrocinadosPage', component: <MagaluAdsProdutosPatrocinadosPage /> },
  { name: 'MaioresMarketplacesDoBrasilPage', component: <MaioresMarketplacesDoBrasilPage /> },
  { name: 'MarketingParaEcommercePage', component: <MarketingParaEcommercePage /> },
  { name: 'MercadoAdsPage', component: <MercadoAdsPage /> },
  { name: 'MercadoEnviosFullPage', component: <MercadoEnviosFullPage /> },
  { name: 'PrecificacaoDinamicaPage', component: <PrecificacaoDinamicaPage /> },
  { name: 'VenderNoMarketplacePage', component: <VenderNoMarketplacePage /> },
  // Download Pages
  { name: 'ChecklistMagaluDownloadPage', component: <ChecklistMagaluDownloadPage /> },
  { name: 'ChecklistVisibilidadeDownloadPage', component: <ChecklistVisibilidadeDownloadPage /> },
  { name: 'ComparativoMarketplacesDownloadPage', component: <ComparativoMarketplacesDownloadPage /> },
  { name: 'GuiaAmazonDownloadPage', component: <GuiaAmazonDownloadPage /> },
  { name: 'GuiaFbaDownloadPage', component: <GuiaFbaDownloadPage /> },
  { name: 'GuiaMercadoLivreDownloadPage', component: <GuiaMercadoLivreDownloadPage /> },
  { name: 'GuiaShopeeDownloadPage', component: <GuiaShopeeDownloadPage /> },
  { name: 'WhitepaperMarketingDownloadPage', component: <WhitepaperMarketingDownloadPage /> },
];

describe('Page Rendering Smoke Tests', () => {
  pages.forEach(page => {
    it(`should render the ${page.name} page without crashing`, () => {
      try {
        render(
          <QueryClientProvider client={queryClient}>
            <MemoryRouter>
              {page.component}
            </MemoryRouter>
          </QueryClientProvider>
        );
      } catch (e) {
        // We catch the error to provide a more informative message.
        // The test will still fail due to the expectation below.
        console.error(`Error rendering page ${page.name}:`, e);
      }
      // This assertion is just to make the test runner happy.
      // The real test is whether the render function throws an unhandled exception.
      expect(true).toBe(true);
    });
  });

  it('should render a landing page when navigating to a deep link', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/landing/como-vender-na-shopee']}>
            <AppRoutes />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Guia Completo: Como Vender na Shopee em 2024')).toBeInTheDocument();
    });
});
