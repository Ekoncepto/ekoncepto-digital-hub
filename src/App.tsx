import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import { useAnalytics } from './hooks/useAnalytics';
import ScrollManager from './components/common/ScrollManager';
import PageLoader from './components/common/PageLoader';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import FloatingWhatsAppButton from './components/common/FloatingWhatsAppButton';
import { landingPageRoutes } from './pages/landing/routes';
import LandingIndexPage from './pages/LandingIndex';
import ThankYouPage from './pages/ThankYou';
import ObrigadoNewsletterPage from './pages/ObrigadoNewsletter';
import GuiaMercadoLivreDownloadPage from './pages/downloads/GuiaMercadoLivre';
import ChecklistMagaluDownloadPage from './pages/downloads/ChecklistMagalu';
import GuiaShopeeDownloadPage from './pages/downloads/GuiaShopee';
import GuiaFbaDownloadPage from './pages/downloads/GuiaFba';
import GuiaAmazonDownloadPage from './pages/downloads/GuiaAmazon';
import WhitepaperMarketingDownloadPage from './pages/downloads/WhitepaperMarketing';
import ChecklistVisibilidadeDownloadPage from './pages/downloads/ChecklistVisibilidade';
import ComparativoMarketplacesDownloadPage from './pages/downloads/ComparativoMarketplaces';
import TermosDeUsoPage from './pages/TermosDeUso';
import PoliticaDePrivacidadePage from './pages/PoliticaDePrivacidade';

const queryClient = new QueryClient();

// Analytics component to handle page views and events
const Analytics = () => {
  const { trackEvent } = useAnalytics('G-XXXXXXXXXX'); // Replace with your GA4 Measurement ID

  // Track page views
  useEffect(() => {
    trackEvent('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }, [trackEvent]);

  return null;
};

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/conteudos" element={<LandingIndexPage />} />
    <Route path="/conteudo" element={<Navigate to="/conteudos" replace />} />
    <Route path="/obrigado" element={<ThankYouPage />} />
    <Route path="/obrigado-newsletter" element={<ObrigadoNewsletterPage />} />
    <Route
      path="/downloads/guia-mercado-livre"
      element={<GuiaMercadoLivreDownloadPage />}
    />
    <Route
      path="/downloads/checklist-magalu"
      element={<ChecklistMagaluDownloadPage />}
    />
    <Route path="/downloads/guia-shopee" element={<GuiaShopeeDownloadPage />} />
    <Route path="/downloads/guia-fba" element={<GuiaFbaDownloadPage />} />
    <Route path="/downloads/guia-amazon" element={<GuiaAmazonDownloadPage />} />
    <Route
      path="/downloads/whitepaper-marketing"
      element={<WhitepaperMarketingDownloadPage />}
    />
    <Route
      path="/downloads/checklist-visibilidade"
      element={<ChecklistVisibilidadeDownloadPage />}
    />
    <Route
      path="/downloads/comparativo-marketplaces"
      element={<ComparativoMarketplacesDownloadPage />}
    />
    <Route path="/termos-de-uso" element={<TermosDeUsoPage />} />
    <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidadePage />} />
    <Route
      path="/landing/*"
      element={
        <Suspense fallback={<PageLoader />}>
          <Routes>{landingPageRoutes}</Routes>
        </Suspense>
      }
    />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <Analytics />
        <AppRoutes />
        <FloatingWhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
