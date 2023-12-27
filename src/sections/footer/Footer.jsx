import "./Footer.css";
import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { Col, Container, Row } from "react-bootstrap";
import { ImHeart } from "react-icons/im";


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
        <a href="https://www.instagram.com/sandie_rep/" target="blank">
            <RxInstagramLogo className="icons" />
          </a>
          <a
            href="https://linkedin.com/in/santhoshkumar-s-563a59230"
            target="blank"
          >
            <RxLinkedinLogo className="icons" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
