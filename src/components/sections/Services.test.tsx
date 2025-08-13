import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Services } from './Services';

describe('Services section', () => {
  it('should render the component without errors', () => {
    render(<Services />);
    const heading = screen.getByText(/Soluções completas para cada etapa do seu negócio/i);
    expect(heading).toBeInTheDocument();
  });
});
