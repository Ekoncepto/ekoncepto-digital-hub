import React, { Suspense, lazy } from 'react';
import { useInView } from 'react-intersection-observer';
import SEO from '@/components/SEO';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Footer } from '@/components/sections/Footer';
import { businessInfo, siteMetadata, socialLinks } from '@/config/site';
import PageLoader from '@/components/common/PageLoader';
import ErrorBoundary from '@/components/common/ErrorBoundary';

// Lazy-loaded sections
const MarketOverview = lazy(() => import('@/components/sections/MarketOverview'));
const Methodology = lazy(() =>
  import('@/components/sections/Methodology').then(module => ({ default: module.Methodology }))
);
const SuccessCases = lazy(() => import('@/components/sections/SuccessCases'));
const Services = lazy(() =>
  import('@/components/sections/Services').then(module => ({ default: module.Services }))
);
const Process = lazy(() =>
  import('@/components/sections/Process').then(module => ({ default: module.Process }))
);
const About = lazy(() =>
  import('@/components/sections/About').then(module => ({ default: module.About }))
);
const ContactCTA = lazy(() =>
  import('@/components/sections/ContactCTA').then(module => ({ default: module.ContactCTA }))
);

const LazySection = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div ref={ref} style={{ minHeight: '50vh' }}>
      {inView ? <Suspense fallback={<PageLoader />}>{children}</Suspense> : null}
    </div>
  );
};

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
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <ErrorBoundary>
          <LazySection>
            <MarketOverview />
          </LazySection>
        </ErrorBoundary>
        <ErrorBoundary>
          <LazySection>
            <Methodology />
          </LazySection>
        </ErrorBoundary>
        <ErrorBoundary>
          <LazySection>
            <SuccessCases />
          </LazySection>
        </ErrorBoundary>
        <ErrorBoundary>
          <LazySection>
            <Services />
          </LazySection>
        </ErrorBoundary>
        <ErrorBoundary>
          <LazySection>
            <Process />
          </LazySection>
        </ErrorBoundary>
        <ErrorBoundary>
          <LazySection>
            <ContactCTA />
          </LazySection>
        </ErrorBoundary>
      </main>

      <Footer />
    </>
  );
};

export default Index;
