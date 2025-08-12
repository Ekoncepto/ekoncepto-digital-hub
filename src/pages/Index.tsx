import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { ContactCTA } from '@/components/sections/ContactCTA';
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
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="container flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center gap-2">
            <img
              src="/images/logo.svg" // Use the original, un-resized image
              alt={`${businessInfo.name} - ${businessInfo.headline}`}
              className="h-10 w-auto md:h-12"
              width={48}
              height={48}
              loading="eager"
              decoding="async"
              sizes="48px"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicos" className="hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#processo" className="hover:text-primary transition-colors">
              Processo
            </a>
            <a href="#sobre" className="hover:text-primary transition-colors">
              Sobre
            </a>
          </nav>
          <a
            href={`${contactInfo.whatsapp}?text=Ol%C3%A1%2C+vim+pelo+site+${encodeURIComponent(siteMetadata.siteUrl)}+e+gostaria+de+mais+informa%C3%A7%C3%B5es.`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="hidden md:inline-block"
          >
            <Button variant="hero" size="sm">
              Fale no WhatsApp
            </Button>
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <ContactCTA />
      </main>

      <footer className="border-t">
        <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} E-Koncepto. Todos os direitos reservados.</p>
          <nav className="flex gap-4">
            <a href="#servicos" className="hover:text-primary">
              Serviços
            </a>
            <a href="#processo" className="hover:text-primary">
              Processo
            </a>
            <a href="#contato" className="hover:text-primary">
              Contato
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Index;
