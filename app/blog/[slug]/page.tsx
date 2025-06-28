import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/app/lib/blog/mdx';
import { BlogPostClient } from './BlogPostClient';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    const publishedTime = post.publishedAt;
    const modifiedTime = post.updatedAt || post.publishedAt;

    return {
      title: post.seo?.metaTitle || `${post.title} - Lenuvio Blog`,
      description: post.seo?.metaDescription || post.excerpt,
      keywords: [
        post.category.toLowerCase(),
        ...post.tags.map((tag) => tag.toLowerCase()),
        'tutorial',
        'guide',
        'development',
        'programming',
        'best practices',
      ],
      authors: [{ name: 'Lenuvio', url: 'https://lenuv.io' }],
      category: post.category,

      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `https://lenuv.io/blog/${post.slug}`,
        siteName: 'Lenuvio Blog',
        publishedTime,
        modifiedTime,
        type: 'article',
        authors: ['Lenuvio'],
        section: post.category,
        tags: post.tags,
        images: [
          {
            url: `/api/og?title=${encodeURIComponent(post.title)}`,
            width: 1200,
            height: 630,
            alt: post.title,
            type: 'image/png',
          },
          {
            url: `/images/blog-post-${post.slug}-square.jpg`,
            width: 1200,
            height: 1200,
            alt: post.title,
            type: 'image/jpeg',
          },
        ],
      },

      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [`/api/og?title=${encodeURIComponent(post.title)}`],
        creator: '@lenuvio19335',
      },

      alternates: {
        canonical: `https://lenuv.io/blog/${post.slug}`,
      },

      other: {
        'article:published_time': publishedTime,
        'article:modified_time': modifiedTime,
        'article:author': 'Lenuvio',
        'article:section': post.category,
        'article:tag': post.tags.join(', '),
        'og:site_name': 'Lenuvio Blog',

        // Reading time and word count for rich snippets
        'twitter:label1': 'Reading time',
        'twitter:data1': `${Math.ceil(post.readingTime)} min read`,
        'twitter:label2': 'Category',
        'twitter:data2': post.category,

        // Additional structured data
        'article:publisher': 'https://lenuv.io',
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
  } catch {
    return {
      title: 'Post Not Found - Lenuvio Blog',
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    const allPosts = getAllPosts();

    const relatedPosts = allPosts
      .filter((p) => p.category === post.category && p.slug !== post.slug)
      .slice(0, 3);

    return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
  } catch {
    notFound();
  }
}
