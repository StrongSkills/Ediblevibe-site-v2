import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavigationLinkProps {
  to: string;
  label: string;
  onClick?: () => void;
  index?: number;
  isMobile?: boolean;
}

export function NavigationLink({ to, label, onClick, index = 0, isMobile = false }: NavigationLinkProps) {
  const variants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1, duration: 0.3 }
    },
    exit: { opacity: 0, x: 20 }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={index}
    >
      <Link 
        to={to} 
        className={`
          transition-colors
          ${isMobile
            ? 'block text-lg font-medium text-gray-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400'
            : 'text-white hover:text-orange-500'
          }
        `}
        onClick={onClick}
      >
        {label}
      </Link>
    </motion.div>
  );
}