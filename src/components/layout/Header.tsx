import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Youtube, Instagram, Twitter } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { NavigationLink } from './NavigationLink';
import { SocialLinks } from './SocialLinks';
import { MobileMenu } from './MobileMenu';
import { SOCIAL_LINKS } from '../../constants';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useBreakpoint } from '../../hooks/useBreakpoint';

const navigationLinks = [
  { to: '/episodes', label: 'Episodes' },
  { to: '/team', label: 'Team' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' }
];

const socialLinks = [
  { icon: Youtube, href: SOCIAL_LINKS.youtube },
  { icon: Instagram, href: SOCIAL_LINKS.instagram },
  { icon: Twitter, href: SOCIAL_LINKS.twitter }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const { isMd } = useBreakpoint();
  const isScrolled = scrollPosition > 0;

  useEffect(() => {
    if (isMd) {
      setIsMenuOpen(false);
    }
  }, [isMd]);

  useEffect(() => {
    if (!isMd) {
      document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isMd]);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-colors duration-200 ${
        isScrolled || isMenuOpen
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Edible Vibe
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link, i) => (
              <NavigationLink
                key={link.to}
                to={link.to}
                label={link.label}
                index={i}
              />
            ))}
          </nav>

          <motion.div 
            className="hidden md:flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SocialLinks links={socialLinks} />
            <ThemeToggle />
          </motion.div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <motion.button 
              className="text-white hover:text-orange-500 p-2 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navigationLinks={navigationLinks}
      />
    </motion.header>
  );
}