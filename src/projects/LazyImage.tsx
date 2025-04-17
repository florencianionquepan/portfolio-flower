import { useState } from "react";

interface LazyImageProps {
    path: string;
    claseImg?: string;
    imageAlt?: string;
  }

  export const LazyImage: React.FC<LazyImageProps> = ({ path, imageAlt = '' }) => {
    const [loaded, setLoaded] = useState(false);
  
    return (
      <div className='h-64 overflow-y-auto border border-4 rounded border-gray-800 mx-2 bg-gray-800'>
        {!loaded && (
          <div className="absolute inset-0 bg-gray-400 animate-pulse z-10" />
        )}
        <img
          src={path}
          alt={imageAlt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`
            transition-opacity duration-700 ease-in-out
            ${loaded ? 'opacity-100' : 'opacity-0'}
          `}
        />
      </div>
    );
  };