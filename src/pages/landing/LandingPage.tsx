import React from 'react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { siteMetadata, businessInfo } from '@/config/site';
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs';

interface LandingPageProps {
  children: React.ReactNode;
  title: string;
  description: string;
  slug: string;
  articleData?: {
    author: string;
    publisher: string;
    datePublished: string;
    dateModified: string;
  };
}

const LandingPage: React.FC<LandingPageProps> = ({ children, title, description, slug, articleData }) => {
  const pageTitle = `${title} | ${businessInfo.name}`;
  const canonicalUrl = `${siteMetadata.siteUrl}/landing/${slug}`;
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      <SEO
        title={pageTitle}
        description={description}
        canonical={canonicalUrl}
        articleData={articleData}
        breadcrumbs={breadcrumbs}
        publishedTime={publishedTime || new Date().toISOString()}
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
