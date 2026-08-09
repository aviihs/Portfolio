import { notFound } from "next/navigation";

const GET_BLOG_BY_SLUG = `
  query GetBlogBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      slug
      content

      blog {
        readingTime

        featuredImage {
          node {
            sourceUrl
            altText
          }
        }

        githubUrl
        demoUrl
        difficulty
        techStack
      }
    }
  }
`;

type Blog = {
  id: string;
  title: string;
  slug: string;
  content: string;
  blog: {
    readingTime: string | null;
    featuredImage: {
      node: {
        sourceUrl: string;
        altText: string | null;
      } | null;
    } | null;
    githubUrl: string | null;
    demoUrl: string | null;
    difficulty: string[];
    techStack: string[];
  };
};

type GraphQLResponse = {
  data: {
    post: Blog | null;
  };
};

async function getBlog(slug: string): Promise<Blog | null> {
  const response = await fetch(
    process.env.WORDPRESS_GRAPHQL_URL!,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_BLOG_BY_SLUG,
        variables: {
          slug,
        },
      }),
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }

  const result: GraphQLResponse = await response.json();

  return result.data.post;
}

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogDetailPage({
  params,
}: BlogPageProps) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  const image = blog.blog?.featuredImage?.node;

  return (
    <main className="project-section">
      <div className="container">
        <article className="blog-detail">
          <h1 className="project-heading">
            {blog.title}
          </h1>

          {blog.blog?.readingTime && (
            <p style={{ color: "white" }}>
              {blog.blog.readingTime} min read
            </p>
          )}

          {image?.sourceUrl && (
            <img
              src={image.sourceUrl}
              alt={image.altText || blog.title}
              style={{
                width: "100%",
                maxHeight: "500px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "30px",
              }}
            />
          )}

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />

          <div style={{ marginTop: "30px" }}>
            {blog.blog?.difficulty?.length > 0 && (
              <p style={{ color: "white" }}>
                <strong>Difficulty:</strong>{" "}
                {blog.blog.difficulty.join(", ")}
              </p>
            )}

            {blog.blog?.techStack?.length > 0 && (
              <p style={{ color: "white" }}>
                <strong>Tech Stack:</strong>{" "}
                {blog.blog.techStack.join(", ")}
              </p>
            )}

            <div style={{ marginTop: "20px" }}>
              {blog.blog?.githubUrl && (
                <a
                  href={blog.blog.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "20px" }}
                >
                  GitHub
                </a>
              )}

              {blog.blog?.demoUrl && (
                <a
                  href={blog.blog.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}