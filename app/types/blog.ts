export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  category: string;
  tags: string[];
  featured?: boolean;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export interface BlogFilters {
  category?: string;
  tag?: string;
  search?: string;
  featured?: boolean;
}
