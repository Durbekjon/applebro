import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'icon';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'font-medium transition-all duration-200 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-purple-600 shadow-lg shadow-purple-500/30',
    secondary: 'border border-gray-700 text-white px-6 py-3 rounded-full hover:border-purple-500 hover:bg-purple-500/10',
    icon: 'w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 text-white'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
