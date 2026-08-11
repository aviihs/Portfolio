"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import "./Blog.css";

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
      <main className="blogs-page">
        <Container>
          <div className="blogs-loading">
            <div className="blog-loader" />
            <p>Loading stories...</p>
          </div>
        </Container>
      </main>
    );
  }

  if (error) {
    return (
      <main className="blogs-page">
        <Container>
          <div className="blogs-error">
            <p>{error}</p>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="blogs-page">
      <Container>
        {/* Header */}

        <section className="blogs-header">
          <span className="blogs-eyebrow">
            JOURNAL
          </span>

          <h1>
            Ideas, stories &{" "}
            <span>things I learn.</span>
          </h1>

          <p>
            Long-form notes on development, design,
            SEO, and building useful digital products.
          </p>
        </section>

        {/* Archive */}

        <section className="blogs-grid">
          {blogs.map((blog) => {
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
              <article
                key={blog.databaseId}
                className={`blog-card ${
                  blog.blog?.featuredPost
                    ? "blog-card-featured"
                    : ""
                }`}
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="blog-card-link"
                >
                  {/* Image */}

                  <div className="blog-image-wrap">
                    {image?.sourceUrl ? (
                      <img
                        src={image.sourceUrl}
                        alt={
                          image.altText ||
                          blog.title
                        }
                        className="blog-image"
                      />
                    ) : (
                      <div className="blog-image-placeholder">
                        No image
                      </div>
                    )}

                    {category && (
                      <span className="blog-category">
                        {category.name}
                      </span>
                    )}
                  </div>

                  {/* Meta */}

                  <div className="blog-card-body">
                    <div className="blog-meta">
                      <div className="blog-author">
                        {author?.avatar?.url ? (
                          <img
                            src={author.avatar.url}
                            alt={author.name}
                          />
                        ) : (
                          <div className="author-placeholder">
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

                      <span className="blog-date">
                        {formatDate(blog.date)}
                      </span>

                      {blog.blog?.readingTime && (
                        <>
                          <span className="meta-dot">
                            ·
                          </span>

                          <span className="blog-date">
                            {blog.blog.readingTime} min
                            read
                          </span>
                        </>
                      )}
                    </div>

                    {/* Title */}

                    <h2>{blog.title}</h2>

                    {/* Description */}

                    <p className="blog-description">
                      {subtitle}
                    </p>

                    <div className="read-more">
                      Read article
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </section>

        {/* Pagination */}

        {(pageInfo?.hasPreviousPage ||
          pageInfo?.hasNextPage) && (
          <nav
            className="blog-pagination"
            aria-label="Blog pagination"
          >
            <button
              onClick={goPrevious}
              disabled={currentPage === 1}
            >
              ← Previous
            </button>

            <span>
              Page {currentPage}
            </span>

            <button
              onClick={goNext}
              disabled={!pageInfo?.hasNextPage}
            >
              Next →
            </button>
          </nav>
        )}
      </Container>
    </main>
  );
}