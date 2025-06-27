import { Metadata } from 'next';
import {
  getAllPosts,
  getAllCategories,
  getAllTags,
  getFeaturedPosts,
} from '@/app/lib/blog/mdx';
// Ensure BlogClientPage.tsx exists in the same directory, or update the path below if it's elsewhere
import { BlogClientPage } from './BlogClientPage';

export const metadata: Metadata = {
  title: 'Engineering Insights - Lenuvio Blog',
  description:
    'Deep dives into development challenges, technical solutions, and industry insights from the world of full-stack engineering.',
  keywords:
    'web development, full-stack, Next.js, React, TypeScript, programming, software engineering',
  openGraph: {
    title: 'Engineering Insights - Lenuvio Blog',
    description: 'Technical insights and development tutorials from Lenuvio.',
    url: 'https://lenuv.io/blog',
    siteName: 'Lenuvio',
    images: [
      {
        url: 'https://lenuv.io/images/blog-og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Insights - Lenuvio Blog',
    description: 'Technical insights and development tutorials.',
    images: ['https://lenuv.io/images/blog-og.png'],
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
    <BlogClientPage
      initialPosts={allPosts}
      featuredPosts={featuredPosts}
      categories={categories}
      tags={tags}
    />
  );
}
