import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import { useState, useEffect } from "react";
import Car from "../../assert/friendly.png";
import Management from "../../assert/management.png";
import Support from "../../assert/support.png";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 200);
  const [, setIndex] = useState(1);
  const toRotate = ["Travel - Tourist - Cabs "];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={7} className="profile">
            <section>
              <p className="text">
                <b>EAGLE SQUAD</b>
                <br />
                <h6>We make your ride comfortable and easy</h6>
              </p>
              <div className="line"></div>
              <br />
              <span className="rotate-text">{text}</span>
              <br />
              <br />
              <Link to="/book">
                <p className="home-book">Book Now</p>
              </Link>
            </section>
          </Col>
          <Col md={4} className="image">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img src={Car} alt="Car" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img src={Management} alt="Management" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img src={Support} alt="Support" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
