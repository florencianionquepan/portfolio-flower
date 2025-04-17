interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo = ({size='sm'}:LogoProps) => {

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
    xl: 'w-44 h-44',
  };

  return (
    <div className="flex justify-center items-center">
      <img src="/dibujo.svg" 
        alt="Logo" 
        className={`${sizeClasses[size]} transition-all duration-500`}/>
    </div>
  );
};
