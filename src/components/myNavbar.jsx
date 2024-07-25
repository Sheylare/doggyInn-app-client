import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" sticky="top" id="navbar">
      <Container>
        <Navbar.Brand  as={Link} to="/"><img src= {logo} alt="logo" width="100px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/buscar-hosts ">Search Hosts</Nav.Link>
            <Nav.Link as={Link} to="/reservas">Reservation</Nav.Link>
            <Nav.Link as={Link} to="/registrar-host">Host Registration</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
