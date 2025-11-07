import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Footer';
import { contactInfo } from '@/config/site';

const OtherPage = () => <div>Other Page</div>;

const renderWithRouter = (initialEntries: string[] = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="*" element={<Footer />} />
        <Route path="/other" element={<OtherPage />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('Footer', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the component sections and copyright', () => {
    renderWithRouter();
    expect(screen.getByText('Navegação')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
    expect(screen.getByText(/Todos os direitos reservados/i)).toBeInTheDocument();
  });

  it('should render social media links correctly', () => {
    renderWithRouter();
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/company/ekoncepto');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
  });

  describe('Navigation Links on Homepage', () => {
    beforeEach(() => {
      renderWithRouter(['/']);
    });

    it('should have correct hash links', () => {
      expect(screen.getByRole('link', { name: /^Início$/i })).toHaveAttribute('href', '/');
      expect(screen.getByRole('link', { name: /^Mercado$/i })).toHaveAttribute('href', expect.stringMatching(/#mercado/));
      expect(screen.getByRole('link', { name: /^Cases$/i })).toHaveAttribute('href', expect.stringMatching(/#cases/));
    });

    it('should always link to /conteudos correctly', () => {
      expect(screen.getByRole('link', { name: /conteúdos/i })).toHaveAttribute('href', '/conteudos');
    });

    it('should have a Meu Painel link', () => {
      expect(screen.getByRole('link', { name: /meu painel/i })).toBeInTheDocument();
    });
  });

  describe('Navigation Links on Other Pages', () => {
    beforeEach(() => {
      renderWithRouter(['/some-other-page']);
    });

    it('should have correct links pointing back to homepage sections', () => {
      expect(screen.getByRole('link', { name: /^Início$/i })).toHaveAttribute('href', '/');
      expect(screen.getByRole('link', { name: /^Mercado$/i })).toHaveAttribute('href', '/#mercado');
      expect(screen.getByRole('link', { name: /^Cases$/i })).toHaveAttribute('href', '/#cases');
    });

    it('should always link to /conteudos correctly', () => {
      expect(screen.getByRole('link', { name: /conteúdos/i })).toHaveAttribute('href', '/conteudos');
    });
  });

  describe('Contact Info', () => {
    beforeEach(() => {
      renderWithRouter();
    });

    it('should render the email with a mailto link', () => {
      const emailLink = screen.getByText(contactInfo.email);
      expect(emailLink).toBeInTheDocument();
      expect(emailLink).toHaveAttribute('href', `mailto:${contactInfo.email}`);
    });

    it('should render the phone with a tel link', () => {
      const phoneLink = screen.getByText(contactInfo.phone);
      expect(phoneLink).toBeInTheDocument();
      expect(phoneLink).toHaveAttribute('href', `tel:+${contactInfo.whatsapp}`);
    });

    it('should render the address with a Google Maps link', () => {
      const addressLink = screen.getByText(contactInfo.address);
      expect(addressLink).toBeInTheDocument();
      expect(addressLink).toHaveAttribute(
        'href',
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          contactInfo.address
        )}`
      );
    });
  });
});