import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  size?: number;
}

export function SocialLink({ href, icon: Icon, size = 20 }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      className="text-white hover:text-orange-500 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={size} />
    </motion.a>
  );
}

interface SocialLinksProps {
  links: Array<{ href: string; icon: LucideIcon }>;
  size?: number;
  className?: string;
}

export function SocialLinks({ links, size = 20, className = '' }: SocialLinksProps) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {links.map((link) => (
        <SocialLink
          key={link.href}
          href={link.href}
          icon={link.icon}
          size={size}
        />
      ))}
    </div>
  );
}