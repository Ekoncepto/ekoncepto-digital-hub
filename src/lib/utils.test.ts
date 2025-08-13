import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn', () => {
  it('should merge class names', () => {
    expect(cn('bg-blue-500', 'text-white')).toBe('bg-blue-500 text-white');
  });

  it('should handle conditional classes', () => {
    const isConditional = true;
    expect(cn('base', isConditional && 'conditional')).toBe('base conditional');
    const isNotConditional = false;
    expect(cn('base', isNotConditional && 'conditional')).toBe('base');
  });

  it('should deduplicate tailwind classes', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2');
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
  });
});
