"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Particle from "../Particle";
import {
  BLOG_CARD_COPY,
  BLOGS_PER_PAGE,
  DEFAULT_AUTHOR_NAME,
} from "../../constants/blogs";
import {
  formatBlogDate,
  stripHtml,
} from "../../lib/blog-utils";
import type { Blog, BlogConnection } from "../../types/blog";

const blogCache = new Map<string, BlogConnection>();

function getCacheKey(after: string | null) {
  return after || "first-page";
}

export default function Blogs() {
  const firstPageCache = blogCache.get(getCacheKey(null));

  const [blogs, setBlogs] = useState<Blog[]>(
    firstPageCache?.nodes || []
  );
  const [pageInfo, setPageInfo] =
    useState<BlogConnection["pageInfo"] | null>(
      firstPageCache?.pageInfo || null
    );

  const [loading, setLoading] = useState(!firstPageCache);
  const [error, setError] = useState("");

  const [cursorHistory, setCursorHistory] = useState<
    (string | null)[]
  >([null]);

  const [currentPage, setCurrentPage] = useState(1);

  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchBlogs = useCallback(
    async (after: string | null, showLoader = true) => {
      const cacheKey = getCacheKey(after);
      const cachedData = blogCache.get(cacheKey);

      if (cachedData) {
        setBlogs(cachedData.nodes);
        setPageInfo(cachedData.pageInfo);
        setError("");
        // If cached, avoid showing loader — we'll background refresh below
      } else if (showLoader) {
        setLoading(true);
      }

      // abort previous fetch
      abortControllerRef.current?.abort();
      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const url = new URL("/api/blogs", window.location.origin);
        url.searchParams.set("first", String(BLOGS_PER_PAGE));
        if (after) url.searchParams.set("after", after);

        const response = await fetch(url.toString(), {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Failed to fetch blogs");

        const data: BlogConnection = await response.json();

        // cache and update state
        blogCache.set(cacheKey, data);
        setBlogs(data.nodes);
        setPageInfo(data.pageInfo);
        setError("");
      } catch (err) {
        if ((err as any)?.name === "AbortError") return;
        console.error(err);
        setError(BLOG_CARD_COPY.error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchBlogs(null, !firstPageCache);

    return () => {
      abortControllerRef.current?.abort();
    };
  }, [fetchBlogs, firstPageCache]);

  function goNext() {
    if (!pageInfo?.endCursor) return;

    const nextAfter = pageInfo.endCursor;
    const cacheKey = getCacheKey(nextAfter);

    setCursorHistory((prev) => [...prev, nextAfter]);
    setCurrentPage((prev) => prev + 1);

    fetchBlogs(nextAfter, !blogCache.has(cacheKey));
  }

  function goPrevious() {
    if (currentPage <= 1) return;

    const previousCursor = cursorHistory[currentPage - 2] ?? null;
    const cacheKey = getCacheKey(previousCursor);

    setCursorHistory((prev) => prev.slice(0, -1));
    setCurrentPage((prev) => prev - 1);

    fetchBlogs(previousCursor, !blogCache.has(cacheKey));
  }

  if (loading) {
    return (
      <main className="min-h-screen px-4 py-28 text-white">
        <Particle />
        <div className="mx-auto grid min-h-[420px] max-w-6xl place-items-center">
          <div className="text-center">
            <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-2 border-white/10 border-t-violetMist" />
            <p className="text-sm text-white/60">
              {BLOG_CARD_COPY.loading}
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen px-4 py-28 text-white">
        <Particle />
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
      <Particle />

      <div className="mx-auto max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-mintGlass shadow-glow backdrop-blur">
            {BLOG_CARD_COPY.journal}
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            {BLOG_CARD_COPY.title}{" "}
            <span className="bg-gradient-to-r from-mintGlass via-white to-violetMist bg-clip-text text-transparent">
              {BLOG_CARD_COPY.titleAccent}
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            {BLOG_CARD_COPY.description}
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
                        {BLOG_CARD_COPY.noImage}
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
                            {(author?.name || DEFAULT_AUTHOR_NAME)
                              .charAt(0)
                              .toUpperCase()}
                          </div>
                        )}

                        <span>
                          {author?.name || DEFAULT_AUTHOR_NAME}
                        </span>
                      </div>

                      <span>
                        {formatBlogDate(blog.date)}
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
                      <span>{BLOG_CARD_COPY.readArticle}</span>
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
              {BLOG_CARD_COPY.previous}
            </button>

            <span className="min-w-24 text-center text-sm text-white/55">
              Page {currentPage}
            </span>

            <button
              onClick={goNext}
              disabled={!pageInfo?.hasNextPage}
              className="min-w-32 rounded-full border border-white/10 bg-white/[0.055] px-5 py-3 text-sm font-bold text-white transition hover:border-mintGlass/50 hover:bg-mintGlass/10 disabled:cursor-not-allowed disabled:opacity-35"
            >
              {BLOG_CARD_COPY.next}
            </button>
          </nav>
        )}
      </div>
    </main>
  );
}
