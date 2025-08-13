import { useEffect } from 'react';
import { siteMetadata, businessInfo, contactInfo, socialLinks } from '@/config/site';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  structuredData?: Record<string, unknown>;
}

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

const defaultStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: businessInfo.name,
  url: siteMetadata.siteUrl,
  logo: `${siteMetadata.siteUrl}${businessInfo.logo}`,
  sameAs: socialLinks.map(link => link.url),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: contactInfo.phone.replace(/\D/g, ''),
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
    email: contactInfo.email,
    areaServed: 'BR',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: businessInfo.name,
  image: `${siteMetadata.siteUrl}${businessInfo.logo}`,
  '@id': siteMetadata.siteUrl,
  url: siteMetadata.siteUrl,
  telephone: contactInfo.phone.replace(/\D/g, ''),
  email: contactInfo.email,
  priceRange: '$$',
  description: siteMetadata.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
    // Add more specific address details if available
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: socialLinks.map(link => link.url),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quais marketplaces vocês atendem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atendemos os principais marketplaces do Brasil, incluindo Mercado Livre, Amazon, Shopee, Magazine Luiza, Americanas e outros.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona o processo de consultoria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nosso processo começa com uma análise detalhada do seu negócio, seguida por um plano personalizado de ação. Trabalhamos lado a lado com você para implementar as estratégias e otimizar seus resultados.',
      },
    },
  ],
};

export const SEO = ({
  title,
  description,
  canonical = '/',
  image,
  structuredData = defaultStructuredData,
}: SEOProps) => {
  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });

    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    if (image) upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    });
    if (image) upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });

    if (canonical) {
      const canonicalUrl = new URL(canonical, siteMetadata.siteUrl).href;
      upsertLink('canonical', canonicalUrl);
    }

    // Structured Data
    const schemas = [
      { id: 'jsonld-organization', data: structuredData },
      { id: 'jsonld-localbusiness', data: localBusinessSchema },
      { id: 'jsonld-faq', data: faqSchema },
    ];

    schemas.forEach(({ id, data }) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      if (data) {
        script.text = JSON.stringify(data);
      }
    });
  }, [title, description, canonical, image, structuredData]);

  return null;
};

export default SEO;
