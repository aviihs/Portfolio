import type { Blog, BlogConnection } from "../types/blog";
import { BLOGS_PER_PAGE } from "../constants/blogs";

const blogCache = new Map<string, BlogConnection>();
const inFlightRequests = new Map<string, Promise<BlogConnection>>();

function getCacheKey(after: string | null) {
  return after || "first-page";
}

export function getCachedBlogs(after: string | null) {
  return blogCache.get(getCacheKey(after));
}

export function requestBlogs(
  after: string | null,
  signal?: AbortSignal,
): Promise<BlogConnection> {
  const cacheKey = getCacheKey(after);
  const currentRequest = inFlightRequests.get(cacheKey);

  if (currentRequest) return currentRequest;

  const url = new URL("/api/blogs", window.location.origin);
  url.searchParams.set("first", String(BLOGS_PER_PAGE));
  if (after) url.searchParams.set("after", after);

  const request = fetch(url.toString(), { signal })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch blogs");
      return response.json() as Promise<BlogConnection>;
    })
    .then((data) => {
      blogCache.set(cacheKey, data);
      return data;
    })
    .finally(() => {
      inFlightRequests.delete(cacheKey);
    });

  inFlightRequests.set(cacheKey, request);
  return request;
}

export function getBlogSlugs(data: BlogConnection) {
  return data.nodes.map((blog: Blog) => blog.slug);
}