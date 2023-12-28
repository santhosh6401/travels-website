import { Container, Row, Col } from "react-bootstrap";
import Book from "../../assert/booking.png";
import "./Booking.css";
import { useState } from "react";
import configuration from "../../assert/config/Configuartion.json";

const Booking = () => {
  const API_KEY = configuration.telegramBookingBotToken;
  const CHAT_ID = configuration.telegramChatId;

  const [name, setName] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [vehicle, setSelectedVehicle] = useState("Ford-Figo");
  const [trip, setSelectedTrip] = useState("Drop Only");

  const [data, setData] = useState("");

  const handleNotification = async (e) => {
    e.preventDefault();

    try {
      setData(
        `Booking order through website 🚗 !!!! name ${name} , pickup : ${pickup} ,drop : ${drop} , phoneno : ${phoneNo} , emailId : ${email} , vehicle : ${vehicle} , trip : ${trip}`
      );

      console.log(data);
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
        alert(
          "\n\nThank you for booking through our site , \n\n our team will contact soon 😊 \n\n"
        );
        handleClear();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClear = () => {
    setName("");
    setPickup("");
    setDrop("");
    setSelectedVehicle("Ford-Figo");
    setSelectedTrip("Drop Only");
    setPhoneNo("");
    setEmail("");
    setData("");
  };

  const handleSelectChangeVehicle = (event) => {
    setSelectedVehicle(event.target.value);
  };

  const handleSelectChangeTrip = (event) => {
    setSelectedTrip(event.target.value);
  };

  return (
    <>
      <p className="booking-topic">
        <b> Book your trip ✈️</b>
      </p>
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col md={4} className="booking-form">
            <Container>
              <form onSubmit={handleNotification}>
                <label>Name</label>
                <br />
                <br />
                <input
                  type="text"
                  placeholder="name"
                  className="booking-text"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <br />
                <br />
                <br />
                <label>Pickup location</label>
                <br />
                <br />
                <input
                  type="text"
                  placeholder="pickup location"
                  className="booking-text"
                  required
                  onChange={(e) => setPickup(e.target.value)}
                  value={pickup}
                />
                <br />
                <br />
                <br />
                <label>Drop location</label>
                <br />
                <br />
                <input
                  type="text"
                  placeholder="drop location"
                  className="booking-text"
                  required
                  onChange={(e) => setDrop(e.target.value)}
                  value={drop}
                />
                <br />
                <br />
                <br />
                Vehicle Type <br />
                <br />
                <select
                  value={vehicle}
                  onChange={handleSelectChangeVehicle}
                  className="booking-dropdown"
                  required
                >
                  <option value="Ford-Figo">Ford Figo</option>
                  <option value="Maruthi Suzuki Ciaz">
                    Maruthi Suzuki Ciaz
                  </option>
                  <option value="Maruthi Suzuki Swift Dizer">
                    Maruthi Suzuki Swift Dizer
                  </option>
                  <option value="Toyato Platinum Etios">
                    Toyato Platinum Etios
                  </option>
                </select>
                <br />
                <br />
                <br />
                Journey Type <br />
                <br />
                <select
                  value={trip}
                  onChange={handleSelectChangeTrip}
                  className="booking-dropdown"
                  required
                >
                  <option value="Drop Only">Drop Only</option>
                  <option value="Up and Down">Up and Down</option>
                </select>
                <br />
                <br />
                <br />
                <label>Phone number</label>
                <br />
                <br />
                <input
                  type="tel"
                  placeholder="phone number"
                  className="booking-text"
                  required
                  onChange={(e) => setPhoneNo(e.target.value)}
                  value={phoneNo}
                />
                <br />
                <br />
                <br />
                <label>Email address</label>
                <br />
                <br />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="booking-text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <br />
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
            <img src={Book} alt="booking" className="booking-image" />
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Booking;
