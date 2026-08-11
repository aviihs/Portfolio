import {
  BLOG_DATE_FORMAT,
  BLOG_DETAIL_DATE_FORMAT,
} from "../constants/blogs";

export function stripHtml(html?: string | null) {
  return (html || "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .trim();
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-US", BLOG_DATE_FORMAT).format(
    new Date(date)
  );
}

export function formatBlogDetailDate(date: string) {
  return new Intl.DateTimeFormat(
    "en-US",
    BLOG_DETAIL_DATE_FORMAT
  ).format(new Date(date));
}
