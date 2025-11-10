import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { externalLinks } from '@/config/site';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  const isHomePage = typeof window !== 'undefined' ? window.location.pathname === '/' : false;

  // --- Effects for scroll detection and active section observation ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = [
      'hero',
      'mercado',
      'metodologia',
      'cases',
      'servicos',
      'processo',
      'about',
      'contato',
    ];
    observer.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' }
    );
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.current?.observe(element);
    });
    return () => observer.current?.disconnect();
  }, []);

  // --- Handlers ---
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // --- Data for Navigation Links ---
  const navLinks = [
    { href: '#mercado', label: 'Mercado', id: 'mercado' },
    { href: '#metodologia', label: 'Metodologia', id: 'metodologia' },
    { href: '#cases', label: 'Cases', id: 'cases' },
    { href: '#servicos', label: 'Serviços', id: 'servicos' },
    { href: '#processo', label: 'Processo', id: 'processo' },
    { href: '#about', label: 'Sobre', id: 'about' },
  ];

  // --- Render ---
  return (
    <header
      className={`dark-header sticky top-0 z-50 bg-background transition-shadow duration-300 ${isScrolled ? 'shadow-lg shadow-slate-500' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4 sm:gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" aria-label="E-koncepto Home" data-testid="logo">
              <picture>
                <img
                  src="/images/ekoncepto-logo branco.svg"
                  alt="E-koncepto Logo"
                  className="h-8 w-auto"
                  width="245"
                  height="32"
                  fetchpriority="high"
                />
              </picture>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex min-w-0 flex-grow items-center justify-end space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={isHomePage ? link.href : `/${link.href}`}
                data-testid={`nav-${link.id}`}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/landing"
              data-testid="nav-conteudo"
              className={`text-sm font-medium transition-colors duration-300 ${
                typeof window !== 'undefined' && window.location.pathname === '/landing'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Conteúdo
            </a>
            <a
              href={externalLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium transition-colors duration-300 text-muted-foreground hover:text-primary`}
            >
              Contato
            </a>
            <a
              href="https://app.ekoncepto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="sm"
                variant="hero"
                className="py-3 px-6 sm:px-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/20"
              >
                Meu Painel
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        data-testid="mobile-menu"
        className={`xl:hidden bg-background transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <div className="px-2 pt-2 pb-3">
            <a href="https://app.ekoncepto.com" target="_blank" rel="noopener noreferrer" className="block">
              <Button size="sm" variant="hero" className="w-full">
                Meu Painel
              </Button>
            </a>
          </div>
          {navLinks.map(link => (
            <a
              key={link.id}
              href={isHomePage ? link.href : `/${link.href}`}
              onClick={closeMobileMenu}
              className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300 ${
                activeSection === link.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-muted hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/landing"
            onClick={closeMobileMenu}
            className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300 ${
              typeof window !== 'undefined' && window.location.pathname === '/landing'
                ? 'bg-primary/10 text-primary'
                : 'text-foreground hover:bg-muted hover:text-primary'
            }`}
          >
            Conteúdo
          </a>
          <a
            href={externalLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className={`block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-colors duration-300`}
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  );
};
