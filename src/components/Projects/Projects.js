import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import bike from "../../Assets/Projects/bike.png";
import mobile from "../../Assets/Projects/mobile.png";
import { FaMusic } from "react-icons/fa";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bike}
              isBlog={false}
              title="Bike Management System"
              description={
                <>
                  A web-based Bike Management System developed using Core PHP
                  and MySQL. The system includes a secure admin panel with full
                  CRUD functionality, allowing efficient management of bike
                  records and data handling. This project demonstrates my
                  practical knowledge of backend logic, database operations, and
                  admin workflow design.
                  <br />
                  <br />
                  <strong>Admin Panel Access:</strong>
                  <br />
                  Username: bhusalshiva010@gmail.com
                  <br />
                  Password: bhusalshiva010@gmail.com
                </>
              }
              ghLink="https://github.com/aviihs/php/tree/main/bikeManagementSystem"
              demoLink="https://bikemanagement.free.nf/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobile}
              isBlog={false}
              title="Basic Restro App"
              description={
                <>
                  A simple restaurant-themed mobile application built while
                  learning React Native. This project focuses on applying core
                  React Native fundamentals, including components, layout
                  structuring, navigation, and basic UI design. It represents my
                  hands-on practice in building native interfaces and
                  understanding mobile app development concepts.
                  <br />
                  <br />
                  <strong>
                    Note: To Download this app, You can click demo link and then
                    you will be redirect to download apk file of the app.
                    Suitable for only android devices.
                  </strong>
                </>
              }
              ghLink="https://github.com/aviihs/internNative/tree/main/basic_homeTab"
              demoLink="https://github.com/aviihs/react-native/tree/main/basicRestroApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Websocket"
              description="A real-time communication system built using WebSockets and Node.js. This project demonstrates bidirectional communication between client and server, enabling live updates and interactive user experiences in web applications."
              ghLink="https://github.com/soumyajit4419/Websocket"
              demoLink="https://websocket-demo.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="project-section2"
        style={{ paddingTop: "80px" }}
      >
        <Particle />
        <Container>
          <h1 className="project-heading">
            Interest in{" "}
            <strong className="purple">
              Music <FaMusic />
            </strong>
          </h1>

          <p style={{ color: "white" }}>
            Alongside development, I have a deep passion for music and creative
            expression. Here is one of my original creations.
          </p>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                videoLink="https://www.youtube.com/embed/KwApRqUZDGc"
                isBlog={false}
                title="Nyano Jhari"
                description="An original Nepali song inspired by personal emotions and creativity.
    This project reflects my strong interest in music, where I explore mood,
    melody, and artistic storytelling beyond programming."
                demoLink="https://www.youtube.com/watch?v=KwApRqUZDGc"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default Projects;
