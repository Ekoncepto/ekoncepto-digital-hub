import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Correct order of sections as they appear on the page
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
      {
        threshold: 0.5,
        rootMargin: '-100px 0px -50% 0px',
      }
    );

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: '#mercado', label: 'O Mercado', id: 'mercado' },
    { href: '#metodologia', label: 'Metodologia', id: 'metodologia' },
    { href: '#cases', label: 'Cases de Sucesso', id: 'cases' },
    { href: '#servicos', label: 'Serviços', id: 'servicos' },
    { href: '#processo', label: 'Nosso Processo', id: 'processo' },
    { href: '#about', label: 'Sobre Nós', id: 'about' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-md' : ''}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center gap-8">
          <a href="#" data-testid="logo" className="flex-shrink-0">
            <img src="/images/ekoncepto-logo.svg" alt="E-koncepto Logo" className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-end flex-grow space-x-4 lg:space-x-6">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={handleNavClick}
                className={`${activeSection === link.id ? 'text-brand font-semibold' : 'text-gray-600'} hover:text-brand transition-colors duration-300 whitespace-nowrap`}
                data-testid={`nav-${link.id}`}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-brand hover:bg-brand/90 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <a href="#contato" onClick={handleNavClick}>
                Fale com um Especialista
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-4 transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="flex flex-col space-y-2 py-4">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={handleNavClick}
                className={`block py-3 px-6 ${activeSection === link.id ? 'bg-brand/10 text-brand font-semibold' : 'text-gray-600 hover:bg-gray-50'} rounded-lg transition-colors duration-300`}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full font-bold py-3 rounded-lg transition-all duration-300 bg-brand hover:bg-brand/90"
            >
              <a href="#contato" onClick={handleNavClick}>
                Fale com um Especialista
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
