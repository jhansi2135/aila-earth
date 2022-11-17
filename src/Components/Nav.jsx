import "./Nav.css";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="Nav">
      <Link to="/LogIn">Log In</Link>
      <Link id="now" to="/">
        Get Started
      </Link>
      <a href="#">Resources</a>
      <a href="#">About</a>
      <a href="#Market">Marketplace</a>
      <a href="#">Calculate</a>
    </div>
  );
}
