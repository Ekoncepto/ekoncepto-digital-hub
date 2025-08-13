import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Process } from './Process';

describe('Process section', () => {
  it('should render the component without errors', () => {
    render(<Process />);
    const heading = screen.getByText(/Nosso Processo/i);
    expect(heading).toBeInTheDocument();
  });
});
