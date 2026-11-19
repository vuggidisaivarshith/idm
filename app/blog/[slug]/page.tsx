import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Card from '@/components/ui/Card';
import CTASection from '@/components/ui/CTASection';
import { BLOG_POSTS, BlogPost } from '@/data/blog';
import { COMPANY_INFO, getWhatsAppUrl } from '@/lib/constants';

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found | IDM Smart Tech' };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [...post.tags, 'IDM Smart Tech Blog', 'Marketing Advice Hyderabad'],
    alternates: {
      canonical: `https://idm-inky.vercel.app/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://idm-inky.vercel.app/blog/${post.slug}`,
      siteName: 'IDM Smart Tech',
      locale: 'en_IN',
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
  };
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    author: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.website,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://idm-inky.vercel.app/favicon.ico',
      },
    },
    datePublished: post.publishedDate,
    mainEntityOfPage: `https://idm-inky.vercel.app/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-pagebg text-textprimary selection:bg-primarypurple/20 selection:text-primarypurple">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Breadcrumb
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.category, href: '/blog' },
              { label: post.title },
            ]}
          />

          {/* Article Header */}
          <header className="mb-12 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-textsecondary">
              <span className="font-bold text-primarypurple bg-sectionsoft px-3 py-1 rounded-full border border-primarypurple/20">
                {post.category}
              </span>
              <span>•</span>
              <span>{post.publishedDate}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
              <span>•</span>
              <span className="text-textprimary font-medium">{post.author}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-bold text-textprimary tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-textsecondary leading-relaxed pt-2">
              {post.summary}
            </p>
          </header>

          {/* Article Body */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-bordercolor shadow-sm space-y-6 text-sm sm:text-base text-textsecondary leading-relaxed">
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h2
                    key={index}
                    className="text-xl sm:text-2xl font-heading font-bold text-textprimary pt-6 pb-2"
                  >
                    {paragraph.replace('### ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="ml-5 list-disc text-textsecondary">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              if (paragraph.match(/^\d\./)) {
                return (
                  <div key={index} className="p-4 rounded-2xl bg-sectionsoft/40 border border-bordercolor/80 my-3">
                    <p className="font-heading font-bold text-textprimary text-sm sm:text-base">
                      {paragraph}
                    </p>
                  </div>
                );
              }
              return (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}

            {/* Author Attribution Box */}
            <div className="mt-12 p-6 rounded-2xl bg-pagebg border border-bordercolor flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase font-bold text-textsecondary">Written & Reviewed By</p>
                <p className="text-sm font-heading font-bold text-textprimary">{post.author}</p>
                <p className="text-xs text-textsecondary">Digital Growth Practitioners based in Shamshabad, Hyderabad.</p>
              </div>

              <a
                href={getWhatsAppUrl(`Hello IDM Smart Tech, I just read your article "${post.title}" and would like to discuss implementing this for my business.`)}
                target="_blank"
                rel="noreferrer"
                className="btn-aurora-primary py-2.5 px-5 text-xs whitespace-nowrap"
              >
                Discuss Strategy &rarr;
              </a>
            </div>
          </div>

          {/* Related Service Link Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-sectionsoft via-white to-sectionsoft border border-primarypurple/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primarypurple block mb-1">
                Need Help Executing This?
              </span>
              <p className="text-sm font-heading font-bold text-textprimary">
                Explore our full service deliverables and dedicated management retainers.
              </p>
            </div>
            <Link
              href={`/services/${post.relatedServiceSlug}`}
              className="btn-aurora-secondary py-2 px-5 text-xs whitespace-nowrap"
            >
              View Related Service &rarr;
            </Link>
          </div>
        </div>
      </article>

      <CTASection />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
