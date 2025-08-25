import { useEffect } from 'react';
import { siteMetadata, businessInfo, contactInfo, socialLinks } from '@/config/site';
import { faqItems } from '@/config/faq';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  structuredData?: Record<string, unknown>;
  noIndex?: boolean;
}

function upsertMeta(selector:string, attrs: Record<string, string>) {
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

const organizationId = `${siteMetadata.siteUrl}/#organization`;

const defaultStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: businessInfo.name,
  url: siteMetadata.siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteMetadata.siteUrl}${businessInfo.square_logo}`,
    width: '50',
    height: '50',
  },
  sameAs: socialLinks.map(link => link.url),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: contactInfo.phone.replace(/\D/g, ''),
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
    email: contactInfo.email,
    areaServed: 'BR',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Consultoria',
    itemListElement: [
      'Consultoria de E-commerce',
      'Otimização de Anúncios em Marketplaces',
      'Gestão de Mídia Paga (Product Ads)',
      'Precificação e Monitoramento de Anúncios',
      'Gestão da Operação em Marketplaces',
      'Análise de Resultados e Faturamento',
    ].map(name => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name,
      },
    })),
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteMetadata.siteUrl,
  name: businessInfo.name,
  image: `${siteMetadata.siteUrl}${businessInfo.logo}`,
  url: siteMetadata.siteUrl,
  telephone: contactInfo.phone.replace(/\D/g, ''),
  email: contactInfo.email,
  priceRange: '$$$',
  description: siteMetadata.description,
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: socialLinks.map(link => link.url),
  parentOrganization: {
    '@type': 'Organization',
    '@id': organizationId,
  }
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: siteMetadata.siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteMetadata.siteUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    '@id': organizationId,
  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};


export const SEO = ({
  title,
  description,
  canonical = '/',
  image,
  structuredData = defaultStructuredData,
  noIndex,
}: SEOProps) => {
  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });

    // Handle noIndex
    if (noIndex) {
      upsertMeta('meta[name="robots"]', { name: 'robots', content: 'noindex,nofollow' });
    } else {
      // Ensure the meta tag is removed if noIndex is false
      const robotsMeta = document.head.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        document.head.removeChild(robotsMeta);
      }
    }

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
      structuredData,
      localBusinessSchema,
      websiteSchema,
      faqSchema,
    ].filter(Boolean);

    let script = document.getElementById('jsonld-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'jsonld-structured-data';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(schemas, null, 2);

  }, [title, description, canonical, image, structuredData]);

  return null;
};

export default SEO;
