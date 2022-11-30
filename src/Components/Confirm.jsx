import { Link } from "react-router-dom";
import "./Confirm.css";
import Back from "./Back.png";
import Cross from "./Cross.png";

export function Confirm() {
  return (
    <div className="Confirm">
      <h2>Thanks for your interest</h2>
      <p>
        We have now received your submission and will be in contact with you
        shortly.
      </p>
      <p>
        In the meanwhile, do get to know our platform. We would be very happy to
        hear your feedback.
      </p>
      <Link to="/">
        <u>Back to main page</u>
      </Link>
      <Link to="/partner-with-us">
        <img id="back" src={Back} alt="back" />
      </Link>
      <Link to="/">
        <img id="cross" src={Cross} alt="cross" />
      </Link>
    </div>
  );
}
