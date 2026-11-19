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
    default: 'IDM Smart Tech | Social Media Marketing Agency (SMMA) & Growth Agency | Hyderabad',
    template: '%s | IDM Smart Tech',
  },
  description:
    'IDM Smart Tech is a premier Social Media Marketing Agency (SMMA) and creative digital growth agency based in Shamshabad, Hyderabad. Specializing in Instagram management, viral Reels, Meta & Google Ads, creative content, local SEO, and monthly growth packages from ₹4,999.',
  keywords: [
    'IDM Smart Tech',
    'SMMA Hyderabad',
    'Social Media Marketing Agency Hyderabad',
    'Instagram Marketing Agency',
    'Reels Production Agency',
    'Digital Marketing Agency Shamshabad',
    'Meta Ads Agency Hyderabad',
    'Local SEO Hyderabad',
    'Growth Marketing India',
  ],
  metadataBase: new URL('https://idm-inky.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'IDM Smart Tech',
    title: 'IDM Smart Tech | Creative Social Media Marketing & Growth Agency',
    description:
      'We Make Brands Impossible to Ignore. Creative social media management, powerful content, performance marketing, and digital growth solutions based in Shamshabad, Hyderabad.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-pagebg text-textprimary antialiased min-h-screen flex flex-col font-body">
        {children}
      </body>
    </html>
  );
}
