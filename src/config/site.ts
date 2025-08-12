/**
 * Site-wide configuration and metadata
 * This file contains all the external links, contact information, and other site-wide settings.
 */

type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

type ContactInfo = {
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  workingHours: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

type BusinessInfo = {
  name: string;
  description: string;
  headline: string;
  tagline: string;
  about: string;
  logo: string;
  favicon: string;
  processSteps?: ProcessStep[];
};

// Business Information
export const businessInfo: BusinessInfo = {
  name: 'E-Koncepto',
  description: 'Consultoria de E-commerce para Marketplaces',
  headline: 'Consultoria de E-commerce focada em Marketplaces',
  tagline:
    'Lançamos e escalamos suas vendas em plataformas como Mercado Livre, Amazon e Shopee com uma consultoria mão na massa orientada a resultados.',
  about:
    'Somos uma consultoria especializada em marketplaces. Atuamos lado a lado com seu time, do lançamento à escala, com foco em performance, informações acionáveis e execução constante. Em média, nossos clientes alcançam crescimento acima de 70% nos primeiros 6 meses.',
  logo: '/images/optimized/logo.webp', // Use the optimized WebP version for meta tags
  favicon: '/favicon.ico',
  processSteps: [
    {
      title: 'Discovery',
      description: 'Analisamos sua operação e oportunidades.',
    },
    {
      title: 'Setup',
      description: 'Estruturamos contas, catálogos e integrações.',
    },
    {
      title: 'Lançamento',
      description: 'Publicação e primeiros resultados.',
    },
    {
      title: 'Otimização',
      description: 'Ajustes em anúncios, preços e logística.',
    },
    {
      title: 'Performance',
      description: 'Campanhas e alavancas de tráfego.',
    },
    {
      title: 'Escala',
      description: '+ canais, + sortimento e governança.',
    },
  ],
};

// Contact Information
export const contactInfo: ContactInfo = {
  phone: '+55 (11) 97163-0441', // Replace with actual phone number
  email: 'contato@ekoncepto.com.br',
  whatsapp: '5511971630441',
  address: 'São Paulo, SP - Brasil',
  workingHours: 'Segunda a Sexta, 9h às 18h',
};

// Social Media Links
export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://br.linkedin.com/company/ekoncepto',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ekoncepto/',
    icon: 'instagram',
  },
];

// External Links
export const externalLinks = {
  whatsapp: `https://wa.me/5511971630441?text=Olá! Gostaria de mais informações sobre a consultoria.`, // Replace with actual WhatsApp number
  //googleMaps: 'https://goo.gl/maps/example',
  privacyPolicy: '/politica-de-privacidade',
  termsOfService: '/termos-de-uso',
  //blog: 'https://blog.ekoncepto.com.br',
};

// Analytics and Tracking
export const analytics = {
  //TODO
  googleAnalyticsId: 'G-XXXXXXXXXX', // Replace with actual GA4 ID
  googleTagManagerId: 'GTM-XXXXXX', // If using GTM
  facebookPixelId: 'XXXXXXXXXXXXXXX', // If using Facebook Pixel
};

// Site Metadata for SEO
export const siteMetadata = {
  title: 'E-Koncepto | Consultoria de E-commerce para Marketplaces',
  description:
    'Aumente suas vendas nos marketplaces com consultoria prática: lançamento de contas, otimização de anúncios e escalada de resultados.',
  siteUrl: 'https://ekoncepto.com',
  author: 'E-Koncepto',
  locale: 'pt-BR',
  keywords: [
    'ecommerce',
    'marketplace',
    'consultoria',
    'vendas',
    'mercadolivre',
    'amazon',
    'shopee',
    'otimização',
    'anúncios',
  ],
};

// Services/Products (if applicable)
export const services = [
  {
    id: 'consultoria',
    name: 'Consultoria Personalizada',
    description: 'Estratégias personalizadas para alavancar suas vendas nos marketplaces.',
  },
  {
    id: 'treinamento',
    name: 'Treinamentos',
    description: 'Capacitação para sua equipe dominar as melhores práticas de vendas online.',
  },
  {
    id: 'implementacao',
    name: 'Implementação Completa',
    description: 'Da abertura da conta à otimização de anúncios, cuidamos de tudo para você.',
  },
];
