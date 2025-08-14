import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

describe('Header', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the logo and desktop navigation', () => {
    render(<Header />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('nav-mercado')).toBeInTheDocument();
    expect(screen.getByTestId('nav-metodologia')).toBeInTheDocument();
  });

  it('should toggle the mobile menu on button click', () => {
    render(<Header />);
    const mobileMenuButton = screen.getByLabelText(/toggle menu/i);
    const mobileMenu = mobileMenuButton.parentElement?.nextElementSibling;

    expect(mobileMenu).toHaveClass('max-h-0');

    fireEvent.click(mobileMenuButton);
    expect(mobileMenu).toHaveClass('max-h-96');

    fireEvent.click(mobileMenuButton);
    expect(mobileMenu).toHaveClass('max-h-0');
  });
});
