import './globals.css';

export const metadata = {
  title: 'IDM Companies – Real Estate Development',
  description: 'Integrated real‑estate development, construction, and property management across the Pacific Northwest and Southwest.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-obsidian text-white antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
