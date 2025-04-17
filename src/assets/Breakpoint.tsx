import React, { useState, useEffect } from 'react';

const BreakpointDisplay: React.FC = () => {
  const [breakpoint, setBreakpoint] = useState<string>('default');

  const updateBreakpoint = () => {
    const width = window.innerWidth;

    if (width >= 1536) {
      setBreakpoint('2xl (1536px and up)');
    } else if (width >= 1280) {
      setBreakpoint('xl (1280px to 1535px)');
    } else if (width >= 1024) {
      setBreakpoint('lg (1024px to 1279px)');
    } else if (width >= 768) {
      setBreakpoint('md (768px to 1023px)');
    } else if (width >= 640) {
      setBreakpoint('sm (640px to 767px)');
    } else {
      setBreakpoint('xs (below 640px)');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateBreakpoint);
    updateBreakpoint(); // Set initial breakpoint

    return () => {
      window.removeEventListener('resize', updateBreakpoint);
    };
  }, []);

  return (
    <div className={`p-5 text-white text-center ${breakpoint === '2xl (1536px and up)' ? 'bg-red-300' : 
      breakpoint === 'xl (1280px to 1535px)' ? 'bg-orange-300' : 
      breakpoint === 'lg (1024px to 1279px)' ? 'bg-yellow-500' : 
      breakpoint === 'md (768px to 1023px)' ? 'bg-purple-300' : 
      breakpoint === 'sm (640px to 767px)' ? 'bg-blue-300' : 
      'bg-purple-600'}`}>
      <h1 className="text-2xl font-bold">Current Breakpoint:</h1>
      <p className="mt-2">{breakpoint}</p>
    </div>
  );
};

export default BreakpointDisplay;
