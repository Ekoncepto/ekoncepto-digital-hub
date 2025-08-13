import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('should render with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary text-primary-foreground');
  });

  it('should render with a specific variant and size', () => {
    render(
      <Button variant="destructive" size="lg">
        Delete
      </Button>
    );
    const button = screen.getByRole('button', { name: /delete/i });
    expect(button).toHaveClass('bg-destructive text-destructive-foreground h-11');
  });

  it('should render as a child component', () => {
    render(
      <Button asChild>
        <a href="#">Link</a>
      </Button>
    );
    const link = screen.getByRole('link', { name: /link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('bg-primary text-primary-foreground');
  });
});
