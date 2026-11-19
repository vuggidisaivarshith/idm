import './globals.css';

export const metadata = {
  title: 'IDM Smart Tech | AI Digital Marketing & Technology Agency | Hyderabad',
  description:
    'IDM Smart Tech is an AI-powered digital marketing & technology agency in Shamshabad, Hyderabad. Specializing in Google Business Profile (GMB) creation, reinstatement, video verification, local SEO, paid ads, web/app development, and growth packages from ₹4,999/month.',
  keywords: [
    'IDM Smart Tech',
    'Digital Marketing Agency Hyderabad',
    'GMB Reinstatement Hyderabad',
    'Google Business Profile Verification',
    'Local SEO Shamshabad',
    'Web Development Hyderabad',
    'AI Marketing Agency India',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-darkbg text-white antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
