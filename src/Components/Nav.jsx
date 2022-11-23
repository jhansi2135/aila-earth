import "./Nav.css";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="Nav">
      <Link to="/ChooseLogIn">Log In</Link>
      <Link id="now" to="/">
        Get Started
      </Link>
      <Link to="/Resources">Resources</Link>
      <Link to="/About">About</Link>
      <a href="#Market">Marketplace</a>
      <a href="#Calculate">Calculate</a>
    </div>
  );
}
