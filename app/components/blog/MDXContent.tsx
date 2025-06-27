/* eslint-disable @typescript-eslint/no-explicit-any */
// app/components/blog/MDXContent.tsx - Fixed with unique keys
'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { useState, useEffect } from 'react';
import React from 'react';
import styles from './MDXContent.module.css';
import Image from 'next/image';

interface MDXContentProps {
  content: string;
  className?: string;
}

// Enhanced custom components for MDX with professional styling
const components = {
  // Headings with enhanced styling and unique keys
  h1: (props: any) => (
    <h1 className='group' {...props}>
      {props.children}
      {props.id && (
        <button
          key={`h1-link-${props.id}`}
          onClick={() =>
            navigator.clipboard.writeText(window.location.href + '#' + props.id)
          }
          className='ml-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400 hover:text-cyan-300'
          title='Copy link to this section'>
          🔗
        </button>
      )}
    </h1>
  ),

  h2: (props: any) => (
    <h2 className='group' {...props}>
      {props.children}
      {props.id && (
        <button
          key={`h2-link-${props.id}`}
          onClick={() =>
            navigator.clipboard.writeText(window.location.href + '#' + props.id)
          }
          className='ml-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400 hover:text-cyan-300 text-lg'
          title='Copy link to this section'>
          🔗
        </button>
      )}
    </h2>
  ),

  h3: (props: any) => <h3 key={`h3-${props.id || Math.random()}`} {...props} />,
  h4: (props: any) => <h4 key={`h4-${props.id || Math.random()}`} {...props} />,
  h5: (props: any) => <h5 key={`h5-${props.id || Math.random()}`} {...props} />,
  h6: (props: any) => <h6 key={`h6-${props.id || Math.random()}`} {...props} />,

  // Enhanced paragraphs
  p: (props: any) => <p key={`p-${Math.random()}`} {...props} />,

  // Enhanced links with external link indicator
  a: (props: any) => {
    const isExternal = props.href?.startsWith('http');
    const linkId = `link-${props.href?.replace(/[^a-zA-Z0-9]/g, '-') || Math.random()}`;

    return (
      <a
        key={linkId}
        {...props}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}>
        {props.children}
        {isExternal && <span className='ml-1 text-xs'>↗</span>}
      </a>
    );
  },

  // Enhanced code blocks with copy functionality
  Pre: (props: any) => {
    const [copied, setCopied] = useState(false);
    const codeId = `code-${Math.random()}`;

    const handleCopy = () => {
      const code = props.children?.props?.children;
      if (typeof code === 'string') {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    };

    return (
      <div key={codeId} className='relative group'>
        <button
          onClick={handleCopy}
          className='absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity z-10'>
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
        <pre {...props} />
      </div>
    );
  },

  // Inline code
  code: (props: any) => {
    // Don't apply inline styling if it's inside a pre block
    if (props.className?.includes('language-')) {
      return <code key={`code-block-${Math.random()}`} {...props} />;
    }
    return <code key={`code-inline-${Math.random()}`} {...props} />;
  },

  // Enhanced blockquotes with attribution support
  blockquote: (props: any) => {
    const children = React.Children.toArray(props.children);
    const lastChild = children[children.length - 1];
    const blockquoteId = `blockquote-${Math.random()}`;

    // Check if last paragraph contains attribution (starts with —)
    if (
      React.isValidElement(lastChild) &&
      typeof (lastChild.props as any)?.children === 'string' &&
      (lastChild.props as any).children.startsWith('—')
    ) {
      const content = children.slice(0, -1);
      const attribution = (lastChild.props as any).children
        .toString()
        .substring(1)
        .trim();

      return (
        <blockquote key={blockquoteId} {...props}>
          {content}
          <cite key={`cite-${blockquoteId}`}>{attribution}</cite>
        </blockquote>
      );
    }

    return <blockquote key={blockquoteId} {...props} />;
  },

  // Enhanced lists with unique keys
  ul: (props: any) => <ul key={`ul-${Math.random()}`} {...props} />,
  ol: (props: any) => <ol key={`ol-${Math.random()}`} {...props} />,
  li: (props: any) => <li key={`li-${Math.random()}`} {...props} />,

  // Enhanced images with zoom functionality
  Img: (props: any) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const imgId = `img-${props.src?.replace(/[^a-zA-Z0-9]/g, '-') || Math.random()}`;

    return (
      <>
        <Image
          key={imgId}
          src={props.src}
          alt={props.alt || ''}
          width={props.width || 800}
          height={props.height || 600}
          onClick={() => setIsZoomed(true)}
          className='cursor-zoom-in'
          title='Click to zoom'
          style={{ height: 'auto', width: '100%' }}
        />
        {isZoomed && (
          <div
            key={`zoom-${imgId}`}
            className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out'
            onClick={() => setIsZoomed(false)}>
            <Image
              src={props.src}
              alt={props.alt || ''}
              width={props.width || 1200}
              height={props.height || 900}
              className='max-w-full max-h-full object-contain'
              style={{ height: 'auto', width: 'auto' }}
            />
          </div>
        )}
      </>
    );
  },

  // Enhanced tables
  table: (props: any) => (
    <div key={`table-wrapper-${Math.random()}`} className='overflow-x-auto'>
      <table key={`table-${Math.random()}`} {...props} />
    </div>
  ),
  th: (props: any) => <th key={`th-${Math.random()}`} {...props} />,
  td: (props: any) => <td key={`td-${Math.random()}`} {...props} />,
  thead: (props: any) => <thead key={`thead-${Math.random()}`} {...props} />,
  tbody: (props: any) => <tbody key={`tbody-${Math.random()}`} {...props} />,

  // Horizontal rule
  hr: (props: any) => <hr key={`hr-${Math.random()}`} {...props} />,

  // Strong and emphasis
  strong: (props: any) => <strong key={`strong-${Math.random()}`} {...props} />,
  em: (props: any) => <em key={`em-${Math.random()}`} {...props} />,

  // Custom callout components
  Callout: ({
    type = 'info',
    children,
    title,
  }: {
    type?: 'info' | 'warning' | 'success' | 'error';
    children: React.ReactNode;
    title?: string;
  }) => {
    const calloutId = `callout-${type}-${Math.random()}`;

    return (
      <div key={calloutId} className={`callout callout-${type}`}>
        {title && (
          <h4 key={`callout-title-${calloutId}`} className='font-semibold mb-2'>
            {title}
          </h4>
        )}
        {children}
      </div>
    );
  },

  // Code snippet with language indicator
  CodeBlock: ({
    language,
    children,
  }: {
    language: string;
    children: string;
  }) => {
    const codeBlockId = `codeblock-${language}-${Math.random()}`;

    return (
      <div key={codeBlockId} className='relative'>
        <div className='absolute top-2 right-2 bg-slate-600 text-white px-2 py-1 rounded text-xs font-mono'>
          {language}
        </div>
        <pre>
          <code>{children}</code>
        </pre>
      </div>
    );
  },

  // Table of contents component
  TOC: ({
    items,
  }: {
    items: Array<{ id: string; title: string; level: number }>;
  }) => {
    const tocId = `toc-${Math.random()}`;

    return (
      <div
        key={tocId}
        className='bg-slate-800/50 border border-slate-700 rounded-lg p-4 mb-8'>
        <h3 className='text-lg font-semibold text-white mb-3'>
          Table of Contents
        </h3>
        <ul className='space-y-1'>
          {items.map((item, index) => (
            <li
              key={`toc-item-${item.id}-${index}`}
              style={{ paddingLeft: `${(item.level - 1) * 16}px` }}>
              <a
                href={`#${item.id}`}
                className='text-cyan-400 hover:text-cyan-300 text-sm transition-colors'>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  },
};

export function MDXContent({ content, className = '' }: MDXContentProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const serializeContent = async () => {
      try {
        const mdxSource = await serialize(content, {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  behavior: 'wrap',
                  properties: {
                    className: 'anchor-link',
                  },
                },
              ],
            ],
          },
        });
        setMdxSource(mdxSource);
      } catch (error) {
        console.error('Error serializing MDX:', error);
      } finally {
        setIsLoading(false);
      }
    };

    serializeContent();
  }, [content]);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center py-12'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400'></div>
        <span className='ml-3 text-slate-400'>Loading content...</span>
      </div>
    );
  }

  if (!mdxSource) {
    return (
      <div className='text-center py-12'>
        <p className='text-red-400'>Error loading content</p>
      </div>
    );
  }

  return (
    <div className={`${styles.mdxWrapper} ${className}`}>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
}

// Reading progress component
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector('article');
      if (!article) return;

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      const articleBottom = articleTop + articleHeight - windowHeight;
      const scrollProgress =
        (scrollTop - articleTop) / (articleBottom - articleTop);

      setProgress(Math.max(0, Math.min(1, scrollProgress)));
    };

    const throttledUpdate = () => {
      requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', throttledUpdate, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', throttledUpdate);
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-1 bg-slate-800 z-50'>
      <div
        className='h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-150 ease-out'
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
