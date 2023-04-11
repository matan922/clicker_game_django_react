import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import ModalAchi from "./ModalAchi";
import ModalStats from "./ModalStats";

const SiteNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Sargelita Evolution</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"achievements"}><ModalAchi/></Nav.Link>
            <Nav.Link as={Link} to={"statistics"}><ModalStats/></Nav.Link>
            <NavDropdown title="Save/Reset" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Save</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Reset
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
