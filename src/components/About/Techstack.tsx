"use client";

import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
// import Flutter from "../../Assets/TechIcons/flutter.webp";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C.src} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript.src} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript.src} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node.src} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon.src} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo.src} alt="mongoDb" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={Flutter} alt="flutter" />
        <div className="tech-icons-text">Flutter</div>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux.src} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git.src} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
     
      
     

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL.src} alt="SQL" />
        <div className="tech-icons-text">Postgresql</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python.src} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java.src} alt="haskell" />
        <div className="tech-icons-text">Java</div>
      </Col>
     

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind.src} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI.src} alt="mui" />
        <div className="tech-icons-text">Material UI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman.src} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Techstack;
