import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '/assets/lionsgate.png'

function NavBar (){
    return(
        <>
        <Navbar  bg="dark" data-bs-theme="dark" className="bg-body-primary">
        <Container>
          <Navbar.Brand><img
              src={logo}
              width="150"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">About</Nav.Link>
            <Nav.Link href="">Contact</Nav.Link>
          </Nav>
          </Container>
      </Navbar>
      </>
    );
}

export default NavBar;