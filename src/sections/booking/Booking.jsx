import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Book from "../../assert/booking.png";
import "./Booking.css";

const Booking = () => {
  return (
    <>
      <p className="contact-topic">
        <b> Book your trip ✈️</b>
      </p>
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col md={4} className="booking-form">
            <Container>
              <Form>
                <Form.Group controlId="form.Name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="name"
                    className="booking-text"
                    required
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="form.Name">
                  <Form.Label>Pickup location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="pickup location"
                    className="booking-text"
                    required
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="form.Name">
                  <Form.Label>Drop location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="drop location"
                    className="booking-text"
                    required
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="form.Name">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="phone number"
                    className="booking-text"
                    required
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="form.Email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    className="booking-text"
                    required
                  />
                </Form.Group>
                <br />
                <br />
                <br />
                <Button className="booking-form-button">Submit</Button>
              </Form>
            </Container>
          </Col>
          <Col md={1}></Col>
          <Col md={4}>
            <img src={Book} alt="booking" className="booking-image" />
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Booking;
