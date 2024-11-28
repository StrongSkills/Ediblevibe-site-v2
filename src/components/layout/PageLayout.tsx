import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer } from './ResponsiveContainer';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  'full': 'max-w-full'
};

export function PageLayout({ children, className = '', maxWidth = '2xl' }: PageLayoutProps) {
  return (
    <motion.div
      className={`min-h-screen bg-background-light dark:bg-background-dark pt-20 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ResponsiveContainer className={maxWidthClasses[maxWidth]}>
        {children}
      </ResponsiveContainer>
    </motion.div>
  );
}