import "./Testimonials.css";
import feedbackData from "../../assert/json/Feedback.json";
import { Container } from "react-bootstrap";
import { IoPersonOutline } from "react-icons/io5";

const Testimonials = () => {
  return (
    <Container>
      <p className="testimonials-topic">
        <b>
          <u>Our Clients Feedback</u>
        </b>
      </p>

      <div className="feedback-carousel">
        {feedbackData.map((feedback) => (
          <div key={feedback.id} className="feedback-card">
            <h6>
              <IoPersonOutline /> &nbsp;{feedback.name}
            </h6>
            <p className="feedback-desc">{feedback.comment}</p>
            <div>Rating: {feedback.rating}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Testimonials;
