import { NextResponse } from "next/server";

const WORDPRESS_API =
  "https://dev-blog-post-cms.pantheonsite.io/wp-json/wp/v2/posts";

export async function GET() {
  try {
    const response = await fetch(WORDPRESS_API, {
      cache: "no-store",
    });

    const text = await response.text();

    if (!response.ok) {
      console.error(
        "WordPress error:",
        response.status,
        text.slice(0, 500)
      );

      return NextResponse.json(
        {
          error: "WordPress API failed",
          status: response.status,
        },
        {
          status: response.status,
        }
      );
    }

    // Make sure WordPress actually returned JSON
    try {
      const data = JSON.parse(text);

      return NextResponse.json(data);
    } catch {
      console.error(
        "WordPress returned non-JSON:",
        text.slice(0, 500)
      );

      return NextResponse.json(
        {
          error:
            "WordPress returned HTML instead of JSON",
        },
        {
          status: 502,
        }
      );
    }
  } catch (error) {
    console.error(
      "WordPress proxy error:",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to connect to WordPress",
      },
      {
        status: 500,
      }
    );
  }
}