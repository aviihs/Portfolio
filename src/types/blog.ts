export type BlogImage = {
  node?: {
    sourceUrl: string;
    altText: string | null;
  } | null;
} | null;

export type BlogAuthor = {
  node?: {
    name: string;
    avatar?: {
      url: string;
    } | null;
  } | null;
} | null;

export type BlogTaxonomy = {
  nodes: {
    name: string;
    slug: string;
  }[];
};

export type RelatedPost = {
  databaseId: number;
  title: string;
  slug: string;
  excerpt: string | null;
  featuredImage?: BlogImage;
};

export type Blog = {
  databaseId: number;
  title: string;
  slug: string;
  excerpt: string | null;
  date: string;
  modified: string;
  content?: string;
  featuredImage?: BlogImage;
  author?: BlogAuthor;
  categories: BlogTaxonomy;
  tags?: BlogTaxonomy;
  blog?: {
    subtitle: string | null;
    readingTime: number | null;
    featuredPost: boolean;
    relatedPosts?: {
      nodes: RelatedPost[];
    } | null;
  } | null;
  seo?: {
    title: string | null;
    metaDesc: string | null;
    canonical: string | null;
  } | null;
};

export type BlogConnection = {
  nodes: Blog[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
};
