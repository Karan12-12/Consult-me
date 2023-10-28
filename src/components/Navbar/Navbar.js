import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function NavigationBar() {
  return (
    <div className="navbar">
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Container className="navContainer">
          {/* Logo */}
          <Navbar.Brand href="#">
            <img
              src="https://consultme.bg/wp-content/uploads/2018/11/Original_png-1-e1542727565346.png"
              height="80px"
            />
          </Navbar.Brand>

          {/* Toggle button for small screens */}
          <Navbar.Toggle aria-controls="navbarNav" />

          {/* Navigation links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/" className="nav-item">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="nav-item">
                About
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-item">
                Contact us
              </Nav.Link>
              <Nav.Link href="#doctors" className="nav-item">
                Appointment
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
