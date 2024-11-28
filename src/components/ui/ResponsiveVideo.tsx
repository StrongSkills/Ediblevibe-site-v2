import React from 'react';
import { AspectRatio } from './AspectRatio';

interface ResponsiveVideoProps {
  src: string;
  title?: string;
  poster?: string;
  className?: string;
}

export function ResponsiveVideo({ src, title, poster, className = '' }: ResponsiveVideoProps) {
  return (
    <AspectRatio className={className}>
      <video
        src={src}
        poster={poster}
        title={title}
        controls
        playsInline
        className="w-full h-full object-cover"
      />
    </AspectRatio>
  );
}