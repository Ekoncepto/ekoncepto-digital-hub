import React, { Suspense, lazy } from 'react';
import { useInView } from 'react-intersection-observer';
import SEO from '@/components/SEO';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Footer } from '@/components/sections/Footer';
import { businessInfo, siteMetadata, socialLinks } from '@/config/site';
import PageLoader from '@/components/common/PageLoader';

// Lazy-loaded sections
const MarketOverview = lazy(() => import('@/components/sections/MarketOverview'));
const Methodology = lazy(() => import('@/components/sections/Methodology'));
const SuccessCases = lazy(() => import('@/components/sections/SuccessCases'));
const Services = lazy(() => import('@/components/sections/Services'));
const Process = lazy(() => import('@/components/sections/Process'));
const About = lazy(() => import('@/components/sections/About'));
const ContactCTA = lazy(() => import('@/components/sections/ContactCTA'));

const LazySection = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div ref={ref} style={{ minHeight: '100vh' }}>
      {inView ? <Suspense fallback={<PageLoader />}>{children}</Suspense> : <PageLoader />}
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
        <LazySection>
          <MarketOverview />
        </LazySection>
        <LazySection>
          <Methodology />
        </LazySection>
        <LazySection>
          <SuccessCases />
        </LazySection>
        <LazySection>
          <Services />
        </LazySection>
        <LazySection>
          <Process />
        </LazySection>
        <LazySection>
          <About />
        </LazySection>
        <LazySection>
          <ContactCTA />
        </LazySection>
      </main>

      <Footer />
    </>
  );
};

export default Index;
