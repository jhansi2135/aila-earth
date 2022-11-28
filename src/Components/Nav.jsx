import "./Nav.css";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="Nav">
      <Link to="/logIn">Log In</Link>
      <Link to="/get-started">Get Started</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/about">About</Link>
      <a href="#marketplace">Marketplace</a>
      <Link to="/calculator">Calculate</Link>
    </div>
  );
}
