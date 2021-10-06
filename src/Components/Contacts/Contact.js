import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div>
                <h1 className="text-center">CONTACT US</h1>
            </div>
            <div class="container bg-light shadow-lg mt-10">

    <div className="row">
        
        <div className="col-4 contact-demo shadow">
            <h2 className="fw-bold">
            We Always Ready to Hear From You
            </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, doloribus?</p>
        </div>

        <div className="col-8 m-10">
        <Form>
  <Row className="mb-3 m-10">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <button type="button" class="btn btn-dark">Submit</button>
</Form>
        </div>

  </div>
</div>    
        </div>
    );
};

export default Contact;