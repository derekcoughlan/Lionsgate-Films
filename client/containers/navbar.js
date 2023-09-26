import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
//import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar (){
    return(
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/assets/Lionsgate_Logo-white.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Lionsgate logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default NavBar;