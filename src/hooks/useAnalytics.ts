import { useEffect, useCallback } from 'react';

// Initialize Google Analytics
const initGA = (measurementId: string) => {
  try {
    if (typeof window !== 'undefined' && !window.gtag) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      // Initialize gtag function
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      };

      // Configure gtag
      window.gtag('js', new Date());
      window.gtag('config', measurementId, {
        page_path: window.location.pathname,
        send_page_view: false, // We'll handle page views manually
      });
    }
  } catch (error)_ {
    console.error('Failed to initialize Google Analytics', error);
  }
};

const isInvalidGAId = (id?: string): boolean => {
  if (!id || id.toUpperCase().includes('G-XXXXXXXXXX')) {
    return true;
  }
  return false;
};

export const useAnalytics = (measurementId?: string) => {
  useEffect(() => {
    // Initialize GA if measurementId is provided, valid, and GA is not already initialized
    const isValid = !isInvalidGAId(measurementId);
    if (isValid && typeof window !== 'undefined' && !window.gtag) {
      initGA(measurementId as string);
    }
  }, [measurementId]);

  // Track page views on route change
  useEffect(() => {
    const trackPageView = () => {
      const isValid = !isInvalidGAId(measurementId);
      if (isValid && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: window.location.pathname + window.location.search + window.location.hash,
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track initial page view
    trackPageView();

    // Track page views on Astro's page load event
    document.addEventListener('astro:page-load', trackPageView);

    return () => {
      document.removeEventListener('astro:page-load', trackPageView);
    };
  }, [measurementId]);

  // Track custom events
  const trackEvent = useCallback(
    (action: string, params: Record<string, unknown>) => {
      const isValid = !isInvalidGAId(measurementId);
      if (isValid && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, params);
      }
    },
    [measurementId]
  );

  return { trackEvent };
};

// Declare gtag on window interface
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
