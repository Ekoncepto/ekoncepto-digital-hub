import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const AgenciaDeMarketplacePage = lazy(() => import('./AgenciaDeMarketplace'));
const AgenciaEspecializadaShopeePage = lazy(() => import('./AgenciaEspecializadaShopee'));
const AgenciaParceiraAmazonPage = lazy(() => import('./AgenciaParceiraAmazon'));
const AmazonSeoPage = lazy(() => import('./AmazonSeo'));
const AumentarVisibilidadeProdutosOnlinePage = lazy(
  () => import('./AumentarVisibilidadeProdutosOnline')
);
const ComoAnunciarNoMagaluPage = lazy(() => import('./ComoAnunciarNoMagalu'));
const ComoGanharBuyBoxAmazonPage = lazy(() => import('./ComoGanharBuyBoxAmazon'));
const ComoVenderNaAmazonBrasilPage = lazy(() => import('./ComoVenderNaAmazonBrasil'));
const ComoVenderNaShopeePage = lazy(() => import('./ComoVenderNaShopee'));
const ComoVenderNoMercadoLivrePage = lazy(() => import('./ComoVenderNoMercadoLivre'));
const ConsultoriaDeVendasOnlinePage = lazy(() => import('./ConsultoriaDeVendasOnline'));
const ConsultoriaMercadoLivrePage = lazy(() => import('./ConsultoriaMercadoLivre'));
const CriacaoAplusContentAmazonPage = lazy(() => import('./CriacaoAplusContentAmazon'));
const EstrategiasMercadoAdsPage = lazy(() => import('./EstrategiasMercadoAds'));
const FulfillmentByAmazonBrasilPage = lazy(() => import('./FulfillmentByAmazonBrasil'));
const GestaoDeAnunciosEmMarketplacesPage = lazy(() => import('./GestaoDeAnunciosEmMarketplaces'));
const GestaoDeContaMercadoLivrePage = lazy(() => import('./GestaoDeContaMercadoLivre'));
const GestaoDeMarketplacesPage = lazy(() => import('./GestaoDeMarketplaces'));
const MagaluAdsProdutosPatrocinadosPage = lazy(() => import('./MagaluAdsProdutosPatrocinados'));
const MaioresMarketplacesDoBrasilPage = lazy(() => import('./MaioresMarketplacesDoBrasil'));
const MarketingParaEcommercePage = lazy(() => import('./MarketingParaEcommerce'));
const MercadoAdsPage = lazy(() => import('./MercadoAds'));
const MercadoEnviosFullPage = lazy(() => import('./MercadoEnviosFull'));
const PrecificacaoDinamicaPage = lazy(() => import('./PrecificacaoDinamica'));
const VenderNoMarketplacePage = lazy(() => import('./VenderNoMarketplace'));

export const landingPageRoutes = (
  <>
    <Route path="/landing/mercado-ads" element={<MercadoAdsPage />} />
    <Route
      path="/landing/como-vender-no-mercado-livre"
      element={<ComoVenderNoMercadoLivrePage />}
    />
    <Route path="/landing/como-ganhar-buy-box-amazon" element={<ComoGanharBuyBoxAmazonPage />} />
    <Route path="/landing/agencia-de-marketplace" element={<AgenciaDeMarketplacePage />} />
    <Route path="/landing/gestao-de-marketplaces" element={<GestaoDeMarketplacesPage />} />
    <Route path="/landing/precificacao-dinamica" element={<PrecificacaoDinamicaPage />} />
    <Route
      path="/landing/criacao-a-plus-content-amazon"
      element={<CriacaoAplusContentAmazonPage />}
    />
    <Route path="/landing/consultoria-mercado-livre" element={<ConsultoriaMercadoLivrePage />} />
    <Route
      path="/landing/magalu-ads-produtos-patrocinados"
      element={<MagaluAdsProdutosPatrocinadosPage />}
    />
    <Route path="/landing/como-vender-na-shopee" element={<ComoVenderNaShopeePage />} />
    <Route path="/landing/vender-no-marketplace" element={<VenderNoMarketplacePage />} />
    <Route path="/landing/amazon-seo" element={<AmazonSeoPage />} />
    <Route
      path="/landing/gestao-de-conta-mercado-livre"
      element={<GestaoDeContaMercadoLivrePage />}
    />
    <Route
      path="/landing/gestao-de-anuncios-em-marketplaces"
      element={<GestaoDeAnunciosEmMarketplacesPage />}
    />
    <Route
      path="/landing/fulfillment-by-amazon-brasil"
      element={<FulfillmentByAmazonBrasilPage />}
    />
    <Route path="/landing/mercado-envios-full" element={<MercadoEnviosFullPage />} />
    <Route
      path="/landing/consultoria-de-vendas-online"
      element={<ConsultoriaDeVendasOnlinePage />}
    />
    <Route path="/landing/agencia-parceira-amazon" element={<AgenciaParceiraAmazonPage />} />
    <Route
      path="/landing/como-vender-na-amazon-brasil"
      element={<ComoVenderNaAmazonBrasilPage />}
    />
    <Route path="/landing/como-anunciar-no-magalu" element={<ComoAnunciarNoMagaluPage />} />
    <Route
      path="/landing/agencia-especializada-shopee"
      element={<AgenciaEspecializadaShopeePage />}
    />
    <Route path="/landing/estrategias-mercado-ads" element={<EstrategiasMercadoAdsPage />} />
    <Route path="/landing/marketing-para-ecommerce" element={<MarketingParaEcommercePage />} />
    <Route
      path="/landing/aumentar-visibilidade-produtos-online"
      element={<AumentarVisibilidadeProdutosOnlinePage />}
    />
    <Route
      path="/landing/maiores-marketplaces-do-brasil"
      element={<MaioresMarketplacesDoBrasilPage />}
    />
  </>
);
