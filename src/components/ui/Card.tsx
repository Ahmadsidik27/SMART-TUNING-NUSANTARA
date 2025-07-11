import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: 'none' | 'default';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  shadow = 'md',
  border = 'default',
}) => {
  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };
  
  const borderClasses = {
    none: 'border-0',
    default: 'border border-gray-200 rounded-lg',
  };

  return (
    <div className={`bg-white ${shadowClasses[shadow]} ${borderClasses[border]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;