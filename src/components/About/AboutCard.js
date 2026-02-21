import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Shiva Bhusal</span> from{" "}
            <span className="purple">Kathmandu, Nepal</span>.
            <br />
            I’m a{" "}
            <span className="purple">
              Web & Mobile Designer, Developer
            </span>{" "}
            with expertise in{" "}
            <span className="purple">MERN Stack, React Native, PHP, SQL</span>,
            and <span className="purple">Figma</span>.
            <br />I am currently pursuing my{" "}
            <span className="purple">
              BSc. CSIT (Computer Science & IT)
            </span> at <span className="purple">Patan Multiple Campus</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Creating and sharing my music 🎵
            </li>
            <li className="about-activity">
              <ImPointRight /> Photo & video editing 🎬
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading, chess, and badminton ♟️🏸
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building apps & music that inspire!"
          </p>
          <footer className="blockquote-footer">Shiva Bhusal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
