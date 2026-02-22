import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">

      {/* VIDEO OR IMAGE */}
      {props.videoLink ? (
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="200"
            src={props.videoLink}
            title={props.title}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}

      <Card.Body>
        <Card.Title style={{marginBottom: "1rem", fontWeight:"bold", fontStyle:"italic"}}>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify", marginBottom: "2rem" }}>
          {props.description}
        </Card.Text>

        {/* GitHub Button */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Demo Button */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;