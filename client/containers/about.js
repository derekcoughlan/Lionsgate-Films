import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavBar from "../components/navbar";
import Col from "react-bootstrap/Col";

const AboutUs = () => {
    return(
        <>
        <NavBar />
        <Container>
            <Col className='mt-3'>
                <Row>
                    <h1>About Us</h1>
                </Row>
            </Col>
        </Container>
        </>
    )
}

export default AboutUs