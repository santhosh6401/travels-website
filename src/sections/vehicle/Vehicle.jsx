import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Vehicle.css";
import Swift from "../../assert/car/swift.png";
import Ciaz from "../../assert/car/ciaz.png";
import Figo from "../../assert/car/figo.png";
import Etios from "../../assert/car/etios.png";

const Vehicle = () => {
  return (
    <>
      <p className="vehicle-topic">
        <b>
          <u>Our vehicles for your journey</u>
        </b>
      </p>

      <Container className="vehicle">
        <Carousel controls data-bs-theme="dark">
          <Carousel.Item interval={3000}>
            <img src={Ciaz} alt="" className="vehicle-image" />
            <Carousel.Caption>
              <h3 className="vehicle-caption">Maruthi Suzuki Ciaz</h3>
              <p className="vehicle-desc">Base Fare : ₹ 13 / Km</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src={Figo} alt="" className="vehicle-image" />
            <Carousel.Caption>
              <h3 className="vehicle-caption">Ford Figo</h3>
              <p className="vehicle-desc">Base Fare : ₹ 11 / Km</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={Etios} alt="" className="vehicle-image" />
            <Carousel.Caption>
              <h3 className="vehicle-caption">Toyato Platinum Etios</h3>
              <p className="vehicle-desc">Base Fare : ₹ 12 / Km</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Swift} alt="" className="vehicle-image" />
            <Carousel.Caption>
              <h3 className="vehicle-caption">Maruthi Suzuki Swift Dizer</h3>
              <p className="vehicle-desc">Base Fare : ₹ 11 / Km</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <p className="add-desc">
          * Toll And Parking Charges Are Extra, plz check with our team for any inquiries &#128522;
        </p>
      </Container>
    </>
  );
};

export default Vehicle;
