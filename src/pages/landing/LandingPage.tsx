import React from 'react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { siteMetadata, businessInfo } from '@/config/site';

interface LandingPageProps {
  children: React.ReactNode;
  title: string;
  description: string;
  slug: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ children, title, description, slug }) => {
  const pageTitle = `${title} | ${businessInfo.name}`;
  const canonicalUrl = `${siteMetadata.siteUrl}/landing/${slug}`;

  return (
    <>
      <SEO
        title={pageTitle}
        description={description}
        canonical={canonicalUrl}
        image={`${siteMetadata.siteUrl}${businessInfo.logo}`}
      />
      <Header />
      <main className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
