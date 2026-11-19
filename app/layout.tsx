import './globals.css';
import { Space_Grotesk, Inter } from 'next/font/google';
import type { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'IDM Smart Tech | AI Digital Marketing & Technology Agency | Hyderabad',
    template: '%s | IDM Smart Tech',
  },
  description:
    'IDM Smart Tech is an AI-powered digital marketing & technology agency in Shamshabad, Hyderabad. Specializing in Google Business Profile (GMB) services, local SEO, paid ads, web/app development, and AI automation. Growth packages from ₹4,999/month.',
  keywords: [
    'IDM Smart Tech',
    'Digital Marketing Agency Hyderabad',
    'GMB Services Hyderabad',
    'Google Business Profile Verification',
    'Local SEO Shamshabad',
    'Web Development Hyderabad',
    'AI Marketing Agency India',
    'App Development Hyderabad',
  ],
  metadataBase: new URL('https://idm-inky.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'IDM Smart Tech',
    title: 'IDM Smart Tech | AI Digital Marketing & Technology Agency',
    description:
      'AI-powered digital marketing, Google Business Profile services, web & app development, and growth packages from ₹4,999/month. Based in Shamshabad, Hyderabad.',
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
