import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render the main application without crashing', () => {
    try {
      render(<App />);
      // Check for a key element that should be on the main page to confirm it rendered.
      // For example, the hero section title.
      // This is a more robust check than just seeing if render() throws.
      const heroTitle = screen.getByText(/Aceleramos suas vendas/i);
      expect(heroTitle).toBeInTheDocument();
    } catch (e) {
      console.error('Error rendering App component:', e);
      // Force the test to fail with a clear message if an error is caught.
      expect(e).toBeUndefined();
    }
  });
});
