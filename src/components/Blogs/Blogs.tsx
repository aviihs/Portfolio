"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Blogs() {
  return (
    <main>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
            <Col md={10} className="project-card">
              <h1 className="project-heading">
                Shiva's <strong className="purple">Blogs</strong>
              </h1>
              <p style={{ color: "white", fontSize: "1.15rem" }}>
                Long-form notes on development, design, SEO, and building useful
                digital products are coming soon.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  );
}

export default Blogs;
