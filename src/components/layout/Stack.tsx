import React from 'react';

interface StackProps {
  children: React.ReactNode;
  className?: string;
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  direction?: 'row' | 'col';
}

const spacingClasses = {
  none: '',
  sm: 'space-y-2 md:space-y-4',
  md: 'space-y-4 md:space-y-6',
  lg: 'space-y-6 md:space-y-8',
  xl: 'space-y-8 md:space-y-12'
};

const directionClasses = {
  row: 'flex-row',
  col: 'flex-col'
};

export function Stack({ 
  children, 
  className = '', 
  spacing = 'md',
  direction = 'col'
}: StackProps) {
  return (
    <div className={`flex ${directionClasses[direction]} ${spacingClasses[spacing]} ${className}`}>
      {children}
    </div>
  );
}