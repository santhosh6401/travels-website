import Logo from "../../assert/logo-removebg.png";
import { Col, Row, Container } from "react-bootstrap";
import "./Navbar.css";
import { BiTrip } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="header">
        <Container>
          <Row>
            <Col md={3}>
              <img src={Logo} alt="Logo" height={40} width={100} />
            </Col>
            <Col md={2}></Col>
            <Col md={1}>
              <Link to="/">
                <p className="links">Home</p>
              </Link>
            </Col>
            <Col md={1}>
              <Link to="/about">
                <p className="links">About</p>
              </Link>
            </Col>

            <Col md={1}>
              <Link to="/service">
                <p className="links">Service</p>
              </Link>
            </Col>
            <Col md={1}>
              <Link to="/contact">
                <p className="links">Contact</p>
              </Link>
            </Col>
            <Col md={1}>
              <Link to="/book">
                <p className="book">Book Now</p>
              </Link>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </div>
      <p className="fixed-book-mb">
        <Link to="/book">
          <BiTrip />
        </Link>
      </p>
    </div>
  );
};

export default Navbar;
