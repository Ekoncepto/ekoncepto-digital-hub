import { useEffect } from 'react';
import {
  siteMetadata,
  businessInfo,
  contactInfo,
  socialLinks,
  seoConfig,
  services,
} from '@/config/site';
import { faqItems } from '@/config/faq';
import { Breadcrumb, createBreadcrumbSchema } from '../lib/breadcrumb';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  noIndex?: boolean;
  articleData?: {
    author: string;
    publisher: string;
    datePublished: string;
    dateModified: string;
  };
  breadcrumbs?: Breadcrumb[];
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

const onlineBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'OnlineBusiness',
  '@id': siteMetadata.siteUrl,
  name: businessInfo.name,
  url: siteMetadata.siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteMetadata.siteUrl}${businessInfo.square_logo}`,
    width: '50',
    height: '50',
  },
  image: `${siteMetadata.siteUrl}${businessInfo.logo}`,
  description: siteMetadata.description,
  sameAs: socialLinks.map(link => link.url),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: contactInfo.phone.replace(/\D/g, ''),
    contactType: seoConfig.contactType,
    availableLanguage: seoConfig.availableLanguage,
    email: contactInfo.email,
    areaServed: seoConfig.areaServed,
  },
  openingHoursSpecification: seoConfig.openingHours.map(spec => ({
    '@type': 'OpeningHoursSpecification',
    ...spec,
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Consultoria',
    itemListElement: services.map(service => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
      },
    })),
  },
  ...(businessInfo.vatId && { vatID: businessInfo.vatId }),
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
    '@id': siteMetadata.siteUrl,
  },
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
  noIndex,
  breadcrumbs,
  articleData,
}: SEOProps) => {
  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });

    if (noIndex) {
      upsertMeta('meta[name="robots"]', { name: 'robots', content: 'noindex,nofollow' });
    } else {
      const robotsMeta = document.head.querySelector('meta[name="robots"]');
      if (robotsMeta) document.head.removeChild(robotsMeta);
    }

    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    if (image) upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    if (article) {
      upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'article' });
      if (author)
        upsertMeta('meta[property="article:author"]', {
          property: 'article:author',
          content: author,
        });
      if (publishedTime)
        upsertMeta('meta[property="article:published_time"]', {
          property: 'article:published_time',
          content: publishedTime,
        });
    }

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

    const breadcrumbSchema = createBreadcrumbSchema(breadcrumbs || []);

    const articleSchema = article
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description: description,
          image: image,
          author: {
            '@type': 'Organization',
            name: author,
            url: siteMetadata.siteUrl,
          },
          publisher: {
            '@type': 'Organization',
            '@id': siteMetadata.siteUrl,
          },
          datePublished: publishedTime,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': new URL(canonical, siteMetadata.siteUrl).href,
          },
        }
      : null;

    const schemas = [
      onlineBusinessSchema,
      websiteSchema,
      faqSchema,
      breadcrumbSchema,
      articleSchema,
    ].filter(Boolean);

    if (articleData) {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image || `${siteMetadata.siteUrl}${businessInfo.logo}`,
        author: {
          '@type': 'Organization',
          name: articleData.author,
          url: siteMetadata.siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: articleData.publisher,
          logo: {
            '@type': 'ImageObject',
            url: `${siteMetadata.siteUrl}${businessInfo.square_logo}`,
          },
        },
        datePublished: articleData.datePublished,
        dateModified: articleData.dateModified,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonical ? new URL(canonical, siteMetadata.siteUrl).href : siteMetadata.siteUrl,
        },
      };
      schemas.push(articleSchema);
    }

    let script = document.getElementById('jsonld-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'jsonld-structured-data';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(schemas, null, 2);
  }, [
    title,
    description,
    canonical,
    image,
    noIndex,
    breadcrumbs,
    articleData
  ]);


  return null;
};

export default SEO;
