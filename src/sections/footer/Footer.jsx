import "./Footer.css";
import { RxInstagramLogo } from "react-icons/rx";
import { Col, Container, Row } from "react-bootstrap";
import { ImHeart } from "react-icons/im";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col md={10} xs={15} sm={11} style={{ color: "var(--color-grey)" }}>
          Developed with <ImHeart style={{ color: "#d62121" }} /> by &nbsp;
          <a href="https://portfolio-five-rho-64.vercel.app/" target="blank">
            santhoshkumar & team
          </a>
        </Col>
        <Col md={2} xs={3} sm={1} className="text-center">
          <a href="#" target="blank">
            <RxInstagramLogo className="icons" />
          </a>
          <a href="#" target="blank">
            <GoMail className="icons" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
