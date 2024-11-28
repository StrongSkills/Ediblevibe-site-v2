import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ href: string; label: string }>;
}

export function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white dark:bg-gray-800 z-50 lg:hidden"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="px-4 py-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-3 text-lg hover:text-orange-500 dark:hover:text-orange-400"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}