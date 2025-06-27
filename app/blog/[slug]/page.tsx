import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/app/lib/blog/mdx';
import { BlogPostClient } from './BlogPostClient';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>; // Changed: params is now a Promise
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params; // Await params here
    const post = getPostBySlug(slug);

    return {
      title: post.seo?.metaTitle || `${post.title} - Lenuvio Blog`,
      description: post.seo?.metaDescription || post.excerpt,
      keywords: [post.category, ...post.tags].join(', '),
      authors: [{ name: 'Brandon McCray' }],
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `https://lenuv.io/blog/${post.slug}`,
        siteName: 'Lenuvio',
        publishedTime: post.publishedAt,
        modifiedTime: post.updatedAt,
        type: 'article',
        images: [
          {
            url: `https://lenuv.io/api/og?title=${encodeURIComponent(post.title)}`,
            width: 1200,
            height: 630,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [
          `https://lenuv.io/api/og?title=${encodeURIComponent(post.title)}`,
        ],
      },
      alternates: {
        canonical: `https://lenuv.io/blog/${post.slug}`,
      },
    };
  } catch {
    return {
      title: 'Post Not Found - Lenuvio Blog',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params; // Await params here
    const post = getPostBySlug(slug);
    const allPosts = getAllPosts();

    // Get related posts from same category
    const relatedPosts = allPosts
      .filter((p) => p.category === post.category && p.slug !== post.slug)
      .slice(0, 3);

    return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
  } catch {
    notFound();
  }
}
