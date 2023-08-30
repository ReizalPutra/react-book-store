import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import book from "../../assets/book.png";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" bg="info" data-bs-theme="light">
        <Container>
          <Link to="/" className="navbar-brand">
            <img src={book} alt="buku" style={{ height: "40px" }} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-center">
              <Nav.Link as={Link} to="/" className="nav-link text-light">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/book-management" className="nav-link text-light">
                Manage Book
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default NavBar;
