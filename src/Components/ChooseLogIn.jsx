import "./ChooseLogIn.css";
import { Link } from "react-router-dom";

export function ChooseLogIn() {
  return (
    <div className="ChooseLogIn">
      <Link to="/ChooseLogIn/LogIn" id="one">
        If you are user, LogIn here!
      </Link>
      <Link to="/ChooseLogIn/LogIn" id="two">
        If you are supplier, LogIn here!
      </Link>
    </div>
  );
}
