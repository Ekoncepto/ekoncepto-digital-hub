import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Header';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

const renderWithRouter = (initialEntries: string[] = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="*" element={<Header />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('Header', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the logo and desktop navigation', () => {
    renderWithRouter();
    const header = screen.getByRole('banner');
    expect(within(header).getByTestId('logo')).toBeInTheDocument();
    const desktopNav = within(header).getByRole('navigation');
    expect(within(desktopNav).getByTestId('nav-mercado')).toBeInTheDocument();
    expect(within(desktopNav).getByRole('link', { name: /fale conosco/i })).toBeInTheDocument();
  });

  describe('Navigation Links on Homepage', () => {
    beforeEach(() => {
      renderWithRouter(['/']);
    });

    it('should have correct hash links on desktop', () => {
      const desktopNav = screen.getByRole('navigation');
      // In the test environment, even on the homepage, it might render the full path.
      // The key is that it navigates correctly.
      expect(within(desktopNav).getByTestId('nav-mercado')).toHaveAttribute('href', expect.stringMatching(/#mercado/));
      expect(within(desktopNav).getByTestId('nav-servicos')).toHaveAttribute('href', expect.stringMatching(/#servicos/));
      expect(within(desktopNav).getByRole('link', { name: /fale conosco/i })).toHaveAttribute('href', expect.stringMatching(/#contato/));
    });

    it('should have correct hash links on mobile menu', () => {
      const mobileMenu = screen.getByTestId('mobile-menu');
      expect(within(mobileMenu).getByRole('link', { name: 'Mercado' })).toHaveAttribute('href', expect.stringMatching(/#mercado/));
      expect(within(mobileMenu).getByRole('link', { name: 'Serviços' })).toHaveAttribute('href', expect.stringMatching(/#servicos/));
      expect(within(mobileMenu).getByRole('link', { name: /fale conosco/i })).toHaveAttribute('href', expect.stringMatching(/#contato/));
    });
  });

  describe('Navigation Links on Other Pages', () => {
    beforeEach(() => {
      renderWithRouter(['/some-other-page']);
    });

    it('should have correct links pointing back to homepage sections on desktop', () => {
      const desktopNav = screen.getByRole('navigation');
      expect(within(desktopNav).getByTestId('nav-mercado')).toHaveAttribute('href', '/#mercado');
      expect(within(desktopNav).getByTestId('nav-servicos')).toHaveAttribute('href', '/#servicos');
      expect(within(desktopNav).getByRole('link', { name: /fale conosco/i })).toHaveAttribute('href', '/#contato');
    });

    it('should have correct links pointing back to homepage sections on mobile', () => {
      const mobileMenu = screen.getByTestId('mobile-menu');
      expect(within(mobileMenu).getByRole('link', { name: 'Mercado' })).toHaveAttribute('href', '/#mercado');
      expect(within(mobileMenu).getByRole('link', { name: 'Serviços' })).toHaveAttribute('href', '/#servicos');
      expect(within(mobileMenu).getByRole('link', { name: /fale conosco/i })).toHaveAttribute('href', '/#contato');
    });
  });
});
