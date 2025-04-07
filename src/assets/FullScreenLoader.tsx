import { Logo } from './Logo';

export const FullScreenLoader = () => {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-pulse">
            <Logo size="xl" />
          </div>
          <p className="mt-3 text-white text-md text-center">
            This may take a few seconds because the backend is hosted on a free server.
          </p>
        </div>
      </div>
    );
  };