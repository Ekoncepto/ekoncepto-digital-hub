import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import MarketOverview from '@/components/sections/MarketOverview';
import { Methodology } from '@/components/sections/Methodology';
import SuccessCases from '@/components/sections/SuccessCases';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Footer } from '@/components/sections/Footer';
import { businessInfo, contactInfo, siteMetadata, socialLinks } from '@/config/site';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

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
        <MarketOverview />
        <Methodology />
        <SuccessCases />
        <Services />
        <Process />
        <About />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
};

export default Index;
