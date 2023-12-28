import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="notfound">Page Not Found ❌</div>
      <br />
      <br />
      <Link to="/">
        <p className="notfound-link">
          <u>Back to Home</u>
        </p>
      </Link>
    </>
  );
};

export default NotFound;
