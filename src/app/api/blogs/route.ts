// import { NextResponse } from "next/server";

// const WORDPRESS_API =
//   "https://dev-blog-post-cms.pantheonsite.io/wp-json/wp/v2/posts";

// export async function GET() {
//   try {
//     const response = await fetch(WORDPRESS_API, {
//       cache: "no-store",
//     });

//     const text = await response.text();

//     if (!response.ok) {
//       console.error(
//         "WordPress error:",
//         response.status,
//         text.slice(0, 500)
//       );

//       return NextResponse.json(
//         {
//           error: "WordPress API failed",
//           status: response.status,
//         },
//         {
//           status: response.status,
//         }
//       );
//     }

//     // Make sure WordPress actually returned JSON
//     try {
//       const data = JSON.parse(text);

//       return NextResponse.json(data);
//     } catch {
//       console.error(
//         "WordPress returned non-JSON:",
//         text.slice(0, 500)
//       );

//       return NextResponse.json(
//         {
//           error:
//             "WordPress returned HTML instead of JSON",
//         },
//         {
//           status: 502,
//         }
//       );
//     }
//   } catch (error) {
//     console.error(
//       "WordPress proxy error:",
//       error
//     );

//     return NextResponse.json(
//       {
//         error: "Failed to connect to WordPress",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";

const WORDPRESS_GRAPHQL_URL =
  process.env.WORDPRESS_GRAPHQL_URL;

const GET_BLOGS = `
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

export async function GET(request: NextRequest) {
  try {
    if (!WORDPRESS_GRAPHQL_URL) {
      return NextResponse.json(
        { error: "WORDPRESS_GRAPHQL_URL is not configured" },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);

    const after = searchParams.get("after");
    const first = Number(searchParams.get("first") || 9);

    const response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_BLOGS,
        variables: {
          first,
          after: after || null,
        },
      }),
      next: {
        revalidate: 60,
      },
    });

    const result = await response.json();

    if (!response.ok || result.errors) {
      console.error("GraphQL error:", result.errors);

      return NextResponse.json(
        {
          error: "WordPress GraphQL request failed",
          details: result.errors,
        },
        { status: response.status || 500 }
      );
    }

    return NextResponse.json(result.data.posts);
  } catch (error) {
    console.error("Blog GraphQL proxy error:", error);

    return NextResponse.json(
      { error: "Failed to connect to WordPress GraphQL" },
      { status: 500 }
    );
  }
}