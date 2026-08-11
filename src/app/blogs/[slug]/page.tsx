import { notFound } from "next/navigation";
import type { Metadata } from "next";
import "./slug.css";

const WORDPRESS_GRAPHQL_URL =
  process.env.WORDPRESS_GRAPHQL_URL ||
  "https://dev-blog-post-cms.pantheonsite.io/graphql";

type BlogPost = {
  databaseId: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  modified: string;

  author?: {
    node?: {
      name: string;
      slug: string;
      avatar?: {
        url: string;
      };
    };
  };

  featuredImage?: {
    node?: {
      sourceUrl: string;
      altText?: string;
    };
  };

  categories: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };

  tags: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };

  blog?: {
    subtitle?: string;
    readingTime?: number;
    featuredPost?: boolean;
    customCtaUrl?: string;

    relatedPosts?: {
      nodes: {
        databaseId: number;
        title: string;
        slug: string;
        excerpt: string;

        featuredImage?: {
          node?: {
            sourceUrl: string;
            altText?: string;
          };
        };

        blog?: {
          subtitle?: string;
          readingTime?: number;
        };
      }[];
    };
  };

  seo?: {
    title?: string;
    metaDesc?: string;
    canonical?: string;
  };
};

type GraphQLResponse = {
  data: {
    post: BlogPost | null;
  };
};

const GET_BLOG_BY_SLUG = `
  query GetBlogBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      databaseId
      title
      slug
      content
      excerpt
      date
      modified

      author {
        node {
          name
          slug
          avatar {
            url
          }
        }
      }

      featuredImage {
        node {
          sourceUrl
          altText
        }
      }

      categories {
        nodes {
          name
          slug
        }
      }

      tags {
        nodes {
          name
          slug
        }
      }

      blog {
        subtitle
        readingTime
        featuredPost
        customCtaUrl

        relatedPosts {
          nodes {
            databaseId
            title
            slug
            excerpt

            featuredImage {
              node {
                sourceUrl
                altText
              }
            }

            blog {
              subtitle
              readingTime
            }
          }
        }
      }

      seo {
        title
        metaDesc
        canonical
      }
    }
  }
`;

async function getBlog(slug: string): Promise<BlogPost | null> {
  const response = await fetch(WORDPRESS_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_BLOG_BY_SLUG,
      variables: {
        slug,
      },
    }),
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }

  const result: GraphQLResponse = await response.json();

  return result.data.post;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seo?.title || blog.title,
    description:
      blog.seo?.metaDesc ||
      blog.blog?.subtitle ||
      "Read this article.",
    alternates: {
      canonical: blog.seo?.canonical || `/blogs/${blog.slug}`,
    },
    openGraph: {
      title: blog.seo?.title || blog.title,
      description:
        blog.seo?.metaDesc ||
        blog.blog?.subtitle ||
        "Read this article.",
      images: blog.featuredImage?.node?.sourceUrl
        ? [blog.featuredImage.node.sourceUrl]
        : [],
      type: "article",
    },
  };
}

export default async function BlogDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const image = blog.featuredImage?.node;
  const author = blog.author?.node;
  const category = blog.categories.nodes[0];

  return (
    <main className="single-blog-page">
      <article className="single-blog-container">

        {/* Category */}
        {category && (
          <div className="single-blog-category">
            {category.name}
          </div>
        )}

        {/* Title */}
        <h1 className="single-blog-title">
          {blog.title}
        </h1>

        {/* Subtitle */}
        {blog.blog?.subtitle && (
          <p className="single-blog-subtitle">
            {blog.blog.subtitle}
          </p>
        )}

        {/* Author / Meta */}
        <div className="single-blog-meta">

          <div className="single-blog-author">
            {author?.avatar?.url && (
              <img
                src={author.avatar.url}
                alt={author.name}
                className="single-blog-author-avatar"
              />
            )}

            <div>
              <div className="single-blog-author-name">
                {author?.name || "Author"}
              </div>

              <div className="single-blog-date">
                {formatDate(blog.date)}
              </div>
            </div>
          </div>

          {blog.blog?.readingTime && (
            <div className="single-blog-reading-time">
              {blog.blog.readingTime} min read
            </div>
          )}
        </div>

        {/* Hero Image */}
        {image?.sourceUrl && (
          <div className="single-blog-hero">
            <img
              src={image.sourceUrl}
              alt={image.altText || blog.title}
            />
          </div>
        )}

        {/* Content */}
        <div
          className="single-blog-content"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />

        {/* Tags */}
        {blog.tags.nodes.length > 0 && (
          <div className="single-blog-tags">
            {blog.tags.nodes.map((tag) => (
              <span key={tag.slug}>
                #{tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Related Posts */}
        {blog.blog?.relatedPosts?.nodes &&
          blog.blog.relatedPosts.nodes.length > 0 && (
            <section className="related-blog-section">
              <div className="related-blog-heading">
                <span>Keep reading</span>
                <h2>
                  Related <strong>Articles</strong>
                </h2>
              </div>

              <div className="related-blog-grid">
                {blog.blog.relatedPosts.nodes.map((related) => {
                  const relatedImage =
                    related.featuredImage?.node;

                  return (
                    <a
                      key={related.databaseId}
                      href={`/blogs/${related.slug}`}
                      className="related-blog-card"
                    >
                      {relatedImage?.sourceUrl && (
                        <img
                          src={relatedImage.sourceUrl}
                          alt={
                            relatedImage.altText ||
                            related.title
                          }
                        />
                      )}

                      <div className="related-blog-body">
                        <h3>{related.title}</h3>

                        {related.blog?.subtitle && (
                          <p>
                            {related.blog.subtitle}
                          </p>
                        )}

                        {related.blog?.readingTime && (
                          <small>
                            {related.blog.readingTime} min read
                          </small>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>
            </section>
          )}
      </article>
    </main>
  );
}