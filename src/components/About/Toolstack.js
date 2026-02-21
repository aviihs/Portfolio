import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/mac-os.png";
import brave from "../../Assets/TechIcons/brave-browser-icon.webp";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import trello from "../../Assets/TechIcons/trello.png";
import slack from "../../Assets/TechIcons/slack.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={brave} alt="Brave" className="tech-icon-images" />
        <div className="tech-icons-text">Brave Browser</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={trello} alt="trello" className="tech-icon-images" />
        <div className="tech-icons-text">Trello</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={slack} alt="slack" className="tech-icon-images" />
        <div className="tech-icons-text">Slack</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
