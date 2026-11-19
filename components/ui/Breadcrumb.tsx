import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://idm-inky.vercel.app${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 mb-6">
        <ol className="flex flex-wrap items-center space-x-2 text-xs text-textsecondary">
          <li>
            <Link href="/" className="hover:text-primarypurple transition-colors font-medium">
              Home
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-bordercolor font-bold">/</span>
                {item.href && !isLast ? (
                  <Link href={item.href} className="hover:text-primarypurple transition-colors font-medium">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-primarypurple font-semibold" aria-current={isLast ? 'page' : undefined}>
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
