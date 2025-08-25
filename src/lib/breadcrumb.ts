import { siteMetadata } from '@/config/site';

export interface Breadcrumb {
  name: string;
  url: string;
}

const breadcrumbNameMap: { [key: string]: string } = {
  '/': 'Home',
  '/conteudos': 'Conteúdos',
  '/obrigado': 'Obrigado',
  '/obrigado-newsletter': 'Obrigado',
  '/downloads': 'Downloads',
  '/downloads/guia-mercado-livre': 'Guia Mercado Livre',
  '/downloads/checklist-magalu': 'Checklist Magalu',
  '/downloads/guia-shopee': 'Guia Shopee',
  '/downloads/guia-fba': 'Guia FBA',
  '/downloads/guia-amazon': 'Guia Amazon',
  '/downloads/whitepaper-marketing': 'Whitepaper de Marketing',
  '/downloads/checklist-visibilidade': 'Checklist de Visibilidade',
  '/downloads/comparativo-marketplaces': 'Comparativo de Marketplaces',
  '/termos-de-uso': 'Termos de Uso',
  '/politica-de-privacidade': 'Política de Privacidade',
  '/landing': 'Landing Pages',
  '/landing/mercado-ads': 'Mercado Ads',
  '/landing/como-vender-no-mercado-livre': 'Como Vender no Mercado Livre',
  '/landing/como-ganhar-buy-box-amazon': 'Como Ganhar a Buy Box da Amazon',
  '/landing/agencia-de-marketplace': 'Agência de Marketplace',
  '/landing/gestao-de-marketplaces': 'Gestão de Marketplaces',
  '/landing/precificacao-dinamica': 'Precificação Dinâmica',
  '/landing/criacao-a-plus-content-amazon': 'Criação de Conteúdo A+ na Amazon',
  '/landing/consultoria-mercado-livre': 'Consultoria Mercado Livre',
  '/landing/magalu-ads-produtos-patrocinados': 'Magalu Ads',
  '/landing/como-vender-na-shopee': 'Como Vender na Shopee',
  '/landing/vender-no-marketplace': 'Vender em Marketplaces',
  '/landing/amazon-seo': 'SEO para Amazon',
  '/landing/gestao-de-conta-mercado-livre': 'Gestão de Conta Mercado Livre',
  '/landing/gestao-de-anuncios-em-marketplaces': 'Gestão de Anúncios em Marketplaces',
  '/landing/fulfillment-by-amazon-brasil': 'Fulfillment by Amazon (FBA)',
  '/landing/mercado-envios-full': 'Mercado Envios Full',
  '/landing/consultoria-de-vendas-online': 'Consultoria de Vendas Online',
  '/landing/agencia-parceira-amazon': 'Agência Parceira Amazon',
  '/landing/como-vender-na-amazon-brasil': 'Como Vender na Amazon Brasil',
  '/landing/como-anunciar-no-magalu': 'Como Anunciar no Magalu',
  '/landing/agencia-especializada-shopee': 'Agência Especializada Shopee',
  '/landing/estrategias-mercado-ads': 'Estratégias para Mercado Ads',
  '/landing/marketing-para-ecommerce': 'Marketing para E-commerce',
  '/landing/aumentar-visibilidade-produtos-online': 'Aumentar Visibilidade de Produtos Online',
  '/landing/maiores-marketplaces-do-brasil': 'Maiores Marketplaces do Brasil',
};

export const generateBreadcrumbs = (pathname: string): Breadcrumb[] => {
  const pathnames = pathname.split('/').filter(x => x);
  const breadcrumbs: Breadcrumb[] = [{ name: 'Home', url: '/' }];

  let currentPath = '';
  for (const pathname of pathnames) {
    currentPath += `/${pathname}`;
    const name = breadcrumbNameMap[currentPath];
    if (name) {
      breadcrumbs.push({ name, url: currentPath });
    }
  }

  return breadcrumbs;
};

export const createBreadcrumbSchema = (breadcrumbs: Breadcrumb[]) => {
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: `${siteMetadata.siteUrl}${breadcrumb.url}`,
    })),
  };
};
