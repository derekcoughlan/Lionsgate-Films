import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavBar from "../components/navbar";
import Col from "react-bootstrap/Col";

const AboutUs = () => {
    return(
        <div>
        <NavBar />
        <Container>
            <Col className='mt-3'>
                <Row>
                    <h1>About Us</h1>
                </Row>
                <Row>
                    <hr></hr>
                </Row>
                <Row>
                    <h2>Welcome to Lionsgate Films!</h2>
                </Row>
                <Row>
                    <p>*Intro to website*</p>
                    <p>*Lionsgate Info*</p>
                </Row>
            </Col>
        </Container>
        </div>
    )
}

export default AboutUs