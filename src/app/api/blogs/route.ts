import { NextRequest, NextResponse } from "next/server";
import { BLOGS_PER_PAGE } from "../../../constants/blogs";
import type { BlogConnection } from "../../../types/blog";
import {
  getCachedBlogs,
} from "../../../lib/wordpress";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const after = searchParams.get("after");
    const first = Number(searchParams.get("first") || BLOGS_PER_PAGE);

    const posts = await getCachedBlogs(first, after || null);

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Blog GraphQL proxy error:", error);

    return NextResponse.json(
      { error: "Failed to connect to WordPress GraphQL" },
      { status: 500 }
    );
  }
}
