'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { BlogPost } from '@/app/types/blog';
import { Navigation } from '@/app/components';
import { Footer } from '@/app/components/footer/Footer';
import Link from 'next/link';
import styles from './Blog.module.css';
import { MdSearch, MdAccessTime, MdCalendarToday } from 'react-icons/md';
import { formatDate } from '@/app/lib/blog/utils';
import { useSearchParams, useRouter } from 'next/navigation';

interface BlogClientPageProps {
  initialPosts: BlogPost[];
  featuredPosts: BlogPost[];
  categories: string[];
  tags: string[];
}

export function BlogClientPage({
  initialPosts,
  featuredPosts,
  categories,
  tags,
}: BlogClientPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get('search') || ''
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get('category') || ''
  );
  const [selectedTag, setSelectedTag] = useState<string>(
    searchParams.get('tag') || ''
  );
  const [currentPage, setCurrentPage] = useState(1);
  type Particle = { id: number; left: number; delay: number; duration: number };
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);
  const postsPerPage = 6;

  // Update URL when filters change
  const updateURL = (newFilters: {
    search?: string;
    category?: string;
    tag?: string;
  }) => {
    const params = new URLSearchParams(searchParams);

    // Update or remove search param
    if (newFilters.search !== undefined) {
      if (newFilters.search) {
        params.set('search', newFilters.search);
      } else {
        params.delete('search');
      }
    }

    // Update or remove category param
    if (newFilters.category !== undefined) {
      if (newFilters.category) {
        params.set('category', newFilters.category);
      } else {
        params.delete('category');
      }
    }

    // Update or remove tag param
    if (newFilters.tag !== undefined) {
      if (newFilters.tag) {
        params.set('tag', newFilters.tag);
      } else {
        params.delete('tag');
      }
    }

    const newURL = params.toString() ? `?${params.toString()}` : '/blog';

    // Use replace to avoid adding to history and maintain scroll position
    router.replace(newURL, { scroll: false });
  };

  // Fix hydration by only rendering particles on client
  useEffect(() => {
    setIsClient(true);
    setSearchTerm(searchParams.get('search') || '');
    setSelectedCategory(searchParams.get('category') || '');
    setSelectedTag(searchParams.get('tag') || '');
    setCurrentPage(1);
  }, [searchParams]);

  // Filter posts based on search and filters
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesSearch =
        !searchTerm ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        !selectedCategory ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesTag =
        !selectedTag ||
        post.tags.some(
          (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
        );

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [initialPosts, searchTerm, selectedCategory, selectedTag]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    updateURL({ search: searchTerm });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    updateURL({ category });
  };

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
    setCurrentPage(1);
    updateURL({ tag });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
    setCurrentPage(1);
    router.replace('/blog', { scroll: false });
  };

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

  return (
    <div className={styles.blogPage}>
      <Navigation />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
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

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine1}>Engineering</span>
            <span className={styles.titleLine2}>Insights</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Deep dives into development challenges, technical solutions, and
            industry insights from the world of full-stack engineering
          </p>
        </div>
      </section>

      <div className={styles.blogContainer}>
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className={styles.featuredSection}>
            <h2 className={styles.sectionTitle}>Featured Posts</h2>
            <div className={styles.featuredGrid}>
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={styles.featuredCard}>
                  <div className={styles.featuredContent}>
                    <div className={styles.postMeta}>
                      <span className={styles.category}>{post.category}</span>
                      <span className={styles.readTime}>
                        <MdAccessTime /> {Math.ceil(post.readingTime)} min read
                      </span>
                    </div>
                    <h3 className={styles.featuredTitle}>{post.title}</h3>
                    <p className={styles.featuredExcerpt}>{post.excerpt}</p>
                    <div className={styles.postFooter}>
                      <span className={styles.date}>
                        <MdCalendarToday />
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className={styles.blogContent}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Search */}
            <div className={styles.searchWidget}>
              <h3 className={styles.widgetTitle}>Search</h3>
              <form onSubmit={handleSearch} className={styles.searchForm}>
                <div className={styles.searchInputWrapper}>
                  <MdSearch className={styles.searchIcon} />
                  <input
                    type='text'
                    placeholder='Search posts...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                  />
                </div>
                <button type='submit' className={styles.searchButton}>
                  Search
                </button>
              </form>
            </div>

            {/* Categories */}
            <div className={styles.categoriesWidget}>
              <h3 className={styles.widgetTitle}>Categories</h3>
              <div className={styles.categoryList}>
                <button
                  onClick={() => {
                    handleCategoryChange('');
                  }}
                  className={`${styles.categoryItem} ${!selectedCategory ? styles.active : ''}`}>
                  All Posts
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      handleCategoryChange(category);
                    }}
                    className={`${styles.categoryItem} ${selectedCategory === category ? styles.active : ''}`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className={styles.tagsWidget}>
                <h3 className={styles.widgetTitle}>Tags</h3>
                <div className={styles.tagCloud}>
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        handleTagChange(tag);
                      }}
                      className={`${styles.tagItem} ${selectedTag === tag ? styles.active : ''}`}>
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Clear Filters */}
            {(selectedCategory || selectedTag || searchTerm) && (
              <button onClick={clearFilters} className={styles.clearFilters}>
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Main Content */}
          <main className={styles.mainContent}>
            {/* Active Filters */}
            {(selectedCategory || selectedTag || searchTerm) && (
              <div className={styles.activeFilters}>
                <div className={styles.activeFiltersContent}>
                  <span className={styles.filterLabel}>Active filters:</span>
                  <div className={styles.filterTagsContainer}>
                    {searchTerm && (
                      <span className={styles.filterTag}>
                        Search: &quot;{searchTerm}&quot;
                      </span>
                    )}
                    {selectedCategory && (
                      <span className={styles.filterTag}>
                        Category: {selectedCategory}
                      </span>
                    )}
                    {selectedTag && (
                      <span className={styles.filterTag}>
                        Tag: {selectedTag}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={clearFilters}
                  className={styles.clearFiltersTop}>
                  Clear All
                </button>
              </div>
            )}

            {/* Posts Grid */}
            {paginatedPosts.length > 0 ? (
              <>
                <div className={styles.postsGrid}>
                  {paginatedPosts.map((post) => (
                    <article key={post.slug} className={styles.postCard}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className={styles.postLink}>
                        <div className={styles.postContent}>
                          <div className={styles.postMeta}>
                            <span className={styles.category}>
                              {post.category}
                            </span>
                            <span className={styles.readTime}>
                              <MdAccessTime /> {Math.ceil(post.readingTime)} min
                              read
                            </span>
                          </div>
                          <h2 className={styles.postTitle}>{post.title}</h2>
                          <p className={styles.postExcerpt}>{post.excerpt}</p>
                          <div className={styles.postFooter}>
                            <span className={styles.date}>
                              <MdCalendarToday />
                              {formatDate(post.publishedAt)}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className={styles.pagination}>
                    <button
                      onClick={() =>
                        setCurrentPage(Math.max(1, currentPage - 1))
                      }
                      disabled={currentPage <= 1}
                      className={styles.paginationButton}>
                      Previous
                    </button>

                    <div className={styles.paginationNumbers}>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`${styles.paginationNumber} ${currentPage === page ? styles.active : ''}`}>
                            {page}
                          </button>
                        )
                      )}
                    </div>

                    <button
                      onClick={() =>
                        setCurrentPage(Math.min(totalPages, currentPage + 1))
                      }
                      disabled={currentPage >= totalPages}
                      className={styles.paginationButton}>
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className={styles.noPosts}>
                <h3>No posts found</h3>
                <p>Try adjusting your filters or search terms.</p>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
