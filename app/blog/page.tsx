import { Metadata } from 'next';
import {
  getAllPosts,
  getAllCategories,
  getAllTags,
  getFeaturedPosts,
} from '@/app/lib/blog/mdx';
import { BlogClientPage } from './BlogClientPage';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Engineering Insights - Lenuvio Blog',
  description:
    'Deep dives into development challenges, technical solutions, and industry insights from the world of full-stack engineering. Expert tutorials, best practices, and innovation stories.',
  keywords: [
    'engineering blog',
    'full-stack development tutorials',
    'React best practices',
    'Next.js guides',
    'TypeScript tips',
    'web development insights',
    'software engineering',
    'technical tutorials',
    'development challenges',
    'coding best practices',
    'modern web development',
    'programming tutorials',
    'tech industry insights',
    'software architecture',
    'development workflow',
  ],
  openGraph: {
    title: 'Engineering Insights - Expert Development Tutorials & Insights',
    description:
      'Technical deep dives, development tutorials, and industry insights from experienced full-stack engineers. Learn modern best practices and innovative solutions.',
    url: 'https://lenuv.io/blog',
    siteName: 'Lenuvio Blog',
    images: [
      {
        url: '/images/blog-og-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Lenuvio Blog - Engineering Insights and Technical Tutorials',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Insights - Lenuvio Blog',
    description:
      'Technical tutorials, development insights, and expert analysis from the world of modern software engineering.',
    images: ['/images/blog-twitter-card.jpg'],
    creator: '@lenuvio19335',
  },
  alternates: {
    canonical: 'https://lenuv.io/blog',
    types: {
      'application/rss+xml': [
        { url: 'https://lenuv.io/feed.xml', title: 'Lenuvio Blog RSS Feed' },
      ],
    },
  },
  other: {
    'article:section': 'Technology',
    'article:publisher': 'https://lenuv.io',
    'og:site_name': 'Lenuvio Blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts(3);
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <Suspense fallback={<div>Loading blog...</div>}>
      <BlogClientPage
        initialPosts={allPosts}
        featuredPosts={featuredPosts}
        categories={categories}
        tags={tags}
      />
    </Suspense>
  );
}
