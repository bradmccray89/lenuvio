import { getAllPosts } from '@/app/lib/blog/mdx';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = getAllPosts().slice(0, 20); // Latest 20 posts

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Lenuvio Blog - Engineering Insights</title>
    <description>Technical insights and development tutorials from Lenuvio</description>
    <link>https://lenuv.io/blog</link>
    <atom:link href="https://lenuv.io/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>https://lenuv.io/blog/${post.slug}</link>
      <guid isPermaLink="true">https://lenuv.io/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <category>${post.category}</category>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
