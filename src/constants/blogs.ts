export const BLOGS_PER_PAGE = 9;

export const DEFAULT_AUTHOR_NAME = "Shiva Bhusal";

export const BLOG_DATE_FORMAT: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
  year: "numeric",
};

export const BLOG_DETAIL_DATE_FORMAT: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const BLOG_CARD_COPY = {
  loading: "Loading stories...",
  error: "Failed to load blogs.",
  noImage: "No image",
  readArticle: "Read article",
  journal: "Journal",
  title: "Ideas, stories &",
  titleAccent: "things I learn.",
  description:
    "Long-form notes on development, design, SEO, and building useful digital products.",
  previous: "← Previous",
  next: "Next →",
};
