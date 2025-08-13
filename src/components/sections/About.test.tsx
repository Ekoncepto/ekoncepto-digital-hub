import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from './About';

describe('About section', () => {
  it('should render the component without errors', () => {
    render(<About />);
    const heading = screen.getByText(/Mais do que uma consultoria/i);
    expect(heading).toBeInTheDocument();
  });
});
