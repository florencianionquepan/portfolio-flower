import { Logo } from './Logo';

interface FullScreenLoaderProps {
  message?: string;
  bgClass?: string;
  textClass?:string;
}

export const FullScreenLoader = ({
  message,
  bgClass = 'bg-black bg-opacity-80 backdrop-blur',
  textClass='text-white text-lg'
}: FullScreenLoaderProps) => {
    return (
      <div className={`fixed inset-0 z-50 ${bgClass} flex items-center justify-center`}>
        <div className="flex flex-col items-center">
          <div className="animate-pulse">
            <Logo size="xl" />
          </div>
          {message && (
          <p className={`mt-3 ${textClass} text-md text-center`}>
            {message}
          </p>
        )}
        </div>
      </div>
    );
  };