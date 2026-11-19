import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glossy?: boolean;
  hoverElevation?: boolean;
}

export default function Card({
  children,
  className = '',
  glossy = true,
  hoverElevation = true,
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-bordercolor bg-white relative transition-all duration-300 ${
        glossy ? 'glossy-card ' : 'aurora-card '
      } ${hoverElevation ? 'hover:-translate-y-1 hover:border-primarypurple/35 hover:shadow-card-hover ' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
