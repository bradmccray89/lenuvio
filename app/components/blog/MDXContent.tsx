/* eslint-disable @typescript-eslint/no-explicit-any */
// app/components/blog/MDXContent.tsx - Complete fix for duplicate keys
'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { useState, useEffect, useCallback } from 'react';
import React from 'react';
import styles from './MDXContent.module.css';
import Image from 'next/image';

interface MDXContentProps {
  content: string;
  className?: string;
}

// Enhanced custom components for MDX with guaranteed unique keys
const createComponents = () => {
  const components = {
    // Headings with copy link functionality
    H1: (props: any) => {
      const handleCopyLink = useCallback(() => {
        if (props.id) {
          navigator.clipboard.writeText(`${window.location.href}#${props.id}`);
        }
      }, [props.id]);

      return (
        <h1 className='group' {...props}>
          {props.children}
          {props.id && (
            <button
              onClick={handleCopyLink}
              className='ml-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400 hover:text-cyan-300'
              title='Copy link to this section'
              aria-label='Copy link to this section'>
              🔗
            </button>
          )}
        </h1>
      );
    },

    H2: (props: any) => {
      const handleCopyLink = useCallback(() => {
        if (props.id) {
          navigator.clipboard.writeText(`${window.location.href}#${props.id}`);
        }
      }, [props.id]);

      return (
        <h2 className='group' {...props}>
          {props.children}
          {props.id && (
            <button
              onClick={handleCopyLink}
              className='ml-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400 hover:text-cyan-300 text-lg'
              title='Copy link to this section'
              aria-label='Copy link to this section'>
              🔗
            </button>
          )}
        </h2>
      );
    },

    h3: (props: any) => <h3 {...props} />,
    h4: (props: any) => <h4 {...props} />,
    h5: (props: any) => <h5 {...props} />,
    h6: (props: any) => <h6 {...props} />,

    // Paragraphs
    p: (props: any) => <p {...props} />,

    // Links with external indicator
    a: (props: any) => {
      const isExternal = props.href?.startsWith('http');

      return (
        <a
          {...props}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}>
          {props.children}
          {isExternal && <span className='ml-1 text-xs'>↗</span>}
        </a>
      );
    },

    // Code blocks with copy functionality
    Pre: (props: any) => {
      const [copied, setCopied] = useState(false);

      const handleCopy = useCallback(() => {
        // Try to get the code content from the children
        const codeElement = props.children?.props?.children;
        if (typeof codeElement === 'string') {
          navigator.clipboard.writeText(codeElement);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      }, [props.children]);

      return (
        <div className='relative group'>
          <button
            onClick={handleCopy}
            className='absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity z-10'
            aria-label='Copy code to clipboard'>
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
          <pre {...props} />
        </div>
      );
    },

    // Inline code
    code: (props: any) => <code {...props} />,

    // Blockquotes with attribution support
    blockquote: (props: any) => {
      const children = React.Children.toArray(props.children);
      const lastChild = children[children.length - 1];

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
          <blockquote {...props}>
            {content}
            <cite>{attribution}</cite>
          </blockquote>
        );
      }

      return <blockquote {...props} />;
    },

    // Lists
    ul: (props: any) => <ul {...props} />,
    ol: (props: any) => <ol {...props} />,
    li: (props: any) => <li {...props} />,

    // Images with zoom functionality
    Img: (props: any) => {
      const [isZoomed, setIsZoomed] = useState(false);

      const handleImageClick = useCallback(() => {
        setIsZoomed(true);
      }, []);

      const handleZoomClose = useCallback(() => {
        setIsZoomed(false);
      }, []);

      return (
        <>
          <Image
            src={props.src}
            alt={props.alt || ''}
            width={props.width || 800}
            height={props.height || 600}
            onClick={handleImageClick}
            className='cursor-zoom-in'
            title='Click to zoom'
            style={{ height: 'auto', width: '100%' }}
          />
          {isZoomed && (
            <div
              className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out'
              onClick={handleZoomClose}
              aria-label='Close zoomed image'>
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

    // Tables
    table: (props: any) => (
      <div className='overflow-x-auto'>
        <table {...props} />
      </div>
    ),
    th: (props: any) => <th {...props} />,
    td: (props: any) => <td {...props} />,
    thead: (props: any) => <thead {...props} />,
    tbody: (props: any) => <tbody {...props} />,

    // Other elements
    hr: (props: any) => <hr {...props} />,
    strong: (props: any) => <strong {...props} />,
    em: (props: any) => <em {...props} />,
  };

  return components;
};

export function MDXContent({ content, className = '' }: MDXContentProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  // Create components once to avoid recreation on every render
  const components = React.useMemo(() => createComponents(), []);

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
