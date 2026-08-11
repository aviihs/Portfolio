import { notFound } from "next/navigation";
import "./slug.css";

const WORDPRESS_GRAPHQL_URL =
  process.env.WORDPRESS_GRAPHQL_URL ||
  "https://dev-blog-post-cms.pantheonsite.io/graphql";

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

      featuredImage {
        node {
          sourceUrl
          altText
        }
      }

      author {
        node {
          name
          avatar {
            url
          }
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

type RelatedPost = {
  databaseId: number;
  title: string;
  slug: string;
  excerpt: string | null;
  featuredImage?: {
    node?: {
      sourceUrl: string;
      altText: string | null;
    } | null;
  } | null;
};

type Blog = {
  databaseId: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  date: string;
  modified: string;

  featuredImage?: {
    node?: {
      sourceUrl: string;
      altText: string | null;
    } | null;
  } | null;

  author?: {
    node?: {
      name: string;
      avatar?: {
        url: string;
      } | null;
    } | null;
  } | null;

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

type GraphQLResponse = {
  data?: {
    post: Blog | null;
  };
  errors?: {
    message: string;
  }[];
};

async function getBlog(slug: string): Promise<Blog | null> {
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

  const text = await response.text();

  if (!response.ok) {
    console.error(
      "WordPress GraphQL error:",
      response.status,
      text.slice(0, 1000)
    );

    throw new Error("Failed to fetch blog from WordPress");
  }

  let result: GraphQLResponse;

  try {
    result = JSON.parse(text);
  } catch {
    console.error(
      "WordPress GraphQL returned non-JSON:",
      text.slice(0, 1000)
    );

    throw new Error("WordPress returned invalid JSON");
  }

  if (result.errors?.length) {
    console.error("GraphQL errors:", result.errors);

    throw new Error(result.errors[0]?.message || "GraphQL query failed");
  }

  return result.data?.post ?? null;
}

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: BlogPageProps) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title:
      blog.seo?.title ||
      blog.title,

    description:
      blog.seo?.metaDesc ||
      blog.blog?.subtitle ||
      undefined,

    alternates: {
      canonical:
        blog.seo?.canonical ||
        `/blogs/${blog.slug}`,
    },

    openGraph: {
      title:
        blog.seo?.title ||
        blog.title,

      description:
        blog.seo?.metaDesc ||
        blog.blog?.subtitle ||
        undefined,

      images: blog.featuredImage?.node?.sourceUrl
        ? [
            {
              url: blog.featuredImage.node.sourceUrl,
              alt:
                blog.featuredImage.node.altText ||
                blog.title,
            },
          ]
        : [],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: BlogPageProps) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  const image = blog.featuredImage?.node;

  const author = blog.author?.node;

  const relatedPosts =
    blog.blog?.relatedPosts?.nodes || [];

  const publishedDate = new Date(
    blog.date
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="blog-detail-page">
      <article className="blog-detail-container">
        <header className="blog-detail-header">
          {blog.categories.nodes.length > 0 && (
            <div className="blog-detail-category">
              {blog.categories.nodes[0].name}
            </div>
          )}

          <h1 className="blog-detail-title">
            {blog.title}
          </h1>

          {blog.blog?.subtitle && (
            <p className="blog-detail-subtitle">
              {blog.blog.subtitle}
            </p>
          )}

          <div className="blog-detail-meta">
            {author?.avatar?.url && (
              <img
                src={author.avatar.url}
                alt={author.name}
                className="blog-author-avatar"
              />
            )}

            <div>
              <div className="blog-author-name">
                {author?.name || "Shiva Bhusal"}
              </div>

              <div className="blog-meta-info">
                {publishedDate}

                {blog.blog?.readingTime && (
                  <>
                    <span>•</span>
                    <span>
                      {blog.blog.readingTime} min read
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        {image?.sourceUrl && (
          <div className="blog-detail-image-wrapper">
            <img
              src={image.sourceUrl}
              alt={
                image.altText ||
                blog.title
              }
              className="blog-detail-image"
            />
          </div>
        )}

        <div
          className="blog-detail-content"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />

        {blog.tags.nodes.length > 0 && (
          <div className="blog-tags">
            {blog.tags.nodes.map((tag) => (
              <span
                key={tag.slug}
                className="blog-tag"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        )}

        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <div className="related-posts-heading">
              <span>Keep Reading</span>

              <h2>
                Related <strong>Articles</strong>
              </h2>
            </div>

            <div className="related-posts-grid">
              {relatedPosts.map((post) => {
                const relatedImage =
                  post.featuredImage?.node;

                return (
                  <a
                    key={post.databaseId}
                    href={`/blogs/${post.slug}`}
                    className="related-post-card"
                  >
                    {relatedImage?.sourceUrl && (
                      <img
                        src={
                          relatedImage.sourceUrl
                        }
                        alt={
                          relatedImage.altText ||
                          post.title
                        }
                      />
                    )}

                    <div className="related-post-body">
                      <h3>{post.title}</h3>

                      {post.excerpt && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              post.excerpt,
                          }}
                        />
                      )}

                      <span>
                        Read article →
                      </span>
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