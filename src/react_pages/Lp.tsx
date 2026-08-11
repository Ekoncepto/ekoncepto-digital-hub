import React from 'react';
import { HeaderLp } from '@/components/sections/lp/HeaderLp';
import { HeroLp } from '@/components/sections/lp/HeroLp';
import { Footer } from '@/components/sections/Footer';
import ErrorBoundary from '@/components/common/ErrorBoundary';

// Reuse unchanged sections from the home — only the four conversion-critical
// sections (Header, Hero, SuccessCases, ContactCTA) are swapped for their -lp variants.
import MarketOverview from '@/components/sections/MarketOverview';
import { Methodology } from '@/components/sections/Methodology';
import SuccessCasesLp from '@/components/sections/lp/SuccessCasesLp';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { ContactCTALp } from '@/components/sections/lp/ContactCTALp';
import { Faq } from '@/components/sections/Faq';

const Lp = () => {
  return (
    <>
      <HeaderLp />

      <main>
        <HeroLp />
        <ErrorBoundary>
          <MarketOverview />
        </ErrorBoundary>
        <ErrorBoundary>
          <Methodology />
        </ErrorBoundary>
        <ErrorBoundary>
          <SuccessCasesLp />
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
          <ContactCTALp />
        </ErrorBoundary>
      </main>

      <Footer />
    </>
  );
};

export default Lp;
