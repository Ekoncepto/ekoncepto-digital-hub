import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

describe('Hero section', () => {
  it('should render the component without errors', () => {
    render(<Hero />);
    const heading = screen.getByText(/Aceleramos suas vendas em marketplaces/i);
    expect(heading).toBeInTheDocument();
  });
});
