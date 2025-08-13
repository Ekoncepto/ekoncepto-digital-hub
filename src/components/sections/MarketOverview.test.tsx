import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MarketOverview from './MarketOverview';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

describe('MarketOverview', () => {
  it('should render the component without errors', () => {
    render(<MarketOverview />);
    const heading = screen.getByText(/Um mercado digital em/i);
    expect(heading).toBeInTheDocument();
  });
});
