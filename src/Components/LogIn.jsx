import "./LogIn.css";
import { Link } from "react-router-dom";

export function LogIn() {
  return (
    <div className="row">
      <div className="col-1">
        <Link to="/SignIn">
          <h1>
            <span class="user">User Registration</span>
          </h1>
        </Link>
      </div>
      <div className="col-2">
        <Link to="/SignIn">
          <h1>
            <span class="partner">Partner Registration</span>
          </h1>
        </Link>
      </div>
    </div>
  );
}
