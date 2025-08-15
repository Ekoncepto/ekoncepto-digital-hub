import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './Footer';

describe('Footer section', () => {
  it('should render the component without errors', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const heading = screen.getByText(/Todos os direitos reservados/i);
    expect(heading).toBeInTheDocument();
  });
});
