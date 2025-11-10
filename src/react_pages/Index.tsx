import React from 'react';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Footer } from '@/components/sections/Footer';
import { businessInfo } from '@/config/site';
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
import { Faq } from '@/components/sections/Faq';

const Index = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
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
      </main>

      <Footer />
    </>
  );
};

export default Index;
