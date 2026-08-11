import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MotionArticle,
  MotionBlock,
} from "../../../components/Blogs/BlogMotion";
import Particle from "../../../components/Particle";
import {
  DEFAULT_AUTHOR_NAME,
  BLOG_CARD_COPY,
} from "../../../constants/blogs";
import { formatBlogDetailDate } from "../../../lib/blog-utils";
import {
  fetchWordPressGraphQL,
  GET_BLOG_BY_SLUG,
} from "../../../lib/wordpress";
import type { Blog } from "../../../types/blog";

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const data = await fetchWordPressGraphQL<{
      post: Blog | null;
    }>(
      GET_BLOG_BY_SLUG,
      {
        slug,
      },
      { revalidate: 60 }
    );

    return data?.post ?? null;
  } catch (error) {
    console.error("Failed to load blog by slug:", error);
    return null;
  }
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

  const publishedDate = formatBlogDetailDate(blog.date);

  return (
    <main className="min-h-screen overflow-hidden px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(88,230,198,0.13),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(199,112,240,0.18),transparent_30%),linear-gradient(135deg,#080A12_0%,#111827_48%,#160B24_100%)]" />
      <Particle />

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
                  {(author?.name || DEFAULT_AUTHOR_NAME)
                    .charAt(0)
                    .toUpperCase()}
                </div>
              )}

              <div>
                <div className="font-bold text-white">
                  {author?.name || DEFAULT_AUTHOR_NAME}
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
            __html: blog.content || "",
          }}
        />

        {(blog.tags?.nodes.length || 0) > 0 && (
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-2 border-t border-white/10 pt-6">
            {blog.tags?.nodes.map((tag) => (
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
                        <span>{BLOG_CARD_COPY.readArticle}</span>
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
