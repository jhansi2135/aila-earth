import "./SignIn.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LogIn } from "./LogIn.jsx";

export function SignIn() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const json = localStorage.getItem("email");
    json && setEmail(JSON.parse(json));
  }, []);
  const [password, setPassword] = useState("");
  useEffect(() => {
    const json = localStorage.getItem("password");
    json && setPassword(JSON.parse(json));
  }, []);
  const handleEmailChange = function (event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
    try {
      const json = JSON.stringify(newEmail);
      localStorage.setItem("email", json);
    } catch (error) {
      console.error("Could not save email", error);
    }

    const handlePasswordChange = function (event) {
      const newPassword = event.target.value;
      setPassword(newPassword);
      try {
        const json = JSON.stringify(newPassword);
        localStorage.setItem("password", json);
      } catch (error) {
        console.error("Could not save password", error);
      }
    };
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
        placeholder="Enter your Email... "
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <br />

      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your Password..."
        onChange={(e) => setPassword(e.target.value)}
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
        No Account yet?CreateOne SignUp
      </Link>
      <div>
        <Link to="/Google"></Link>
      </div>
    </div>
  );
}
