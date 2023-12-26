import "./Why.css";
import { Col, Container, Row } from "react-bootstrap";
import whyImg from "../../assert/services.png";
import Card from "react-bootstrap/Card";
import { IoMdTime } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { MdDriveEta } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";
import { IoHappyOutline } from "react-icons/io5";

const Why = () => {
  return (
    <>
      <p className="why-topic">
        <b>
          <u>Unique Features and Benefits</u>
        </b>
      </p>
      <Container className="why">
        <Row>
          <Col md={1}></Col>
          <Col md={3} className="why-card-left">
            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "16px" }}>
                  <span className="why-icon"> 🕒 </span>24/7 Availability
                </Card.Title>
                <Card.Text style={{ fontSize: "13px" }}>
                  24/7 support, always by your side. Call us anytime for
                  seamless service.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <br />
            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "16px" }}>
                  <span className="why-icon"> 💳 </span> Multiple Payment
                  Options
                </Card.Title>
                <Card.Text style={{ fontSize: "13px" }}>
                  Choose how you pay! Enjoy the flexibility of multiple payment
                  methods, including hassle-free cashless transactions. We make
                  it convenient for you to settle your fare with options that
                  suit your preferences.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <br />
            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "16px" }}>
                  <span className="why-icon"> 🚗 </span>Experienced Drivers
                </Card.Title>
                <Card.Text style={{ fontSize: "13px" }}>
                  Travel with confidence! Our seasoned and skilled drivers
                  guarantee safe, comfortable rides. Rest assured, your journey
                  is in capable hands with our experienced team.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <img src={whyImg} alt="service" className="why-image"></img>
          </Col>
          <Col md={3} className="why-card-right">
            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "16px" }}>
                  <span className="why-icon">🔐 </span> Safety
                </Card.Title>
                <Card.Text style={{ fontSize: "13px" }}>
                  Safety-first approach: Well-maintained vehicles, vetted
                  drivers. Your security matters.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <br />
            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "16px" }}>
                  <span className="why-icon"> 💵 </span> Cost-Effective
                </Card.Title>
                <Card.Text style={{ fontSize: "13px" }}>
                  Value for your money! Explore our competitive pricing and
                  exclusive savings for our loyal customers. Enjoy
                  cost-effective options tailored just for you.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <br />
            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "16px" }}>
                  <span className="why-icon">😌</span> Comfort
                </Card.Title>
                <Card.Text style={{ fontSize: "13px" }}>
                  Travel in comfort! Our vehicles offer spacious and
                  well-equipped interiors for a relaxing journey. Enjoy a
                  comfortable ride, every time
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Why;
