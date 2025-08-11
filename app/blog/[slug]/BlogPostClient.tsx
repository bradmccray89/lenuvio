// app/blog/[slug]/BlogPostClient.tsx - Fixed with proper unique keys
'use client';

import { useEffect, useState } from 'react';
import { BlogPost } from '@/app/types/blog';
import { Navigation } from '@/app/components';
import { NewsletterStickyBar } from '@/app/components/newsletter/NewsletterHero';
import { MDXContent, ReadingProgress } from '@/app/components/blog/MDXContent';
import Link from 'next/link';
import styles from './BlogPost.module.css';
import {
  MdAccessTime,
  MdCalendarToday,
  MdArrowBack,
  MdShare,
  MdLightbulb,
  MdCode,
  MdTrendingUp,
} from 'react-icons/md';
import { formatDate } from '@/app/lib/blog/utils';
import { LinkedInLogo } from '@/public/icons/LinkedInLogo';
import { TwitterLogo } from '@/public/icons/TwitterLogo';

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const [tableOfContents, setTableOfContents] = useState<
    Array<{ id: string; title: string; level: number }>
  >([]);
  const [activeHeading, setActiveHeading] = useState<string>('');
  // const [isBookmarked, setIsBookmarked] = useState(false);
  type Particle = { id: number; left: number; delay: number; duration: number };
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Fix hydration by only rendering particles on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Helper: slugify (matches rehype-slug)
  function slugify(text: string) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      const left = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = 8 + Math.random() * 4;

      particles.push({
        id: i,
        left,
        delay,
        duration,
      });
    }
    return particles;
  };

  useEffect(() => {
    // Generate particles only once on client mount
    if (isClient) {
      setParticles(generateParticles());
    }
  }, [isClient]);

  // Generate table of contents
  useEffect(() => {
    // Wait for MDX content to render, then generate TOC
    const generateTOC = () => {
      const mdxContent = document.querySelector('[data-mdx-content]');
      if (!mdxContent) return;

      const headings = Array.from(
        mdxContent.querySelectorAll('h2, h3, h4')
      ).map((heading, index) => {
        let id = heading.id;
        if (!id) {
          id = slugify(heading.textContent || '') || `heading-${index}`;
          heading.id = id; // Set the id if missing
        }
        return {
          id,
          title: (heading.textContent || '').replace(/\s*#\s*$/, ''),
          level: parseInt(heading.tagName.charAt(1)),
        };
      });
      setTableOfContents(headings);
    };

    // Use a small delay to ensure MDX content is fully rendered
    const timeoutId = setTimeout(generateTOC, 100);

    // Also listen for when MDX content changes
    const observer = new MutationObserver(() => {
      generateTOC();
    });

    const articleElement = document.querySelector('article');
    if (articleElement) {
      observer.observe(articleElement, {
        childList: true,
        subtree: true,
      });
    }

    // Check if post is bookmarked
    // const bookmarks = JSON.parse(
    //   localStorage.getItem('blog-bookmarks') || '[]'
    // );
    // setIsBookmarked(bookmarks.includes(post.slug));

    // Handle initial hash navigation on page load
    const handleInitialHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            const headerOffset = 120;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 200); // Wait a bit longer for content to fully render
      }
    };

    // Handle initial load with hash
    if (document.readyState === 'complete') {
      handleInitialHash();
    } else {
      window.addEventListener('load', handleInitialHash);
    }

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('load', handleInitialHash);
    };
  }, [post.slug]);

  // Track active heading for TOC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the heading that's most visible in the viewport
        let mostVisible: Element | null = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            mostVisible = entry.target;
            maxRatio = entry.intersectionRatio;
          }
        });

        if (mostVisible) {
          const htmlElement = mostVisible as HTMLElement;
          if (htmlElement.id) {
            setActiveHeading(htmlElement.id);
          }
        }
      },
      {
        rootMargin: '-120px 0% -70% 0%', // Account for fixed header
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    tableOfContents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tableOfContents]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  // const handleBookmark = () => {
  //   const bookmarks = JSON.parse(
  //     localStorage.getItem('blog-bookmarks') || '[]'
  //   );
  //   if (isBookmarked) {
  //     const updated = bookmarks.filter((slug: string) => slug !== post.slug);
  //     localStorage.setItem('blog-bookmarks', JSON.stringify(updated));
  //     setIsBookmarked(false);
  //   } else {
  //     bookmarks.push(post.slug);
  //     localStorage.setItem('blog-bookmarks', JSON.stringify(bookmarks));
  //     setIsBookmarked(true);
  //   }
  // };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'development':
        return <MdCode key={`icon-${category}`} />;
      case 'design':
        return <MdLightbulb key={`icon-${category}`} />;
      case 'technology':
        return <MdTrendingUp key={`icon-${category}`} />;
      default:
        return <MdCode key={`icon-default`} />;
    }
  };

  return (
    <div className={styles.blogPostPage}>
      <Navigation />
      <ReadingProgress />

      {/* Structured Data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            author: {
              '@type': 'Organization',
              name: 'Lenuvio',
              url: 'https://lenuv.io',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Lenuvio',
              url: 'https://lenuv.io',
            },
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://lenuv.io/blog/${post.slug}`,
            },
            articleSection: post.category,
            keywords: post.tags.join(', '),
          }),
        }}
      />

      <article className={styles.article}>
        {/* Enhanced Header */}
        <header className={styles.articleHeader}>
          <div className={styles.headerBackground}>
            {/* Floating Particles - Only render on client */}
            {isClient && (
              <div className={styles.particles}>
                {particles.map((particle) => (
                  <div
                    key={particle.id}
                    className={styles.particle}
                    style={{
                      left: `${particle.left}%`,
                      animationDelay: `${particle.delay}s`,
                      animationDuration: `${particle.duration}s`,
                    }}
                  />
                ))}
              </div>
            )}
            <div className={styles.geometricGrid} />
          </div>

          <div className={styles.headerContent}>
            <nav className={styles.breadcrumb}>
              <Link href='/blog' className={styles.backLink}>
                <MdArrowBack key='back-arrow' />
                Back to Blog
              </Link>
              <span className={styles.breadcrumbSeparator}>/</span>
              <span className={styles.breadcrumbCurrent}>{post.category}</span>
            </nav>

            <div className={styles.postMeta}>
              <span className={styles.category}>
                {getCategoryIcon(post.category)}
                {post.category}
              </span>
              <span className={styles.readTime}>
                <MdAccessTime key='access-time' /> {Math.ceil(post.readingTime)}{' '}
                min read
              </span>
              <span className={styles.publishDate}>
                <MdCalendarToday key='calendar' />
                {formatDate(post.publishedAt)}
              </span>
            </div>

            <h1 className={styles.postTitle}>{post.title}</h1>
            <p className={styles.postExcerpt}>{post.excerpt}</p>

            <div className={styles.postActions}>
              <button
                onClick={handleShare}
                className={styles.actionButton}
                title='Share this post'>
                <MdShare key='share-icon' />
                <span>Share</span>
              </button>
              {/* <button
                onClick={handleBookmark}
                className={`${styles.actionButton} ${isBookmarked ? styles.bookmarked : ''}`}
                title={isBookmarked ? 'Remove bookmark' : 'Bookmark this post'}>
                <MdBookmark key='bookmark-icon' />
                <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
              </button> */}
            </div>
          </div>
        </header>

        {/* Enhanced Content Layout */}
        <div className={styles.articleBody}>
          <div className={styles.articleContainer}>
            <div className={styles.contentWrapper}>
              {/* Main Content */}
              <main className={styles.articleContent}>
                <MDXContent content={post.content} />

                {/* Enhanced Tags Section */}
                {post.tags.length > 0 && (
                  <section className={styles.tagsSection}>
                    <h3 className={styles.tagsSectionTitle}>
                      <MdLightbulb key='tags-icon' />
                      Related Topics
                    </h3>
                    <div className={styles.tags}>
                      {post.tags.map((tag, index) => (
                        <Link
                          key={`tag-${tag}-${index}`}
                          href={`/blog?tag=${encodeURIComponent(tag)}`}
                          className={styles.tag}>
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Removed Author Bio section completely */}
              </main>

              {/* Enhanced Sidebar */}
              <aside className={styles.sidebar}>
                {/* Table of Contents */}
                {tableOfContents.length > 0 && (
                  <div className={styles.tocWidget}>
                    <h3 className={styles.tocTitle}>Contents</h3>
                    <nav className={styles.toc}>
                      {tableOfContents.map(({ id, title, level }, index) => (
                        <a
                          key={`toc-${id}-${index}`}
                          href={`#${id}`}
                          className={`${styles.tocItem} ${styles[`tocLevel${level}`]} ${
                            activeHeading === id ? styles.tocActive : ''
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById(id);
                            if (el) {
                              // Calculate offset for fixed header (Navigation + some padding)
                              const headerOffset = 120; // Adjust based on your header height
                              const elementPosition =
                                el.getBoundingClientRect().top;
                              const offsetPosition =
                                elementPosition +
                                window.pageYOffset -
                                headerOffset;

                              window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth',
                              });

                              // Update the URL hash without scrolling again
                              setTimeout(() => {
                                history.replaceState(null, '', `#${id}`);
                              }, 100);
                            }
                          }}>
                          {title}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Post Stats */}
                <div className={styles.statsWidget}>
                  <h3 className={styles.statsTitle}>Post Stats</h3>
                  <div className={styles.stats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>
                        {Math.ceil(post.readingTime)}
                      </span>
                      <span className={styles.statLabel}>min read</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>
                        {post.content.split(' ').length}
                      </span>
                      <span className={styles.statLabel}>words</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>
                        {post.tags.length}
                      </span>
                      <span className={styles.statLabel}>tags</span>
                    </div>
                  </div>
                </div>

                {/* Share Widget */}
                <div className={styles.shareWidget}>
                  <h3 className={styles.shareTitle}>Share This Post</h3>
                  <div className={styles.shareButtons}>
                    <button
                      onClick={handleShare}
                      className={styles.shareButton}>
                      <MdShare key='share-widget-icon' /> Share
                    </button>
                    <button
                      onClick={() => {
                        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`;
                        window.open(twitterUrl, '_blank');
                      }}
                      className={styles.shareButton}>
                      <TwitterLogo />
                      Twitter
                    </button>
                    <button
                      onClick={() => {
                        const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
                        window.open(linkedinUrl, '_blank');
                      }}
                      className={styles.shareButton}>
                      <LinkedInLogo />
                      LinkedIn
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Enhanced Related Posts */}
        {relatedPosts.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.relatedContainer}>
              <div className={styles.relatedHeader}>
                <h2 className={styles.relatedTitle}>Continue Reading</h2>
                <p className={styles.relatedSubtitle}>
                  More insights in {post.category}
                </p>
              </div>
              <div className={styles.relatedGrid}>
                {relatedPosts.map((relatedPost, index) => (
                  <Link
                    key={`related-${relatedPost.slug}-${index}`}
                    href={`/blog/${relatedPost.slug}`}
                    className={styles.relatedCard}>
                    <div className={styles.relatedContent}>
                      <div className={styles.relatedMeta}>
                        <span className={styles.relatedCategory}>
                          {getCategoryIcon(relatedPost.category)}
                          {relatedPost.category}
                        </span>
                        <span className={styles.relatedReadTime}>
                          <MdAccessTime key={`related-time-${index}`} />{' '}
                          {Math.ceil(relatedPost.readingTime)} min
                        </span>
                      </div>
                      <h3 className={styles.relatedPostTitle}>
                        {relatedPost.title}
                      </h3>
                      <p className={styles.relatedExcerpt}>
                        {relatedPost.excerpt}
                      </p>
                      <div className={styles.relatedTags}>
                        {relatedPost.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={`related-tag-${tag}-${index}-${tagIndex}`}
                            className={styles.relatedTag}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
      <NewsletterStickyBar />
    </div>
  );
}
