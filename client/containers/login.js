import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import background from '/assets/blue-lg-background.jpg';
import loginLogo from '/assets/lg-login-logo.png';

function LogIn() {
    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('')
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        name === 'user' ? setUser(value) : setPass(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('inside verifyUser')
    
        fetch('/home/loginuser', {
            method: 'POST',
            body: JSON.stringify({username: user, password: pass}),
            headers: {'Content-Type': 'application/json'}
        }).then((data) => {
            console.log('should redirect, data: ', data.status)
            //This can't be best practice - i just didn't want a cookie created if the password was wrong.
            if (data.status === 404) {
                setUser('');
                setPass('');
                navigate('/login')
            }
            else{navigate('/');}
        })
        .catch((err) => {
            console.log('failed to verify user')
            navigate('/login');
        })
    }

    return (
    <div style={{
        // backgroundImage: `url(${background})`,
        // height: '100vh',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // color: 'white'
        }}>
    <Container id="main-container" className='d-grid h-100'>
        <Row>
            <img 
                src={loginLogo}
            />
        </Row>
        <Row>
            <Col className= 'mt-5'>
                <h1>Please sign in</h1>
            </Col>
        </Row>
        <Row >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control style={{width: '450px'}} type="username" placeholder="Enter username" value={user}  name='user' onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" id="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{width: '450px'}} type="password" placeholder="Enter password" value={pass} name='pass' onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                     Submit
                </Button>
            </Form>
      </Row>
    </Container>
    </div>
    );
  }
  
  export default LogIn;