import React, { Suspense } from 'react';
import SEO from '@/components/SEO';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Footer } from '@/components/sections/Footer';
import { businessInfo, siteMetadata, socialLinks } from '@/config/site';
import PageLoader from '@/components/common/PageLoader';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { lazy } from 'react';

// Lazy load sections for better performance
const MarketOverview = React.lazy(() => import('@/components/sections/MarketOverview'));
const Methodology = React.lazy(() =>
  import('@/components/sections/Methodology').then(module => ({ default: module.Methodology }))
);
const SuccessCases = React.lazy(() => import('@/components/sections/SuccessCases'));
const Services = React.lazy(() =>
  import('@/components/sections/Services').then(module => ({ default: module.Services }))
);
const Process = React.lazy(() =>
  import('@/components/sections/Process').then(module => ({ default: module.Process }))
);
const About = React.lazy(() =>
  import('@/components/sections/About').then(module => ({ default: module.About }))
);
const ContactCTA = React.lazy(() =>
  import('@/components/sections/ContactCTA').then(module => ({ default: module.ContactCTA }))
);
const Faq = React.lazy(() =>
  import('@/components/sections/Faq').then(module => ({ default: module.Faq }))
);

const Index = () => {
  const title = `${businessInfo.name} | ${businessInfo.headline}`;
  const description = businessInfo.tagline;

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="/"
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
            <Faq />
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
