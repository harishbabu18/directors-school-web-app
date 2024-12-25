import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <>
    <header id="header" className="header d-flex align-items-center sticky-top">
   
    <Navbar id="navmenu" className="navmenu">
      <Container>
    <Navbar.Brand href="/" className="logo d-flex align-items-center me-auto"><h1 className="sitename">Director's School</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/courses">Couses</Nav.Link>
            <Nav.Link href="/trainers">Trainers</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
</header>
    </>
  )
}