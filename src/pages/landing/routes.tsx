import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { landingPagesMetadata } from '../../config/landing-pages-metadata';

// Lazy load all landing page components
const componentImports = {
  AgenciaDeMarketplace: lazy(() => import('./AgenciaDeMarketplace')),
  AgenciaEspecializadaShopee: lazy(() => import('./AgenciaEspecializadaShopee')),
  AgenciaParceiraAmazon: lazy(() => import('./AgenciaParceiraAmazon')),
  AmazonSeo: lazy(() => import('./AmazonSeo')),
  AumentarVisibilidadeProdutosOnline: lazy(() => import('./AumentarVisibilidadeProdutosOnline')),
  ComoAnunciarNoMagalu: lazy(() => import('./ComoAnunciarNoMagalu')),
  ComoGanharBuyBoxAmazon: lazy(() => import('./ComoGanharBuyBoxAmazon')),
  ComoVenderNaAmazonBrasil: lazy(() => import('./ComoVenderNaAmazonBrasil')),
  ComoVenderNaShopee: lazy(() => import('./ComoVenderNaShopee')),
  ComoVenderNoMercadoLivre: lazy(() => import('./ComoVenderNoMercadoLivre')),
  ConsultoriaDeVendasOnline: lazy(() => import('./ConsultoriaDeVendasOnline')),
  ConsultoriaMercadoLivre: lazy(() => import('./ConsultoriaMercadoLivre')),
  CriacaoAplusContentAmazon: lazy(() => import('./CriacaoAplusContentAmazon')),
  EstrategiasMercadoAds: lazy(() => import('./EstrategiasMercadoAds')),
  FulfillmentByAmazonBrasil: lazy(() => import('./FulfillmentByAmazonBrasil')),
  GestaoDeAnunciosEmMarketplaces: lazy(() => import('./GestaoDeAnunciosEmMarketplaces')),
  GestaoDeContaMercadoLivre: lazy(() => import('./GestaoDeContaMercadoLivre')),
  GestaoDeMarketplaces: lazy(() => import('./GestaoDeMarketplaces')),
  MagaluAdsProdutosPatrocinados: lazy(() => import('./MagaluAdsProdutosPatrocinados')),
  MaioresMarketplacesDoBrasil: lazy(() => import('./MaioresMarketplacesDoBrasil')),
  MarketingParaEcommerce: lazy(() => import('./MarketingParaEcommerce')),
  MercadoAds: lazy(() => import('./MercadoAds')),
  MercadoEnviosFull: lazy(() => import('./MercadoEnviosFull')),
  PrecificacaoDinamica: lazy(() => import('./PrecificacaoDinamica')),
  VenderNoMarketplace: lazy(() => import('./VenderNoMarketplace')),
};

export const landingPageRoutes = landingPagesMetadata.map(page => {
  const Component = componentImports[page.componentName as keyof typeof componentImports];
  if (!Component) {
    throw new Error(`Component ${page.componentName} not found`);
  }
  return <Route key={page.slug} path={`/landing/${page.slug}`} element={<Component />} />;
});
