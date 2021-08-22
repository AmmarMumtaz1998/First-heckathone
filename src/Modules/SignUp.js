import React from 'react';
import { Col, Container, Row, Form, Button } from "react-bootstrap";

export default function SignUp() {
  return (
    <>
        <Container className="mb-5">
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Sign Up Form
        </h1>
        <Row className='mt-5'>
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>UserName</Form.Label>
                <Form.Control type="username" placeholder="Enter email" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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
}
