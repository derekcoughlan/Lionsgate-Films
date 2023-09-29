import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function LogIn() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('')
    
    const handleChange = (event) => {
        console.log('inside handle change: ', event.target.name)
        const { name, value } = event.target;
        name === 'user' ? setUser(value) : setPass(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('inside verifyUser')
        console.log('user: ', user)
        console.log('password: ', pass)
        // useEffect(() => {

        // }, [])
    }

    return (
    <Container>
        <Row>
            <Col className= 'mt-5'>
                <h1>Log in</h1>
            </Col>
        </Row>
        <Row>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" value={user} id="user" name='user' onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" id="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={pass} id="pass" name='pass' onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                     Submit
                </Button>
            </Form>
      </Row>
    </Container>
    );
  }
  
  export default LogIn;