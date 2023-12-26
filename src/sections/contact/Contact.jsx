import { Container, Row, Col, Button } from "react-bootstrap";
import "./Contact.css";
import Conversation from "../../assert/conversation.png";
import { PiPhoneCallLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <>
      <p className="contact-topic">
        <b>
          <u>Contact US</u>
        </b>
      </p>

      <Container className="contact">
        <Row>
          <Col md={2}></Col>
          <Col md={4} className="contact-form">
            <Container>
              <Form>
                <Form.Group controlId="form.Name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="name"
                    className="contact-text"
                    required
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="form.Email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    className="contact-text"
                    required
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="form.Textarea">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="contact-text"
                    required
                  />
                </Form.Group>
                <br />
                <br />
                <Button className="contact-form-button">Submit</Button>
              </Form>
            </Container>
          </Col>
          <Col md={1}></Col>
          <Col md={4}>
            <img
              src={Conversation}
              alt="conversation"
              className="contact-image"
            />
            <p>
              <PiPhoneCallLight className="contact-icon" />
              <span className="contact-info">
                +91 1234567890 | +91 0987654321
              </span>
            </p>
            <p>
              <CiMail className="contact-icon" />
              <span className="contact-info">
                test@gmail.com | test2@gmail.com
              </span>
            </p>
            <p>
              <CiLocationOn className="contact-icon" />
              <span className="contact-info">
                Varathur police station near , Varathur , Bangalore
              </span>
            </p>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>

      <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"></iframe>
      </div>
    </>
  );
};

export default Contact;
