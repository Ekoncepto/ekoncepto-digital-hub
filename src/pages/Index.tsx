import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { ContactCTA } from '@/components/sections/ContactCTA';

const Index = () => {
  const title = 'E-Koncepto | Consultoria de E-commerce para Marketplaces';
  const description =
    'Consultoria prática para lançar e escalar suas vendas em marketplaces como Mercado Livre, Amazon e Shopee.';

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="/"
        image="/images/logo.png"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'E-Koncepto',
          url: '/',
          logo: '/images/logo.png',
          sameAs: ['https://ekoncepto.com/'],
          description: description,
        }}
      />
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="container flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center gap-2">
            <img src="/images/logo-icon.png" alt="Logo E-Koncepto" className="h-8 w-auto" />
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
            href="https://wa.me/5511971630441?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noreferrer"
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
