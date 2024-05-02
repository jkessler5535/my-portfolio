import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import '../Styles/Navigation.css';
import {Link} from "react-scroll";


function Navigation({ setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar expand="lg">
        <span className="logo lg-left" id="home">JK</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto custom-nav">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="home"
                onClick={() => handleNavClick("home")}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="about"
                onClick={() => handleNavClick("about")}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="skillsSection"
                onClick={() => handleNavClick("skillsSection")}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="projects"
                onClick={() => handleNavClick("projects")}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="contact"
                onClick={() => handleNavClick("contact")}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;