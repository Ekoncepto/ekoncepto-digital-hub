import { LoadingSpinner } from './LoadingSpinner';

interface PageLoaderProps {
  message?: string;
  className?: string;
}

export const PageLoader = ({ message = 'Loading...', className = '' }: PageLoaderProps) => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-[50vh] ${className}`}>
      <LoadingSpinner size="lg" className="mb-4" />
      {message && <p className="text-gray-600">{message}</p>}
    </div>
  );
};

export default PageLoader;
