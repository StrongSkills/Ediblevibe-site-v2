import React from 'react';

interface ColumnsProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
}

export function Columns({
  children,
  className = '',
  cols = { sm: 1, md: 2, lg: 3 },
  gap = 'gap-6'
}: ColumnsProps) {
  const getColumnClasses = () => {
    return `grid grid-cols-${cols.sm || 1} ${
      cols.md ? `md:grid-cols-${cols.md}` : ''
    } ${
      cols.lg ? `lg:grid-cols-${cols.lg}` : ''
    } ${
      cols.xl ? `xl:grid-cols-${cols.xl}` : ''
    }`;
  };

  return (
    <div className={`${getColumnClasses()} ${gap} ${className}`}>
      {children}
    </div>
  );
}