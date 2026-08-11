import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MotionArticle,
  MotionBlock,
} from "../../../components/Blogs/BlogMotion";

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
            ... on Post {
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
    <main className="min-h-screen overflow-hidden px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(88,230,198,0.13),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(199,112,240,0.18),transparent_30%),linear-gradient(135deg,#080A12_0%,#111827_48%,#160B24_100%)]" />

      <MotionArticle className="mx-auto max-w-5xl">
        <Link
          href="/blogs"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-bold text-white/75 no-underline backdrop-blur transition hover:border-mintGlass/45 hover:text-mintGlass"
        >
          <span>←</span>
          <span>Back to journal</span>
        </Link>

        <header>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            {blog.categories.nodes.length > 0 && (
              <span className="rounded-full border border-mintGlass/30 bg-mintGlass/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-mintGlass">
                {blog.categories.nodes[0].name}
              </span>
            )}

            {blog.blog?.featuredPost && (
              <span className="rounded-full bg-amberSoft px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-ink">
                Featured
              </span>
            )}
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            {blog.title}
          </h1>

          {blog.blog?.subtitle && (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
              {blog.blog.subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              {author?.avatar?.url ? (
                <img
                  src={author.avatar.url}
                  alt={author.name}
                  className="h-12 w-12 rounded-full object-cover ring-1 ring-white/15"
                />
              ) : (
                <div className="grid h-12 w-12 place-items-center rounded-full bg-violetMist text-sm font-black">
                  {(author?.name || "Shiva Bhusal")
                    .charAt(0)
                    .toUpperCase()}
                </div>
              )}

              <div>
                <div className="font-bold text-white">
                  {author?.name || "Shiva Bhusal"}
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm text-white/55">
                  <span>{publishedDate}</span>

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

            <span className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white/55">
              Article
            </span>
          </div>
        </header>

        {image?.sourceUrl && (
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] shadow-glow">
            <img
              src={image.sourceUrl}
              alt={
                image.altText ||
                blog.title
              }
              className="max-h-[580px] w-full object-cover"
            />
          </div>
        )}

        <div
          className="blog-content mx-auto mt-12 max-w-3xl"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />

        {blog.tags.nodes.length > 0 && (
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-2 border-t border-white/10 pt-6">
            {blog.tags.nodes.map((tag) => (
              <span
                key={tag.slug}
                className="rounded-full bg-violetMist/10 px-3 py-1.5 text-sm font-bold text-violet-200"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        )}

        {relatedPosts.length > 0 && (
          <MotionBlock className="mt-20">
            <div className="mb-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-mintGlass">
                Keep Reading
              </span>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Related{" "}
                <strong className="bg-gradient-to-r from-mintGlass to-violetMist bg-clip-text text-transparent">
                  Articles
                </strong>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {relatedPosts.map((post) => {
                const relatedImage =
                  post.featuredImage?.node;

                return (
                  <Link
                    key={post.databaseId}
                    href={`/blogs/${post.slug}`}
                    className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.055] text-white no-underline shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-mintGlass/45 hover:shadow-glow"
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
                        className="h-48 w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    )}

                    <div className="p-5">
                      <h3 className="line-clamp-2 text-lg font-extrabold leading-snug text-white">
                        {post.title}
                      </h3>

                      {post.excerpt && (
                        <div
                          className="mt-3 line-clamp-3 text-sm leading-7 text-white/58"
                          dangerouslySetInnerHTML={{
                            __html:
                              post.excerpt,
                          }}
                        />
                      )}

                      <small className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-mintGlass">
                        <span>Read article</span>
                        <span className="transition duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </small>
                    </div>
                  </Link>
                );
              })}
            </div>
          </MotionBlock>
        )}
      </MotionArticle>
    </main>
  );
}
