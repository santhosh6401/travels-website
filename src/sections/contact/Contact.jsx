import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import Conversation from "../../assert/conversation.png";
import { PiPhoneCallLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import configuration from "../../assert/config/Configuartion.json";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [data, setData] = useState(" . ");
  const API_KEY = configuration.telegramContactBotToken;
  const CHAT_ID = configuration.telegramChatId;

  const handleNotification = async (e) => {
    e.preventDefault();

    try {
      setData(
        `somebody want to connect with you 📞  !!! name : ${name} , email : ${email} , comment : ${comment} , phoneno : ${phoneNo}`
      );
      const response = await fetch(
        `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${CHAT_ID}&text=${data}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setName("");
        setComment("");
        setEmail("");
        setPhoneNo("");
        setData("");
        alert(
          "\n\nThank you for visiting our site ,\n\n our team will contact soon 😊 ...."
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClear = () => {
    setName("");
    setComment("");
    setEmail("");
    setPhoneNo("");
    setData("");
  };

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
              <form onSubmit={handleNotification}>
                <label>Name</label>
                <br />
                <br />
                <input
                  type="text"
                  placeholder="name"
                  className="contact-text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                <br />
                <br />
                <label>Email address</label>
                <br />
                <br />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="contact-text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required

                />
                <br />
                <br />
                <label>Phone Number</label>
                <br />
                <br />
                <input
                  type="tel"
                  placeholder="9876543210"
                  className="contact-text"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  required

                />
                <br />
                <br />
                <label>Comment</label>
                <br />
                <br />
                <textarea
                  as="textarea"
                  rows={3}
                  className="contact-text"
                  placeholder="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required

                />
                <br />
                <br />
                <button className="contact-form-button" type="submit">
                  Submit
                </button>
                &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                &nbsp;
                <button
                  className="contact-form-button"
                  type="button"
                  onClick={handleClear}
                >
                  Clear
                </button>
              </form>
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
                +91 7603852586 | +91 6360583903
              </span>
            </p>
            <p>
              <CiMail className="contact-icon" />
              <span className="contact-info">eaglesqaud633@gmail.com</span>
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
