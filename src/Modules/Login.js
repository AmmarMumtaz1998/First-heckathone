import { Col, Container, Row, Form, Button } from "react-bootstrap";
import React, { useState } from 'react';

const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allEntry, setAllEntry] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = {email:email, password:password}
    setAllEntry([...allEntry, newEntry]);
  }

  return (
    <>

      <Container className="mb-5">
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Login Form
        </h1>
        <Row className='mt-5'>
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Form action='' onSubmit={submitForm}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
              </Form.Group>
              
              <Button variant="success btn-block" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default LoginPage;
