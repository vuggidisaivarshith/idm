import React from 'react';

interface BadgeProps {
  text: string;
  variant?: 'purple' | 'blue' | 'mint' | 'cyan' | 'neutral';
  dot?: boolean;
  className?: string;
}

export default function Badge({
  text,
  variant = 'purple',
  dot = true,
  className = '',
}: BadgeProps) {
  let colorStyles = '';
  let dotColor = 'bg-primarypurple';

  switch (variant) {
    case 'purple':
      colorStyles = 'bg-sectionsoft text-primarypurple border-primarypurple/20';
      dotColor = 'bg-primarypurple';
      break;
    case 'blue':
      colorStyles = 'bg-lightblue text-royalblue border-royalblue/20';
      dotColor = 'bg-royalblue';
      break;
    case 'mint':
      colorStyles = 'bg-brandmint/10 text-brandmint border-brandmint/25';
      dotColor = 'bg-brandmint';
      break;
    case 'cyan':
      colorStyles = 'bg-brandcyan/10 text-brandcyan border-brandcyan/25';
      dotColor = 'bg-brandcyan';
      break;
    case 'neutral':
      colorStyles = 'bg-pagebg text-textsecondary border-bordercolor';
      dotColor = 'bg-textsecondary';
      break;
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border shadow-2xs ${colorStyles} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse`} />}
      <span>{text}</span>
    </span>
  );
}
