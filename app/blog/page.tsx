import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import CTASection from '@/components/ui/CTASection';
import { BLOG_POSTS } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Digital Marketing Blog & Insights | IDM Smart Tech Hyderabad',
  description:
    'Practical digital marketing insights, Meta vs Google Ads comparisons, Instagram Reels strategies, local SEO advice, and Google Business Profile guides for growing businesses.',
  keywords: [
    'Digital Marketing Blog India',
    'Instagram Strategy Hyderabad',
    'Local SEO Guide',
    'Meta Ads Advice',
    'GMB Optimization Tips',
  ],
  alternates: {
    canonical: 'https://idm-inky.vercel.app/blog',
  },
  openGraph: {
    title: 'Digital Marketing Blog & Insights | IDM Smart Tech',
    description:
      'Actionable guides on social media, performance marketing, local SEO, and business automation.',
    url: 'https://idm-inky.vercel.app/blog',
  },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-pagebg text-textprimary selection:bg-primarypurple/20 selection:text-primarypurple">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-pagebg via-sectionsoft/40 to-pagebg border-b border-bordercolor">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Breadcrumb items={[{ label: 'Blog & Insights' }]} />

          <div className="max-w-3xl">
            <span className="badge-aurora mb-4">Strategic Knowledge</span>
            <h1 className="text-4xl sm:text-6xl font-heading font-light tracking-tight text-textprimary leading-tight">
              Actionable Insights for <br />
              <span className="font-extrabold text-gradient-aurora">
                Modern Digital Growth.
              </span>
            </h1>
            <p className="text-textsecondary text-lg mt-5 leading-relaxed">
              No generic fluff. Practical, helpful guides written by our practitioners in Hyderabad on paid ads, local search algorithms, Reels production, and AI workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Card
                key={post.slug}
                className="p-7 flex flex-col justify-between group hover:border-primarypurple/40"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-textsecondary mb-4 pb-3 border-b border-bordercolor">
                    <span className="font-bold text-primarypurple bg-sectionsoft px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h2 className="text-xl font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-textsecondary leading-relaxed mb-6 line-clamp-3">
                    {post.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-pagebg text-textsecondary border border-bordercolor">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-bordercolor flex items-center justify-between">
                  <span className="text-[11px] text-textsecondary">
                    {post.publishedDate}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-primarypurple hover:underline"
                  >
                    Read Guide &rarr;
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
