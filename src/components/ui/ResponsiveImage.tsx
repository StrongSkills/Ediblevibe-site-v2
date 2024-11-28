import React from 'react';
import { motion } from 'framer-motion';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  containerClassName?: string;
}

export function ResponsiveImage({
  src,
  alt,
  sizes = '100vw',
  className = '',
  containerClassName = '',
  ...props
}: ResponsiveImageProps) {
  return (
    <motion.div
      className={`overflow-hidden ${containerClassName}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={src}
        alt={alt}
        sizes={sizes}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        {...props}
      />
    </motion.div>
  );
}