/**
 * Configuração centralizada das Landing Pages de Google Ads.
 *
 * Cada LP tem a identidade visual do canal (cor, headline, dor) mas
 * converte pro mesmo lugar: o quiz /diagnostico (via whatsappLink que
 * já roteia pra lá com atribuição de source).
 *
 * Para mudar copy/headline de uma LP, mexa apenas aqui.
 */

export type AdsLPConfig = {
  /** Slug da rota (ex: 'shopee' -> /ads/shopee) */
  slug: string;
  /** Classe de tema CSS (recolora --primary etc.) — vazio = verde padrão */
  themeClass: string;
  /** Nome do marketplace pra exibição */
  name: string;
  /** Eyebrow badge no hero */
  eyebrow: string;
  /** Headline com a dor específica */
  heroHeadline: string;
  /** Subtítulo do hero */
  heroSub: string;
  /** Hex da cor primária (gradientes/CTAs hardcoded) */
  primaryHex: string;
  /** Hex hover da cor primária */
  primaryHexHover: string;
  /** Hex da cor secundária (gradiente) */
  secondaryHex: string;
  /** Prefixo de source pra atribuição na planilha */
  sourcePrefix: string;
  /** Caminho do logo do marketplace (opcional) */
  marketplaceLogo?: string;
  /** Título SEO (não indexado — noindex:true — mas bom pra referência) */
  seoTitle: string;
  seoDescription: string;
};

export const ADS_LPS: Record<string, AdsLPConfig> = {
  shopee: {
    slug: 'shopee',
    themeClass: 'shopee-theme',
    name: 'Shopee',
    eyebrow: 'Especialistas em Shopee',
    heroHeadline: 'Seus anúncios na Shopee não vendem? É falta de método, não de sorte.',
    heroSub: `O método que já moveu +R$ 241M em marketplaces — agora focado na sua operação da Shopee.`,
    primaryHex: '#EE4D2D',
    primaryHexHover: '#d4421f',
    secondaryHex: '#F69E15',
    sourcePrefix: 'ads-shopee',
    marketplaceLogo: '/images/marketplaces/shopee.svg',
    seoTitle: 'Especialistas em Shopee | E-Koncepto',
    seoDescription: 'Aumente suas vendas na Shopee com método comprovado. Diagnóstico gratuito da sua operação.',
  },
  'mercado-livre': {
    slug: 'mercado-livre',
    themeClass: 'mercado-livre-theme',
    name: 'Mercado Livre',
    eyebrow: 'Especialistas em Mercado Livre',
    heroHeadline: 'Seus concorrentes no Mercado Livre faturam 3x mais. Não é sorte — é método.',
    heroSub: `O método que já moveu +R$ 241M em marketplaces, aplicado à sua operação do Mercado Livre em até 90 dias.`,
    primaryHex: '#FFE600',
    primaryHexHover: '#FFD700',
    secondaryHex: '#3483FA',
    sourcePrefix: 'ads-ml',
    marketplaceLogo: '/images/marketplaces/mercado-livre.svg',
    seoTitle: 'Consultoria Mercado Livre | E-Koncepto',
    seoDescription: 'Escale suas vendas no Mercado Livre com consultoria especializada. Diagnóstico gratuito.',
  },
  amazon: {
    slug: 'amazon',
    themeClass: 'amazon-theme',
    name: 'Amazon',
    eyebrow: 'Especialistas em Amazon',
    heroHeadline: 'Na Amazon, quem domina o Buy Box domina o mercado. Você está dominando?',
    heroSub: `O método que já moveu +R$ 241M em marketplaces, focado em fazer seus produtos liderarem na Amazon.`,
    primaryHex: '#FF9900',
    primaryHexHover: '#e68a00',
    secondaryHex: '#131921',
    sourcePrefix: 'ads-amazon',
    marketplaceLogo: '/images/marketplaces/amazon.svg',
    seoTitle: 'Especialistas em Amazon Brasil | E-Koncepto',
    seoDescription: 'Venda mais na Amazon com FBA, SEO e Buy Box. Diagnóstico gratuito da sua operação.',
  },
  diagnostico: {
    slug: 'diagnostico',
    themeClass: '', // verde padrão da marca
    name: 'E-Koncepto',
    eyebrow: 'Diagnóstico Gratuito',
    heroHeadline: 'Descubra onde você está perdendo dinheiro em marketplaces.',
    heroSub: `Em 2 minutos, receba um diagnóstico personalizado da sua operação — grátis e sem compromisso.`,
    primaryHex: '#0FA958',
    primaryHexHover: '#0d944d',
    secondaryHex: '#0FA958',
    sourcePrefix: 'ads-diagnostico',
    seoTitle: 'Diagnóstico Gratuito de Marketplaces | E-Koncepto',
    seoDescription: 'Descubra em 2 minutos onde você está perdendo dinheiro em marketplaces. 100% personalizado e grátis.',
  },
};
