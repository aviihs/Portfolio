"use client";

import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }

    scrollHandler();
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: <AiOutlineHome style={{ marginBottom: "2px" }} />,
    },
    {
      path: "/about",
      label: "About",
      icon: <AiOutlineUser style={{ marginBottom: "2px" }} />,
    },
    {
      path: "/project",
      label: "Projects",
      icon: (
        <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
      ),
    },
    {
      path: "/blogs",
      label: "Blogs",
      icon: <CgFileDocument style={{ marginBottom: "2px" }} />,
    },
    {
      path: "/resume",
      label: "Resume",
      icon: <CgFileDocument style={{ marginBottom: "2px" }} />,
    },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="d-flex">
          <img src={logo.src} className="img-fluid logo" alt="Shiva Bhusal" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : true);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" activeKey={pathname}>
            {navItems.map((item) => (
              <Nav.Item key={item.path}>
                <Nav.Link
                  as={Link}
                  href={item.path}
                  eventKey={item.path}
                  onClick={() => updateExpanded(false)}
                >
                  {item.icon} {item.label}
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/aviihs/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="fork-btn-inner"
                aria-label="Open Shiva Bhusal portfolio repository on GitHub"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
