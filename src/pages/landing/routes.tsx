import { Route } from 'react-router-dom';

import AgenciaDeMarketplacePage from './AgenciaDeMarketplace';
import AgenciaEspecializadaShopeePage from './AgenciaEspecializadaShopee';
import AgenciaParceiraAmazonPage from './AgenciaParceiraAmazon';
import AmazonSeoPage from './AmazonSeo';
import AumentarVisibilidadeProdutosOnlinePage from './AumentarVisibilidadeProdutosOnline';
import ComoAnunciarNoMagaluPage from './ComoAnunciarNoMagalu';
import ComoGanharBuyBoxAmazonPage from './ComoGanharBuyBoxAmazon';
import ComoVenderNaAmazonBrasilPage from './ComoVenderNaAmazonBrasil';
import ComoVenderNaShopeePage from './ComoVenderNaShopee';
import ComoVenderNoMercadoLivrePage from './ComoVenderNoMercadoLivre';
import ConsultoriaDeVendasOnlinePage from './ConsultoriaDeVendasOnline';
import ConsultoriaMercadoLivrePage from './ConsultoriaMercadoLivre';
import CriacaoAplusContentAmazonPage from './CriacaoAplusContentAmazon';
import EstrategiasMercadoAdsPage from './EstrategiasMercadoAds';
import FulfillmentByAmazonBrasilPage from './FulfillmentByAmazonBrasil';
import GestaoDeAnunciosEmMarketplacesPage from './GestaoDeAnunciosEmMarketplaces';
import GestaoDeContaMercadoLivrePage from './GestaoDeContaMercadoLivre';
import GestaoDeMarketplacesPage from './GestaoDeMarketplaces';
import MagaluAdsProdutosPatrocinadosPage from './MagaluAdsProdutosPatrocinados';
import MaioresMarketplacesDoBrasilPage from './MaioresMarketplacesDoBrasil';
import MarketingParaEcommercePage from './MarketingParaEcommerce';
import MercadoAdsPage from './MercadoAds';
import MercadoEnviosFullPage from './MercadoEnviosFull';
import PrecificacaoDinamicaPage from './PrecificacaoDinamica';
import VenderNoMarketplacePage from './VenderNoMarketplace';

export const landingPageRoutes = (
  <>
    <Route path="/landing/mercado-ads" element={<MercadoAdsPage />} />
    <Route path="/landing/como-vender-no-mercado-livre" element={<ComoVenderNoMercadoLivrePage />} />
    <Route path="/landing/como-ganhar-buy-box-amazon" element={<ComoGanharBuyBoxAmazonPage />} />
    <Route path="/landing/agencia-de-marketplace" element={<AgenciaDeMarketplacePage />} />
    <Route path="/landing/gestao-de-marketplaces" element={<GestaoDeMarketplacesPage />} />
    <Route path="/landing/precificacao-dinamica" element={<PrecificacaoDinamicaPage />} />
    <Route path="/landing/criacao-a-plus-content-amazon" element={<CriacaoAplusContentAmazonPage />} />
    <Route path="/landing/consultoria-mercado-livre" element={<ConsultoriaMercadoLivrePage />} />
    <Route path="/landing/magalu-ads-produtos-patrocinados" element={<MagaluAdsProdutosPatrocinadosPage />} />
    <Route path="/landing/como-vender-na-shopee" element={<ComoVenderNaShopeePage />} />
    <Route path="/landing/vender-no-marketplace" element={<VenderNoMarketplacePage />} />
    <Route path="/landing/amazon-seo" element={<AmazonSeoPage />} />
    <Route path="/landing/gestao-de-conta-mercado-livre" element={<GestaoDeContaMercadoLivrePage />} />
    <Route path="/landing/gestao-de-anuncios-em-marketplaces" element={<GestaoDeAnunciosEmMarketplacesPage />} />
    <Route path="/landing/fulfillment-by-amazon-brasil" element={<FulfillmentByAmazonBrasilPage />} />
    <Route path="/landing/mercado-envios-full" element={<MercadoEnviosFullPage />} />
    <Route path="/landing/consultoria-de-vendas-online" element={<ConsultoriaDeVendasOnlinePage />} />
    <Route path="/landing/agencia-parceira-amazon" element={<AgenciaParceiraAmazonPage />} />
    <Route path="/landing/como-vender-na-amazon-brasil" element={<ComoVenderNaAmazonBrasilPage />} />
    <Route path="/landing/como-anunciar-no-magalu" element={<ComoAnunciarNoMagaluPage />} />
    <Route path="/landing/agencia-especializada-shopee" element={<AgenciaEspecializadaShopeePage />} />
    <Route path="/landing/estrategias-mercado-ads" element={<EstrategiasMercadoAdsPage />} />
    <Route path="/landing/marketing-para-ecommerce" element={<MarketingParaEcommercePage />} />
    <Route path="/landing/aumentar-visibilidade-produtos-online" element={<AumentarVisibilidadeProdutosOnlinePage />} />
    <Route path="/landing/maiores-marketplaces-do-brasil" element={<MaioresMarketplacesDoBrasilPage />} />
  </>
);
