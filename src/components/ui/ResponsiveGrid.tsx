import React from 'react';
import { motion } from 'framer-motion';

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
}

export function ResponsiveGrid({
  children,
  className = '',
  columns = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = 'gap-6',
}: ResponsiveGridProps) {
  const getGridCols = () => {
    return `grid-cols-1 ${
      columns.sm ? `sm:grid-cols-${columns.sm}` : ''
    } ${
      columns.md ? `md:grid-cols-${columns.md}` : ''
    } ${
      columns.lg ? `lg:grid-cols-${columns.lg}` : ''
    } ${
      columns.xl ? `xl:grid-cols-${columns.xl}` : ''
    }`;
  };

  return (
    <motion.div
      className={`grid ${getGridCols()} ${gap} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}