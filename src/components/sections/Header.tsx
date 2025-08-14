import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { businessInfo, contactInfo } from '@/config/site';

// Smooth scroll to element with offset for fixed header
const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 100; // Adjust based on your header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  // Set up intersection observer to detect active section
  useEffect(() => {
    const sections = ['hero', 'mercado', 'metodologia', 'cases', 'processo', 'contato'];

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

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.current?.observe(element);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollTo(sectionId);
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

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-md' : ''}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" data-testid="logo">
            <img src="/images/ekoncepto-logo.svg" alt="E-koncepto Logo" className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#mercado"
              onClick={e => handleNavClick(e, 'mercado')}
              className={`${activeSection === 'mercado' ? 'text-brand font-semibold' : 'text-gray-600'} hover:text-brand transition-colors duration-300`}
              data-testid="nav-mercado"
            >
              O Mercado
            </a>
            <a
              href="#metodologia"
              onClick={e => handleNavClick(e, 'metodologia')}
              className={`${activeSection === 'metodologia' ? 'text-brand font-semibold' : 'text-gray-600'} hover:text-brand transition-colors duration-300`}
              data-testid="nav-metodologia"
            >
              Metodologia
            </a>
            <a
              href="#cases"
              onClick={e => handleNavClick(e, 'cases')}
              className={`${activeSection === 'cases' ? 'text-brand font-semibold' : 'text-gray-600'} hover:text-brand transition-colors duration-300`}
            >
              Cases de Sucesso
            </a>
            <a
              href="#processo"
              onClick={e => handleNavClick(e, 'processo')}
              className={`${activeSection === 'processo' ? 'text-brand font-semibold' : 'text-gray-600'} hover:text-brand transition-colors duration-300`}
            >
              Nosso Processo
            </a>
            <Button
              asChild
              className="bg-brand hover:bg-brand/90 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <a
                href="#contato"
                onClick={e => handleNavClick(e, 'contato')}
                className={`${activeSection === 'contato' ? 'bg-brand/90' : ''}`}
              >
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
            <a
              href="#mercado"
              className={`block py-3 px-6 ${activeSection === 'mercado' ? 'bg-brand/10 text-brand font-semibold' : 'text-gray-600 hover:bg-gray-50'} rounded-lg transition-colors duration-300`}
              onClick={e => handleNavClick(e, 'mercado')}
            >
              O Mercado
            </a>
            <a
              href="#metodologia"
              className={`block py-3 px-6 ${activeSection === 'metodologia' ? 'bg-brand/10 text-brand font-semibold' : 'text-gray-600 hover:bg-gray-50'} rounded-lg transition-colors duration-300`}
              onClick={e => handleNavClick(e, 'metodologia')}
            >
              Metodologia
            </a>
            <a
              href="#cases"
              className={`block py-3 px-6 ${activeSection === 'cases' ? 'bg-brand/10 text-brand font-semibold' : 'text-gray-600 hover:bg-gray-50'} rounded-lg transition-colors duration-300`}
              onClick={e => handleNavClick(e, 'cases')}
            >
              Cases de Sucesso
            </a>
            <a
              href="#processo"
              className={`block py-3 px-6 ${activeSection === 'processo' ? 'bg-brand/10 text-brand font-semibold' : 'text-gray-600 hover:bg-gray-50'} rounded-lg transition-colors duration-300`}
              onClick={e => handleNavClick(e, 'processo')}
            >
              Nosso Processo
            </a>
            <Button
              asChild
              className={`w-full font-bold py-3 rounded-lg transition-all duration-300 ${activeSection === 'contato' ? 'bg-brand/90' : 'bg-brand hover:bg-brand/90'}`}
            >
              <a href="#contato" onClick={e => handleNavClick(e, 'contato')}>
                Fale com um Especialista
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
