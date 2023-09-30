import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavBar from "../components/navbar";
import Col from "react-bootstrap/Col";

const ContactUs = () => {
    return(
        <div>
        <NavBar />
        <Container>
            <Col className='mt-3'>
                <Row>
                    <h1>Contact Us</h1>
                </Row>
                <Row>
                    <hr></hr>
                </Row>
                <Row>
                    <p>For more information or to request a booking please contact the team below</p>
                </Row>
                <Row>
                    <p>West Coast:</p>
                </Row>
                <Row>
                    <p>East Coast:</p>
                </Row>
                <Row>
                    <p>Midwest:</p>
                </Row>
                <Row>
                    <p>South:</p>
                </Row>
            </Col>
            <Col>
                
            </Col>
        </Container>
        </div>
    )
}

export default ContactUs