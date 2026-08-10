// import { notFound } from "next/navigation";

// const GET_BLOG_BY_SLUG = `
//   query GetBlogBySlug($slug: ID!) {
//     post(id: $slug, idType: SLUG) {
//       id
//       title
//       slug
//       content

//       blog {
//         readingTime

//         featuredImage {
//           node {
//             sourceUrl
//             altText
//           }
//         }

//         githubUrl
//         demoUrl
//         difficulty
//         techStack
//       }
//     }
//   }
// `;

// type Blog = {
//   id: string;
//   title: string;
//   slug: string;
//   content: string;
//   blog: {
//     readingTime: string | null;
//     featuredImage: {
//       node: {
//         sourceUrl: string;
//         altText: string | null;
//       } | null;
//     } | null;
//     githubUrl: string | null;
//     demoUrl: string | null;
//     difficulty: string[];
//     techStack: string[];
//   };
// };

// type GraphQLResponse = {
//   data: {
//     post: Blog | null;
//   };
// };

// async function getBlog(slug: string): Promise<Blog | null> {
//   const response = await fetch(
//     process.env.WORDPRESS_GRAPHQL_URL!,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         query: GET_BLOG_BY_SLUG,
//         variables: {
//           slug,
//         },
//       }),
//       next: {
//         revalidate: 60,
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch blog");
//   }

//   const result: GraphQLResponse = await response.json();

//   return result.data.post;
// }

// type BlogPageProps = {
//   params: {
//     slug: string;
//   };
// };

// export default async function BlogDetailPage({
//   params,
// }: BlogPageProps) {
//   const blog = await getBlog(params.slug);

//   if (!blog) {
//     notFound();
//   }

//   const image = blog.blog?.featuredImage?.node;

//   return (
//     <main className="project-section">
//       <div className="container">
//         <article className="blog-detail">
//           <h1 className="project-heading">
//             {blog.title}
//           </h1>

//           {blog.blog?.readingTime && (
//             <p style={{ color: "white" }}>
//               {blog.blog.readingTime} min read
//             </p>
//           )}

//           {image?.sourceUrl && (
//             <img
//               src={image.sourceUrl}
//               alt={image.altText || blog.title}
//               style={{
//                 width: "100%",
//                 maxHeight: "500px",
//                 objectFit: "cover",
//                 borderRadius: "12px",
//                 marginBottom: "30px",
//               }}
//             />
//           )}

//           <div
//             className="blog-content"
//             dangerouslySetInnerHTML={{
//               __html: blog.content,
//             }}
//           />

//           <div style={{ marginTop: "30px" }}>
//             {blog.blog?.difficulty?.length > 0 && (
//               <p style={{ color: "white" }}>
//                 <strong>Difficulty:</strong>{" "}
//                 {blog.blog.difficulty.join(", ")}
//               </p>
//             )}

//             {blog.blog?.techStack?.length > 0 && (
//               <p style={{ color: "white" }}>
//                 <strong>Tech Stack:</strong>{" "}
//                 {blog.blog.techStack.join(", ")}
//               </p>
//             )}

//             <div style={{ marginTop: "20px" }}>
//               {blog.blog?.githubUrl && (
//                 <a
//                   href={blog.blog.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{ marginRight: "20px" }}
//                 >
//                   GitHub
//                 </a>
//               )}

//               {blog.blog?.demoUrl && (
//                 <a
//                   href={blog.blog.demoUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Live Demo
//                 </a>
//               )}
//             </div>
//           </div>
//         </article>
//       </div>
//     </main>
//   );
// }

import { notFound } from "next/navigation";

const WORDPRESS_REST_URL =
  process.env.WORDPRESS_REST_URL ||
  "https://blog-post.free.nf/?rest_route=/wp/v2/posts";

type WordPressPost = {
  id: number;
  slug: string;

  title: {
    rendered: string;
  };

  content: {
    rendered: string;
  };

  acf?: {
    readingTime?: string | null;
    githubUrl?: string | null;
    demoUrl?: string | null;
    difficulty?: string[] | null;
    techStack?: string[] | null;
  };

  blog?: {
    readingTime?: string | null;

    featuredImage?: {
      node?: {
        sourceUrl?: string;
        altText?: string | null;
      } | null;
    } | null;

    githubUrl?: string | null;
    demoUrl?: string | null;
    difficulty?: string[] | null;
    techStack?: string[] | null;
  };

  _embedded?: {
    ["wp:featuredmedia"]?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
};

async function getBlog(
  slug: string
): Promise<WordPressPost | null> {
  const url =
    `${WORDPRESS_REST_URL}` +
    `&slug=${encodeURIComponent(slug)}` +
    `&_embed=1`;

  const response = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }

  const posts: WordPressPost[] = await response.json();

  return posts[0] ?? null;
}

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetailPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const customFields = blog.acf ?? blog.blog ?? {};

  const featuredImage =
    blog._embedded?.["wp:featuredmedia"]?.[0];

  return (
    <main>
      <div>
        <article>
          <h1>{blog.title.rendered}</h1>

          {customFields.readingTime && (
            <p style={{ color: "white" }}>
              {customFields.readingTime} min read
            </p>
          )}

          {featuredImage?.source_url && (
            <img
              src={featuredImage.source_url}
              alt={
                featuredImage.alt_text ||
                blog.title.rendered
              }
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
              __html: blog.content.rendered,
            }}
          />

          <div style={{ marginTop: "30px" }}>
            {customFields.difficulty &&
              customFields.difficulty.length > 0 && (
                <p style={{ color: "white" }}>
                  <strong>Difficulty:</strong>{" "}
                  {customFields.difficulty.join(", ")}
                </p>
              )}

            {customFields.techStack &&
              customFields.techStack.length > 0 && (
                <p style={{ color: "white" }}>
                  <strong>Tech Stack:</strong>{" "}
                  {customFields.techStack.join(", ")}
                </p>
              )}

            <div style={{ marginTop: "20px" }}>
              {customFields.githubUrl && (
                <a
                  href={customFields.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginRight: "20px",
                  }}
                >
                  GitHub
                </a>
              )}

              {customFields.demoUrl && (
                <a
                  href={customFields.demoUrl}
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