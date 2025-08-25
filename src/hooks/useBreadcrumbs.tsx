import { useLocation } from 'react-router-dom';
import { generateBreadcrumbs, Breadcrumb } from '@/lib/breadcrumb';
import { useMemo } from 'react';

export const useBreadcrumbs = (): Breadcrumb[] => {
  const location = useLocation();
  const breadcrumbs = useMemo(
    () => generateBreadcrumbs(location.pathname),
    [location.pathname]
  );
  return breadcrumbs;
};
