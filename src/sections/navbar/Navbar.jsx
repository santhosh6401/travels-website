import React from "react";
import Logo from "../../assert/logo-removebg.png";
import { Col, Row, Container } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="header">
        <Row>
          <Col md={3}>
            <img src={Logo} alt="Logo" height={40} width={100} />
          </Col>
          <Col md={2}></Col>
          <Col md={1}>
            <p className="links">Home</p>
          </Col>
          <Col md={1}>
            <p className="links">About</p>
          </Col>

          <Col md={1}>
            <p className="links">Service</p>
          </Col>
          <Col md={1}>
            <p className="links">Contact</p>
          </Col>
          <Col md={1}>
            <p className="book">Book Now</p>
          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Navbar;
