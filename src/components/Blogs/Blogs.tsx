// "use client";

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";

// function Blogs() {
//   return (
//     <main>
//       <Container fluid className="project-section">
//         <Particle />
//         <Container>
//           <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
//             <Col md={10} className="project-card">
//               <h1 className="project-heading">
//                 Shiva's <strong className="purple">Blogs</strong>
//               </h1>
//               <p style={{ color: "white", fontSize: "1.15rem" }}>
//                 Long-form notes on development, design, SEO, and building useful
//                 digital products are coming soon.
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//     </main>
//   );
// }

// export default Blogs;

"use client";

import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Particle from "../Particle";
import type { Blog } from "../../app/blogs/page";
import Link from "next/link";

type BlogsProps = {
  blogs: Blog[];
};

function Blogs({ blogs }: BlogsProps) {
  return (
    <main>
      <Container fluid className="project-section">
        <Particle />

        <Container>
          <Row
            style={{
              justifyContent: "center",
              paddingBottom: "30px",
            }}
          >
            <Col md={10} className="project-card">
              <h1 className="project-heading">
                Shiva's <strong className="purple">Blogs</strong>
              </h1>

              <p
                style={{
                  color: "white",
                  fontSize: "1.15rem",
                }}
              >
                Long-form notes on development, design, SEO, and building useful
                digital products.
              </p>
            </Col>
          </Row>

          <Row>
            {blogs.map((blog) => (
              <Col md={6} lg={4} key={blog.id} className="mb-4">
                <Link
                  href={`/blogs/${blog.slug}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Card className="h-100">
                    {blog.image && (
                      <Card.Img
                        variant="top"
                        src={blog.image}
                        alt={blog.imageAlt}
                      />
                    )}

                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>

                      {blog.readingTime && (
                        <small>{blog.readingTime} min read</small>
                      )}

                      <div
                        dangerouslySetInnerHTML={{
                          __html: blog.content,
                        }}
                      />

                      {blog.techStack.length > 0 && (
                        <div>
                          {blog.techStack.map((tech) => (
                            <Badge key={tech} className="me-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </main>
  );
}

export default Blogs;
