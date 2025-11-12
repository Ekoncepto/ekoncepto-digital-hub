import { generateBreadcrumbs, Breadcrumb } from '@/lib/breadcrumb';
import { useMemo, useState, useEffect } from 'react';

export const useBreadcrumbs = (): Breadcrumb[] => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const breadcrumbs = useMemo(
    () => generateBreadcrumbs(pathname),
    [pathname]
  );
  return breadcrumbs;
};
