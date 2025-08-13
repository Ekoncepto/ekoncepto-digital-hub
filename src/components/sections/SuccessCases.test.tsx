import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SuccessCases from './SuccessCases';

describe('SuccessCases section', () => {
  it('should render the component without errors', () => {
    render(<SuccessCases />);
    const heading = screen.getByText((content, element) => {
      return element?.textContent === 'Resultados que falam por si.';
    });
    expect(heading).toBeInTheDocument();
  });
});
