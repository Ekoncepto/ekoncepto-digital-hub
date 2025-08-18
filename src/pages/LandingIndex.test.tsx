import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LandingIndexPage from './LandingIndex';

const queryClient = new QueryClient();

describe('LandingIndexPage', () => {
  it('should render the page with categories and links', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LandingIndexPage />
        </MemoryRouter>
      </QueryClientProvider>
    );

    // Check for a category title
    expect(screen.getByText('Guias para Iniciantes')).toBeInTheDocument();

    // Check for a specific landing page title within a card
    expect(screen.getByText('Guia definitivo: como vender no Mercado Livre e lucrar mais')).toBeInTheDocument();

    // Find the link using the new data-testid and check its href
    const link = screen.getByTestId('link-como-vender-no-mercado-livre');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/landing/como-vender-no-mercado-livre');
  });
});
