import React, { Suspense } from 'react';
import SEO from '@/components/SEO';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Footer } from '@/components/sections/Footer';
import { businessInfo, siteMetadata, socialLinks } from '@/config/site';
import PageLoader from '@/components/common/PageLoader';
import ErrorBoundary from '@/components/common/ErrorBoundary';

// Import sections directly
import MarketOverview from '@/components/sections/MarketOverview';
import { Methodology } from '@/components/sections/Methodology';
import SuccessCases from '@/components/sections/SuccessCases';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { ContactCTA } from '@/components/sections/ContactCTA';

const Index = () => {
  const title = `${businessInfo.name} | ${businessInfo.headline}`;
  const description = businessInfo.tagline;

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="/"
        image={`${siteMetadata.siteUrl}${businessInfo.logo}`}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: businessInfo.name,
          url: siteMetadata.siteUrl,
          logo: `${siteMetadata.siteUrl}${businessInfo.logo}`,
          sameAs: socialLinks?.map(link => link.url) || [],
          description: businessInfo.description,
        }}
      />
      <Header />

      <main>
        <Hero />
        <Suspense fallback={<PageLoader />}>
          <ErrorBoundary>
            <MarketOverview />
          </ErrorBoundary>
          <ErrorBoundary>
            <Methodology />
          </ErrorBoundary>
          <ErrorBoundary>
            <SuccessCases />
          </ErrorBoundary>
          <ErrorBoundary>
            <Services />
          </ErrorBoundary>
          <ErrorBoundary>
            <Process />
          </ErrorBoundary>
          <ErrorBoundary>
            <About />
          </ErrorBoundary>
          <ErrorBoundary>
            <ContactCTA />
          </ErrorBoundary>
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default Index;
