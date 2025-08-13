import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Methodology } from './Methodology';

describe('Methodology section', () => {
  it('should render the component without errors', () => {
    render(<Methodology />);
    const heading = screen.getByText(/Nossa Fórmula/i);
    expect(heading).toBeInTheDocument();
  });
});
