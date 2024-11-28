import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  children, 
  variant = 'primary', 
  to, 
  fullWidth = false,
  size = 'md',
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium relative overflow-hidden transition-all duration-200";
  
  const sizeStyles = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg'
  };

  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25",
    secondary: "bg-white text-gray-900 hover:bg-gray-100 shadow-lg",
    outline: "bg-transparent border-2 border-white hover:bg-white hover:text-black text-white"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${widthClass} ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} className={fullWidth ? 'w-full' : 'inline-block'}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button {...props} className={fullWidth ? 'w-full' : ''}>
      {buttonContent}
    </button>
  );
}