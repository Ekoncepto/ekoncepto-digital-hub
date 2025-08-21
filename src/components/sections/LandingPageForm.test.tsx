import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LandingPageForm } from './LandingPageForm';
import userEvent from '@testing-library/user-event';

const queryClient = new QueryClient();

// Mock the useNavigate hook
const mockedNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

describe('LandingPageForm', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      } as Response)
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should submit the form and navigate to the default /obrigado page', async () => {
    const user = userEvent.setup();
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LandingPageForm />
        </MemoryRouter>
      </QueryClientProvider>
    );

    await user.type(screen.getByLabelText(/nome/i), 'Test User');
    await user.type(screen.getByLabelText(/empresa/i), 'Test Company');
    await user.click(screen.getByLabelText('Sim'));

    // For the Select component, use userEvent to properly simulate interaction
    await user.click(screen.getByRole('combobox'));
    const option = await screen.findByRole('option', { name: 'R$10.001 - R$50.000' });
    await user.click(option);

    await user.click(screen.getByRole('button', { name: /enviar/i }));

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith('/obrigado');
    });
  });

  it('should submit the form and navigate to a custom redirectPath', async () => {
    const user = userEvent.setup();
    const customPath = '/downloads/custom-path';
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LandingPageForm redirectPath={customPath} />
        </MemoryRouter>
      </QueryClientProvider>
    );

    await user.type(screen.getByLabelText(/nome/i), 'Test User');
    await user.type(screen.getByLabelText(/empresa/i), 'Test Company');
    await user.click(screen.getByLabelText('Não'));

    await user.click(screen.getByRole('combobox'));
    const option = await screen.findByRole('option', { name: 'Acima de R$500.000' });
    await user.click(option);

    await user.click(screen.getByRole('button', { name: /enviar/i }));

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith(customPath);
    });
  });
});
