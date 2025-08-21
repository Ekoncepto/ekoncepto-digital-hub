import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LandingPageForm } from './LandingPageForm';

const queryClient = new QueryClient();

describe('LandingPageForm', () => {
  it('should have the correct action attribute for the default redirect path', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LandingPageForm />
        </MemoryRouter>
      </QueryClientProvider>
    );

    // The form is not a landmark role, so we get it by its name, which is "landingpage"
    // We can find it by looking for a form element.
    const form = screen.getByRole('form');
    expect(form).toHaveAttribute('action', '/obrigado');
  });

  it('should have the correct action attribute for a custom redirect path', () => {
    const customPath = '/downloads/custom-path';
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LandingPageForm redirectPath={customPath} />
        </MemoryRouter>
      </QueryClientProvider>
    );

    const form = screen.getByRole('form');
    expect(form).toHaveAttribute('action', customPath);
  });
});
