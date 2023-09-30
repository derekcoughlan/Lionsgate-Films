import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '/assets/lionsgate.png'

function NavBar (){
    return(
        <div>
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
          <Nav.Link as={Link} to={{pathname: '/'}}>Home</Nav.Link>
            <Nav.Link as={Link} to={{pathname: '/about'}}>About</Nav.Link>
            <Nav.Link as={Link} to={{pathname: '/contactus'}}>Contact</Nav.Link>
          </Nav>
          </Container>
      </Navbar>
      </div>
    );
}

export default NavBar;