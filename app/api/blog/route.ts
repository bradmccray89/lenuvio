import { NextRequest, NextResponse } from 'next/server';
import {
  getAllPosts,
  getPostsByCategory,
  getPostsByTag,
  searchPosts,
  getFeaturedPosts,
  getAllCategories,
  getAllTags,
} from '@/app/lib/blog/mdx';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');
    const type = searchParams.get('type');

    // Handle different request types
    if (type === 'categories') {
      return NextResponse.json({ categories: getAllCategories() });
    }

    if (type === 'tags') {
      return NextResponse.json({ tags: getAllTags() });
    }

    let posts = getAllPosts();

    if (featured === 'true') {
      posts = getFeaturedPosts();
    } else if (category) {
      posts = getPostsByCategory(category);
    } else if (tag) {
      posts = getPostsByTag(tag);
    } else if (search) {
      posts = searchPosts(search);
    }

    return NextResponse.json({
      posts,
      total: posts.length,
      categories: getAllCategories(),
      tags: getAllTags(),
    });
  } catch (error) {
    console.error('Blog API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog data' },
      { status: 500 }
    );
  }
}
