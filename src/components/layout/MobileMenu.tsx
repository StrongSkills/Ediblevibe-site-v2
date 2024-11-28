import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationLink } from './NavigationLink';
import { SocialLinks } from './SocialLinks';
import { Youtube, Instagram, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '../../constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationLinks: Array<{ to: string; label: string }>;
}

export function MobileMenu({ isOpen, onClose, navigationLinks }: MobileMenuProps) {
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  const socialLinks = [
    { icon: Youtube, href: SOCIAL_LINKS.youtube },
    { icon: Instagram, href: SOCIAL_LINKS.instagram },
    { icon: Twitter, href: SOCIAL_LINKS.twitter }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden fixed inset-0 top-16 bg-white dark:bg-gray-900 z-40"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            {navigationLinks.map((link, i) => (
              <NavigationLink
                key={link.to}
                to={link.to}
                label={link.label}
                onClick={onClose}
                index={i}
                isMobile
              />
            ))}
            
            <motion.div 
              className="pt-6 border-t border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: navigationLinks.length * 0.1 }}
            >
              <SocialLinks
                links={socialLinks}
                size={24}
                className="justify-center space-x-6"
              />
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}