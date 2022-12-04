import "./Calculator.css";
import Cross from "./Cross.png";
import { Link } from "react-router-dom";

export function Calculator() {
  return (
    <div className="Calculator">
      <p>Something Awesome Is In The Works</p>
      <p>We will be up and running soon with the new and improved website.</p>
      <p>We love feedback!</p>
      <button id="btn-c">CONTACT US</button>
      <Link to="/">
        <img id="cross" src={Cross} alt="cross" />
      </Link>
    </div>
  );
}
