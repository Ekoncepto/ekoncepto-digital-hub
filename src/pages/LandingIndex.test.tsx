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

    // Check for a disabled link
    const comingSoonElement = screen.getByTestId('coming-soon-como-vender-no-mercado-livre');
    expect(comingSoonElement).toBeInTheDocument();
    expect(comingSoonElement).toHaveTextContent('Em breve');
    expect(screen.queryByTestId('link-como-vender-no-mercado-livre')).not.toBeInTheDocument();

    // Check for an active link to ensure they are still rendering
    const activeLink = screen.getByTestId('link-vender-no-marketplace');
    expect(activeLink).toBeInTheDocument();
    expect(activeLink).toHaveAttribute('href', '/landing/vender-no-marketplace');
  });
});
