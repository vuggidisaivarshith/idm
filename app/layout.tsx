import './globals.css';
import { Playfair_Display, Plus_Jakarta_Sans, IBM_Plex_Mono, Space_Grotesk, Inter } from 'next/font/google';
import type { Metadata } from 'next';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
});

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
import FloatingContactDock from '@/components/FloatingContactDock';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} ${ibmPlexMono.variable} ${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-pagebg text-ink-900 antialiased min-h-screen flex flex-col font-sans selection:bg-primarypurple/15 selection:text-ink-900">
        <SmoothScroll />
        {children}
        <FloatingContactDock />
      </body>
    </html>
  );
}
