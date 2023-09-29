import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavBar from "../components/navbar";
import Col from "react-bootstrap/Col";

const ContactUs = () => {
    return(
        <>
        <NavBar />
        <Container>
            <Col className='mt-3'>
                <Row>
                    <h1>Contact Us</h1>
                </Row>
            </Col>
        </Container>
        </>
    )
}

export default ContactUs