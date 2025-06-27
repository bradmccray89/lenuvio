import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { BlogPost } from '@/app/types/blog';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug: realSlug,
    title: data.title,
    excerpt: data.excerpt,
    content,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    readingTime: stats.minutes,
    category: data.category || 'Development',
    tags: data.tags || [],
    featured: data.featured || false,
    seo: {
      metaTitle: data.metaTitle || data.title,
      metaDescription: data.metaDescription || data.excerpt,
    },
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1));

  return posts;
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  return getAllPosts().filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return categories.sort();
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = [...new Set(posts.flatMap((post) => post.tags))];
  return tags.sort();
}
