"use client";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import type { ReactNode } from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

type ProjectCardProps = {
  demoLink?: string;
  description: ReactNode;
  ghLink?: string;
  imgPath?: { src: string } | string;
  isBlog?: boolean;
  title: string;
  videoLink?: string;
};

function ProjectCards({
  demoLink,
  description,
  ghLink,
  imgPath,
  isBlog,
  title,
  videoLink,
}: ProjectCardProps) {
  const imageSrc = typeof imgPath === "string" ? imgPath : imgPath?.src;

  return (
    <Card className="project-card-view">
      {videoLink ? (
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="200"
            src={videoLink}
            title={title}
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <Card.Img variant="top" src={imageSrc} alt={`${title} preview`} />
      )}

      <Card.Body>
        <Card.Title
          style={{
            marginBottom: "1rem",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          {title}
        </Card.Title>

        <Card.Text style={{ textAlign: "justify", marginBottom: "2rem" }}>
          {description}
        </Card.Text>

        {ghLink && ghLink !== "#" && (
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub /> &nbsp;
            {isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {!isBlog && demoLink && demoLink !== "#" && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
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
