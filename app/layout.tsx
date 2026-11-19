import './globals.css';
import { Space_Grotesk, Inter } from 'next/font/google';
import type { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'IDM Smart Tech | Creative Marketing & Intelligent Technology Agency | Hyderabad',
    template: '%s | IDM Smart Tech',
  },
  description:
    'We Build Brands. Create Demand. Drive Growth. From creative social media campaigns and performance marketing to search visibility, website development and intelligent automation, IDM Smart Tech helps businesses build a stronger digital presence in Shamshabad, Hyderabad.',
  keywords: [
    'Digital marketing agency in Hyderabad',
    'Social media marketing agency in Hyderabad',
    'SEO company in Hyderabad',
    'Local SEO services in Hyderabad',
    'Google Business Profile services in Hyderabad',
    'Meta Ads agency in Hyderabad',
    'Google Ads management in Hyderabad',
    'Website development company in Hyderabad',
    'AI automation services in Hyderabad',
    'IDM Smart Tech Shamshabad',
  ],
  metadataBase: new URL('https://idm-inky.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'IDM Smart Tech',
    title: 'IDM Smart Tech | Creative Marketing & Intelligent Technology Agency',
    description:
      'We Build Brands. Create Demand. Drive Growth. Creative social media, performance marketing, local SEO, website development, and business automation in Hyderabad.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

import SmoothScroll from '@/components/animations/SmoothScroll';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-pagebg text-textprimary antialiased min-h-screen flex flex-col font-body">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
