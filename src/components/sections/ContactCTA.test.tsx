import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactCTA } from './ContactCTA';

describe('ContactCTA section', () => {
  it('should render the component without errors', () => {
    render(<ContactCTA />);
    const heading = screen.getByText(/Pronto para vender mais/i);
    expect(heading).toBeInTheDocument();
  });
});
