import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
  isExternal?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  isExternal = false,
  type = 'button',
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  let baseStyles =
    'inline-flex items-center justify-center font-heading font-semibold text-xs tracking-wide rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-primarypurple focus-visible:outline-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ';

  let variantStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles =
        'bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan text-white shadow-sm shadow-primarypurple/25 hover:shadow-md hover:shadow-primarypurple/35 hover:scale-[1.02] py-3 px-6 ';
      break;
    case 'secondary':
      variantStyles =
        'bg-white text-textprimary border border-bordercolor shadow-2xs hover:border-primarypurple/40 hover:text-primarypurple hover:bg-pagebg py-3 px-6 ';
      break;
    case 'outline':
      variantStyles =
        'bg-transparent text-primarypurple border border-primarypurple/30 hover:bg-primarypurple hover:text-white py-2.5 px-5 ';
      break;
    case 'ghost':
      variantStyles =
        'bg-transparent text-textsecondary hover:text-primarypurple hover:bg-sectionsoft py-2 px-4 ';
      break;
  }

  const combinedStyles = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    if (isExternal || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          target={isExternal || href.startsWith('http') ? '_blank' : undefined}
          rel={isExternal || href.startsWith('http') ? 'noreferrer' : undefined}
          className={combinedStyles}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
