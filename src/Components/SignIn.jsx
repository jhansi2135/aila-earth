import "./SignIn.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LogIn } from "./LogIn.jsx";
import { Google } from "./Google.jsx";

export function SignIn() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleEmailChange = function (event) {
    setEmail(event.target.value);
  };

  const handlePasswordChange = function (event) {
    setPassword(event.target.value);
  };

  return (
    <div className="LogIn">
      <h1>Login</h1>
      <br />
      <br />

      <input
        id="email"
        name="email"
        type="email"
        value={email}
        placeholder="Enter your Email... "
        onChange={handleEmailChange}
        required
      />
      <br />
      <br />

      <input
        id="password"
        name="password"
        type="password"
        value={password}
        placeholder="Enter your Password..."
        onChange={handlePasswordChange}
        required
      />
      <br />
      <br />
      <Link to="/">
        <button onclick={LogIn} type="button" id="btn">
          Login
        </button>
      </Link>
      <br />
      <br />
      <Link id="sign" to="/SignUp">
        No Account yet? Create One SignUp
      </Link>
      <div>
        <Google />
      </div>
    </div>
  );
}
