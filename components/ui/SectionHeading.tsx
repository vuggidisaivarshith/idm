import React from 'react';
import Badge from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlightText,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-14 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className={`mb-4 ${isCenter ? 'flex justify-center' : ''}`}>
          <Badge text={badge} />
        </div>
      )}
      <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary leading-tight">
        {title}{' '}
        {highlightText && (
          <span className="font-extrabold text-gradient-aurora block sm:inline">
            {highlightText}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-textsecondary text-base sm:text-lg mt-4 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
