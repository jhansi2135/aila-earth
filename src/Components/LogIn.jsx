import "./LogIn.css";
import { Google } from "./Google.jsx";
import { Link } from "react-router-dom";

export function LogIn() {
  return (
    <div className="LogIn">
      <div id="one">
        <h1>User LogIn</h1>
        <input type="text" name="email" placeholder="Enter your Email" />
        <br />
        <input type="text" name="password" placeholder="Enter your Password" />
        <br />
        <Link to="">
          <input type="button" value="LogIn" />
        </Link>
        <Google />
        <Link to="">
          <p>Create Account (if you aren't registered)</p>
        </Link>
      </div>
      <div id="two">
        <h1>Partner LogIn</h1>
        <input type="text" name="email" placeholder="Enter your Email" />
        <br />
        <input type="text" name="password" placeholder="Enter your Password" />
        <br />
        <Link to="">
          <input type="button" value="LogIn" />
        </Link>
        <Google />
        <Link to="">
          <p>Create Account (if you aren't registered)</p>
        </Link>
      </div>
    </div>
  );
}
