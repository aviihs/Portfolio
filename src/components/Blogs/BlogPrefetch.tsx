"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getBlogSlugs, requestBlogs } from "../../lib/blog-client";

export default function BlogPrefetch() {
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    const load = () => {
      requestBlogs(null)
        .then((data) => {
          if (cancelled) return;
          getBlogSlugs(data).forEach((slug) => router.prefetch(`/blogs/${slug}`));
        })
        .catch((error) => {
          console.warn("Blog prefetch skipped:", error);
        });
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(load, { timeout: 1500 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleId);
      };
    }

    const timeoutId = setTimeout(load, 300);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [router]);

  return null;
}