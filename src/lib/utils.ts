import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names and merges Tailwind CSS classes.
 * This utility function uses `clsx` to handle conditional class names and `tailwind-merge`
 * to resolve any potential class conflicts in a predictable way.
 *
 * @example
 * // Returns 'bg-blue-500 text-white p-4 rounded-lg'
 * cn('bg-blue-500', 'text-white', 'p-4', 'rounded-lg')
 *
 * @example
 * // Conditionally apply classes
 * cn(
 *   'base-class',
 *   isActive && 'bg-blue-500',
 *   isLarge ? 'text-lg' : 'text-sm',
 *   {
 *     'border-2': hasBorder,
 *     'opacity-50': isDisabled
 *   }
 * )
 *
 * @param {...ClassValue[]} inputs - Class names or class name objects/arrays to be combined
 * @returns {string} A single string of combined and deduplicated class names
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
