import React from 'react';
import LazyImage from './LazyImage';

// Define the props for the component
interface OptimizedImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'srcSet' | 'src'> {
  /**
   * Path to the original image in the public directory.
   * Example: "/images/hero-image.jpg"
   */
  src: string;

  /**
   * An array of numbers representing the widths (in pixels) of the generated images.
   * These should match the widths created by the optimization script.
   */
  widths: number[];

  /**
   * The `sizes` attribute for the `<img>` and `<source>` elements.
   * This is crucial for responsive image selection.
   */
  sizes: string;

  /**
   * Custom class name for the <picture> element wrapper.
   */
  className?: string;

  /**
   * Custom class name for the underlying <img> element.
   */
  imgClassName?: string;
}

/**
 * A React component to render responsive, optimized images using the <picture> element.
 * It automatically generates sources for WebP and the original image format.
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  widths,
  sizes,
  className,
  imgClassName,
  ...rest
}) => {
  if (!src || !widths || widths.length === 0) {
    // In a real app, you might want a better fallback or error boundary
    return null;
  }

  // 1. Parse the source path to get the base name and extension
  const fileName = src.split('/').pop() || '';
  const [name, ext] = fileName.split('.');

  const originalFormat = ext.toLowerCase() === 'jpeg' ? 'jpg' : ext.toLowerCase();

  // 2. Helper function to generate a `srcSet` string from the widths array
  const generateSrcSet = (format: string) => {
    return widths
      .map(width => `/images/optimized/${name}-${width}w.${format} ${width}w`)
      .join(', ');
  };

  // 3. Determine the correct MIME type for the original format
  const originalMimeType = `image/${originalFormat === 'jpg' ? 'jpeg' : originalFormat}`;

  // 4. Create the `srcSet` for both WebP and the original format
  const webpSrcSet = generateSrcSet('webp');
  const originalSrcSet = generateSrcSet(originalFormat);

  // 5. Use the largest width available for the default `src` on the `<img>` tag
  const defaultSrc = `/images/optimized/${name}-${Math.max(...widths)}w.${originalFormat}`;

  return (
    <picture className={className}>
      {/* The browser will evaluate these sources and pick the first one it supports. */}
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <source type={originalMimeType} srcSet={originalSrcSet} sizes={sizes} />

      {/* The <img> tag is the fallback and is what actually gets rendered. */}
      {/* We use loading="lazy" for native browser-level lazy loading. */}
      <img
        src={defaultSrc}
        alt={alt!}
        className={imgClassName}
        loading="lazy"
        decoding="async"
        {...rest}
      />
    </picture>
  );
};

export default OptimizedImage;
