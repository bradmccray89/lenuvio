/* eslint-disable @typescript-eslint/no-explicit-any */
// app/components/blog/MDXContent.tsx - Fixed with working buttons and better responsive styles
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

// Enhanced custom components for MDX with working functionality
const createComponents = () => {
  // Working copy button component
  const CopyButton = ({
    text,
    className = '',
  }: {
    text: string;
    className?: string;
  }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(
      async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy text:', err);
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      },
      [text]
    );

    return (
      <button
        onClick={handleCopy}
        className={`${className} ${copied ? 'bg-green-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'} px-3 py-1 rounded text-xs font-medium transition-all duration-200 z-10`}
        title={copied ? 'Copied!' : 'Copy to clipboard'}
        aria-label={copied ? 'Copied!' : 'Copy to clipboard'}>
        {copied ? '✓ Copied!' : 'Copy'}
      </button>
    );
  };

  // Working link copy button for headings
  const LinkCopyButton = ({ id }: { id: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = useCallback(
      async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        try {
          const url = `${window.location.origin}${window.location.pathname}#${id}`;
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy link:', err);
        }
      },
      [id]
    );

    return (
      <button
        onClick={handleCopyLink}
        className={`ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 ${copied ? 'text-green-400' : 'text-cyan-400 hover:text-cyan-300'} p-1 rounded hover:bg-cyan-400/10`}
        title={copied ? 'Link copied!' : 'Copy link to this section'}
        aria-label='Copy link to this section'>
        {copied ? '✓' : '#'}
      </button>
    );
  };

  // Working image zoom component
  const ZoomableImage = (props: any) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleImageClick = useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      setIsZoomed(true);
    }, []);

    const handleZoomClose = useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      setIsZoomed(false);
    }, []);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsZoomed(false);
      }
    }, []);

    useEffect(() => {
      if (isZoomed) {
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.body.style.overflow = 'unset';
        };
      }
    }, [isZoomed, handleKeyDown]);

    return (
      <>
        <div className='relative group cursor-zoom-in my-6'>
          <Image
            src={props.src}
            alt={props.alt || ''}
            width={props.width || 800}
            height={props.height || 600}
            onClick={handleImageClick}
            className='w-full h-auto rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl'
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 rounded-lg flex items-center justify-center'>
            <span className='opacity-0 group-hover:opacity-100 bg-black/70 text-white px-3 py-1 rounded-full text-sm transition-opacity duration-200'>
              Click to zoom
            </span>
          </div>
        </div>

        {isZoomed && (
          <div
            className='fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] cursor-zoom-out p-4'
            onClick={handleZoomClose}>
            <div className='relative max-w-full max-h-full'>
              <Image
                src={props.src}
                alt={props.alt || ''}
                width={props.width || 1200}
                height={props.height || 900}
                className='max-w-full max-h-full object-contain'
                style={{ width: 'auto', height: 'auto' }}
              />
              <button
                onClick={handleZoomClose}
                className='absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors text-xl'
                aria-label='Close zoom view'>
                ×
              </button>
            </div>
          </div>
        )}
      </>
    );
  };

  const components = {
    // Enhanced headings with working copy links
    h1: (props: any) => (
      <h1 className='group relative' {...props}>
        {props.children}
        {props.id && <LinkCopyButton id={props.id} />}
      </h1>
    ),

    h2: (props: any) => (
      <h2 className='group relative' {...props}>
        {props.children}
        {props.id && <LinkCopyButton id={props.id} />}
      </h2>
    ),

    h3: (props: any) => (
      <h3 className='group relative' {...props}>
        {props.children}
        {props.id && <LinkCopyButton id={props.id} />}
      </h3>
    ),

    h4: (props: any) => <h4 {...props} />,
    h5: (props: any) => <h5 {...props} />,
    h6: (props: any) => <h6 {...props} />,

    // Paragraphs
    p: (props: any) => <p {...props} />,

    // Links with external indicators
    a: (props: any) => {
      const isExternal = props.href?.startsWith('http');

      return (
        <a
          {...props}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}>
          {props.children}
          {isExternal && (
            <span
              className='ml-1 text-xs opacity-70'
              aria-label='External link'>
              ↗
            </span>
          )}
        </a>
      );
    },

    // Enhanced code blocks with working copy functionality
    Pre: (props: any) => {
      // Extract code content more reliably
      const getCodeContent = (children: any): string => {
        if (typeof children === 'string') return children;
        if (
          React.isValidElement(children) &&
          typeof children.props === 'object' &&
          children.props !== null &&
          'children' in children.props
        ) {
          return getCodeContent(children.props.children);
        }
        if (Array.isArray(children)) {
          return children.map(getCodeContent).join('');
        }
        return String(children || '');
      };

      const codeContent = getCodeContent(props.children);

      return (
        <div className='relative group my-6'>
          <CopyButton
            text={codeContent}
            className='absolute top-3 right-3 opacity-0 group-hover:opacity-100'
          />
          <pre {...props} className='overflow-x-auto' />
        </div>
      );
    },

    // Inline code with better styling
    code: (props: any) => {
      // Don't apply inline styling if it's inside a pre block
      if (props.className?.includes('language-')) {
        return <code {...props} />;
      }

      return <code {...props} />;
    },

    // Enhanced blockquotes
    blockquote: (props: any) => {
      const children = React.Children.toArray(props.children);
      const lastChild = children[children.length - 1];

      // Handle attribution (text starting with —)
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
            <div>{content}</div>
            <cite className='block mt-3 text-sm font-medium text-slate-400 not-italic'>
              — {attribution}
            </cite>
          </blockquote>
        );
      }

      return <blockquote {...props} />;
    },

    // Lists
    ul: (props: any) => <ul {...props} />,
    ol: (props: any) => <ol {...props} />,
    li: (props: any) => <li {...props} />,

    // Enhanced images with zoom
    img: ZoomableImage,

    // Enhanced tables
    table: (props: any) => (
      <div className='overflow-x-auto my-6 rounded-lg border border-slate-700'>
        <table {...props} className='w-full' />
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

    // Custom callout component
    Callout: ({
      type = 'info',
      children,
      title,
    }: {
      type?: 'info' | 'warning' | 'success' | 'error';
      children: React.ReactNode;
      title?: string;
    }) => {
      const typeStyles = {
        info: 'bg-blue-500/10 border-blue-500/30 text-blue-100',
        warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-100',
        success: 'bg-green-500/10 border-green-500/30 text-green-100',
        error: 'bg-red-500/10 border-red-500/30 text-red-100',
      };

      const icons = {
        info: 'ℹ️',
        warning: '⚠️',
        success: '✅',
        error: '❌',
      };

      return (
        <div className={`my-6 p-4 rounded-lg border ${typeStyles[type]}`}>
          <div className='flex items-start gap-3'>
            <span className='text-lg flex-shrink-0 mt-0.5'>{icons[type]}</span>
            <div className='flex-1'>
              {title && (
                <h4 className='font-semibold mb-2 text-current'>{title}</h4>
              )}
              <div className='text-current [&>*]:text-current'>{children}</div>
            </div>
          </div>
        </div>
      );
    },
  };

  return components;
};

export function MDXContent({ content, className = '' }: MDXContentProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  // Memoize components to prevent recreation
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
                  behavior: 'append',
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
        <div className='flex items-center gap-3'>
          <div className='animate-spin rounded-full h-6 w-6 border-2 border-cyan-400 border-t-transparent'></div>
          <span className='text-slate-400 font-medium'>Loading content...</span>
        </div>
      </div>
    );
  }

  if (!mdxSource) {
    return (
      <div className='text-center py-12'>
        <div className='bg-red-500/10 border border-red-500/30 rounded-lg p-6 max-w-md mx-auto'>
          <p className='text-red-400 font-medium'>Error loading content</p>
          <p className='text-red-300/70 text-sm mt-1'>
            Please try refreshing the page
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.mdxWrapper} ${className}`}>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
}

// Enhanced reading progress component
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

      // More accurate progress calculation
      const startPoint = Math.max(0, articleTop - windowHeight * 0.1);
      const endPoint = articleTop + articleHeight - windowHeight * 0.9;
      const scrollableDistance = Math.max(1, endPoint - startPoint);
      const scrollProgress =
        Math.max(0, scrollTop - startPoint) / scrollableDistance;

      setProgress(Math.max(0, Math.min(1, scrollProgress)));
    };

    const throttledUpdate = () => {
      requestAnimationFrame(updateProgress);
    };

    // Initial calculation
    updateProgress();

    window.addEventListener('scroll', throttledUpdate, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledUpdate);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50'>
      <div
        className='h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ease-out'
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
