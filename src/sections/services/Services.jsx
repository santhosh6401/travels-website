import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import Card from "react-bootstrap/Card";
import { FaTreeCity } from "react-icons/fa6";
import { MdLocalAirport } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";

const Services = () => {
  return (
    <>
      <p className="service-topic">
        <b>
          <u>Services</u>
        </b>
      </p>
      <Container>
        <Row>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="service-card">
              <Card.Body>
                <Card.Title
                  style={{ fontSize: "14px", color: "var(--color-blue)"  , opacity:0.85 }}
                >
                  <FaTreeCity className="service-icon" /> City-Wide
                  Transportation
                </Card.Title>
                <Card.Text>
                  Covering the entire city, our taxis ensure comprehensive
                  transportation at your fingertips. From daily commutes to
                  leisurely outings, booking a ride for any purpose is
                  effortlessly convenient
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="service-card">
              <Card.Body>
                <Card.Title
                  style={{ fontSize: "14px", color: "var(--color-blue)" , opacity:0.85 }}
                >
                  <MdLocalAirport className="service-icon" /> Airport Transfers
                </Card.Title>
                <Card.Text>
                  Travel stress-free to and from the airport with our seamless
                  booking services. Experience flight tracking, meet-and-greet
                  options, and fixed-rate fares for a smooth and convenient
                  airport transfer
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="service-card">
              <Card.Body>
                <Card.Title
                  style={{ fontSize: "14px", color: "var(--color-blue)"  , opacity:0.85}}
                >
                  <MdCorporateFare className="service-icon" /> Corporate
                  Services
                </Card.Title>
                <Card.Text>
                  Tailored for businesses! Explore our specialized corporate
                  services offering dedicated accounts, scheduled pickups, and
                  group transportation for events. Elevate your corporate travel
                  experience with our customized solutions
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
