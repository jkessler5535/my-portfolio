import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';


function MyNavbar() {
  return (
    <div className="navigation">
        <Navbar bg="light" expand="lg" className="mb-2 ">
          <Navbar.Brand className="mr-auto">
            <span className="logo">JK</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto align-items-center">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default MyNavbar;