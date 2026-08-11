import { NextRequest, NextResponse } from "next/server";
import { BLOGS_PER_PAGE } from "../../../constants/blogs";
import type { BlogConnection } from "../../../types/blog";
import {
  fetchWordPressGraphQL,
  GET_BLOGS,
} from "../../../lib/wordpress";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const after = searchParams.get("after");
    const first = Number(searchParams.get("first") || BLOGS_PER_PAGE);

    const data = await fetchWordPressGraphQL<{
      posts: BlogConnection;
    }>(
      GET_BLOGS,
      {
        first,
        after: after || null,
      },
      { revalidate: 60 }
    );

    return NextResponse.json(data?.posts);
  } catch (error) {
    console.error("Blog GraphQL proxy error:", error);

    return NextResponse.json(
      { error: "Failed to connect to WordPress GraphQL" },
      { status: 500 }
    );
  }
}
