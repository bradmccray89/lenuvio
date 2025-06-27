/** @type {import('next').NextConfig} */
import mdx from '@next/mdx';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
};

module.exports = withMDX(nextConfig);
