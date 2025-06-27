import { NextRequest, NextResponse } from 'next/server';
import { getPostBySlug } from '@/app/lib/blog/mdx';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> } // Changed: params is now a Promise
) {
  try {
    const { slug } = await params; // Await params here
    const post = getPostBySlug(slug);
    return NextResponse.json({ post });
  } catch (error) {
    console.error('Post fetch error:', error);
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
}
