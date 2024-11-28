import React from 'react';

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  gap?: string;
}

export function Flex({
  children,
  className = '',
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = false,
  gap = ''
}: FlexProps) {
  const classes = [
    'flex',
    `flex-${direction}`,
    `items-${align}`,
    `justify-${justify}`,
    wrap ? 'flex-wrap' : 'flex-nowrap',
    gap,
    className
  ].join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
}