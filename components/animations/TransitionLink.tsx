'use client';

import React from 'react';
import Link, { LinkProps } from 'next/link';

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

export default function TransitionLink({
  children,
  className = '',
  ariaLabel,
  target,
  rel,
  ...props
}: TransitionLinkProps) {
  return (
    <Link
      className={`transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-primarypurple focus-visible:outline-offset-2 rounded-lg ${className}`}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </Link>
  );
}
