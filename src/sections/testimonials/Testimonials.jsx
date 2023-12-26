import "./Testimonials.css";
import feedbackData from "../../assert/json/Feedback.json";
import { Container } from "react-bootstrap";

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
            <h4> 👤 {feedback.name}</h4>
            <p className="feedback-desc">{feedback.comment}</p>
            <div>Rating: {feedback.rating}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Testimonials;
