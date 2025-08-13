import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from './Index';

const queryClient = new QueryClient();

describe('Index page', () => {
  it('should render the full page with all sections', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Index />
        </MemoryRouter>
      </QueryClientProvider>
    );

    // Check for the Hero section heading
    const heroHeading = screen.getByText(/Aceleramos suas vendas em marketplaces/i);
    expect(heroHeading).toBeInTheDocument();
  });
});
