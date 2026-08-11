export const WORDPRESS_GRAPHQL_URL =
  process.env.WORDPRESS_GRAPHQL_URL ||
  "https://dev-blog-post-cms.pantheonsite.io/graphql";

export const GET_BLOGS = `
  query GetBlogs($first: Int!, $after: String) {
    posts(
      first: $first
      after: $after
      where: { status: PUBLISH }
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }

      nodes {
        databaseId
        title
        slug
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

        blog {
          subtitle
          readingTime
          featuredPost
        }
      }
    }
  }
`;

export const GET_BLOG_BY_SLUG = `
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

type GraphQLError = {
  message: string;
};

type GraphQLResponse<T> = {
  data?: T;
  errors?: GraphQLError[];
};

type FetchGraphQLOptions = {
  revalidate?: number;
};

export async function fetchWordPressGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
  options: FetchGraphQLOptions = {}
) {
  const response = await fetch(WORDPRESS_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      revalidate: options.revalidate ?? 60,
    },
  });

  const text = await response.text();

  if (!response.ok) {
    console.error(
      "WordPress GraphQL error:",
      response.status,
      text.slice(0, 1000)
    );

    throw new Error("WordPress GraphQL request failed");
  }

  let result: GraphQLResponse<T>;

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

  return result.data;
}
