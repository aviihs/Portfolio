"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Blog = {
  databaseId: number;
  slug: string;

  title: string;

  excerpt: string;

  date: string;

  modified: string;

  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string | null;
    } | null;
  } | null;

  author: {
    node: {
      name: string;
      avatar: {
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

  blog: {
    subtitle: string | null;
    readingTime: number | null;
    featuredPost: boolean;
  } | null;
};

type BlogResponse = {
  nodes: Blog[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
};

function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .trim();
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [pageInfo, setPageInfo] =
    useState<BlogResponse["pageInfo"] | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [cursorHistory, setCursorHistory] = useState<
    (string | null)[]
  >([null]);

  const [currentPage, setCurrentPage] = useState(1);

  async function fetchBlogs(after: string | null) {
    try {
      setLoading(true);
      setError("");

      const url = new URL(
        "/api/blogs",
        window.location.origin
      );

      url.searchParams.set("first", "9");

      if (after) {
        url.searchParams.set("after", after);
      }

      const response = await fetch(url.toString());

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data: BlogResponse = await response.json();

      setBlogs(data.nodes);
      setPageInfo(data.pageInfo);
    } catch (error) {
      console.error(error);
      setError("Failed to load blogs.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogs(null);
  }, []);

  function goNext() {
    if (!pageInfo?.endCursor) return;

    setCursorHistory((prev) => [
      ...prev,
      pageInfo.endCursor,
    ]);

    setCurrentPage((prev) => prev + 1);

    fetchBlogs(pageInfo.endCursor);
  }

  function goPrevious() {
    if (currentPage <= 1) return;

    const previousCursor =
      cursorHistory[currentPage - 2] ?? null;

    setCursorHistory((prev) => prev.slice(0, -1));

    setCurrentPage((prev) => prev - 1);

    fetchBlogs(previousCursor);
  }

  if (loading) {
    return (
      <main className="min-h-screen px-4 py-28 text-white">
        <div className="mx-auto grid min-h-[420px] max-w-6xl place-items-center">
          <div className="text-center">
            <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-2 border-white/10 border-t-violetMist" />
            <p className="text-sm text-white/60">Loading stories...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen px-4 py-28 text-white">
        <div className="mx-auto grid min-h-[420px] max-w-6xl place-items-center">
          <div className="rounded-2xl border border-red-300/15 bg-red-400/10 px-6 py-5 text-sm text-red-100">
            {error}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(88,230,198,0.14),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(199,112,240,0.18),transparent_30%),linear-gradient(135deg,#080A12_0%,#111827_48%,#160B24_100%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-mintGlass shadow-glow backdrop-blur">
            Journal
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Ideas, stories &{" "}
            <span className="bg-gradient-to-r from-mintGlass via-white to-violetMist bg-clip-text text-transparent">
              things I learn.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Long-form notes on development, design,
            SEO, and building useful digital products.
          </p>
        </motion.section>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, index) => {
            const image =
              blog.featuredImage?.node;

            const author =
              blog.author?.node;

            const subtitle =
              blog.blog?.subtitle ||
              stripHtml(blog.excerpt);

            const category =
              blog.categories.nodes[0];

            return (
              <motion.article
                key={blog.databaseId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.06, 0.24),
                  ease: "easeOut",
                }}
                className="group"
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="block h-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.055] text-white no-underline shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-mintGlass/45 hover:bg-white/[0.075] hover:shadow-glow"
                >
                  <div className="relative h-60 overflow-hidden bg-white/5">
                    {image?.sourceUrl ? (
                      <img
                        src={image.sourceUrl}
                        alt={
                          image.altText ||
                          blog.title
                        }
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="grid h-full place-items-center bg-gradient-to-br from-white/10 to-violetMist/10 text-sm text-white/40">
                        No image
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

                    {category && (
                      <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-ink/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                        {category.name}
                      </span>
                    )}

                    {blog.blog?.featuredPost && (
                      <span className="absolute right-4 top-4 rounded-full bg-mintGlass px-3 py-1.5 text-xs font-black uppercase tracking-wider text-ink">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="flex min-h-[280px] flex-col p-5">
                    <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-white/50">
                      <div className="inline-flex items-center gap-2 text-white/75">
                        {author?.avatar?.url ? (
                          <img
                            src={author.avatar.url}
                            alt={author.name}
                            className="h-7 w-7 rounded-full object-cover ring-1 ring-white/15"
                          />
                        ) : (
                          <div className="grid h-7 w-7 place-items-center rounded-full bg-violetMist text-[0.7rem] font-black text-white">
                            {author?.name
                              ?.charAt(0)
                              .toUpperCase()}
                          </div>
                        )}

                        <span>
                          {author?.name ||
                            "Shiva Bhusal"}
                        </span>
                      </div>

                      <span>
                        {formatDate(blog.date)}
                      </span>

                      {blog.blog?.readingTime && (
                        <>
                          <span className="text-white/25">
                            ·
                          </span>

                          <span>
                            {blog.blog.readingTime} min
                            read
                          </span>
                        </>
                      )}
                    </div>

                    <h2 className="line-clamp-2 text-xl font-extrabold leading-snug text-white">
                      {blog.title}
                    </h2>

                    <p className="mt-3 line-clamp-4 flex-1 text-sm leading-7 text-white/58">
                      {subtitle}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-mintGlass">
                      <span>Read article</span>
                      <span className="transition duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </section>

        {/* Pagination */}

        {(pageInfo?.hasPreviousPage ||
          pageInfo?.hasNextPage) && (
          <nav
            className="mt-14 flex flex-wrap items-center justify-center gap-3"
            aria-label="Blog pagination"
          >
            <button
              onClick={goPrevious}
              disabled={currentPage === 1}
              className="min-w-32 rounded-full border border-white/10 bg-white/[0.055] px-5 py-3 text-sm font-bold text-white transition hover:border-mintGlass/50 hover:bg-mintGlass/10 disabled:cursor-not-allowed disabled:opacity-35"
            >
              ← Previous
            </button>

            <span className="min-w-24 text-center text-sm text-white/55">
              Page {currentPage}
            </span>

            <button
              onClick={goNext}
              disabled={!pageInfo?.hasNextPage}
              className="min-w-32 rounded-full border border-white/10 bg-white/[0.055] px-5 py-3 text-sm font-bold text-white transition hover:border-mintGlass/50 hover:bg-mintGlass/10 disabled:cursor-not-allowed disabled:opacity-35"
            >
              Next →
            </button>
          </nav>
        )}
      </div>
    </main>
  );
}
