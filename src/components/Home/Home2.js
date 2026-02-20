import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer passionate about transforming ideas into
              reliable, scalable, and high-performance digital products. I enjoy
              solving real-world problems and crafting systems that balance
              performance with great user experience.
              <br />
              <br />
              My technical background includes
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Php, C, Node.js, Wordpress, TailwindCss, React Native, Figma{" "}
                </b>
              </i>
              enabling me to work across both backend and frontend ecosystems. I
              have strong expertise in
              <b className="purple"> React and Figma </b>
              along with intermediate experience in
              <b className="purple"> WordPress</b>.
              <br />
              <br />
              Lately, I’ve been increasingly focused on
              <b className="purple"> Application Development</b>, building fast,
              intuitive, and user-centric products.
              <br />
              <br />
              Beyond technology, I have a deep passion for music. I enjoy
              playing guitar and have also explored music production. I’ve
              released an original song on YouTube titled{" "}
              <b > <a
                href="https://www.youtube.com/@avihs010"
                target="_blank"
                rel="noopener noreferrer"
                className="purple"
                style={{ textDecoration: "none" }}
              >
              Nyano Jhari
              </a></b>.
              <br />
              <br />
              While coding is my profession, music remains my creative escape, a
              space where I explore, express, and recharge.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
