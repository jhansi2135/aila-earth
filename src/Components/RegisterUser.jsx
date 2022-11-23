import "./Register.css";
import { Google } from "./Google.jsx";
import { Link } from "react-router-dom";

export function RegisterUser() {
  return (
    <div className="Register">
      <h1>User Registeration</h1>
      <p>Please fill in this form to register!</p>
      <input
        className="name"
        type="text"
        name="fname"
        placeholder="First Name"
        required
      />
      <input
        className="name"
        type="text"
        name="lname"
        placeholder="Last Name"
        required
      />
      <br />
      <input type="text" name="email" placeholder="Email" required />
      <br />
      <input type="text" name="password" placeholder="Password" required />
      <br />
      <input
        type="text"
        name="password"
        placeholder="Confirm Password"
        required
      />
      <br />
      <label for="acceptTerms">
        <input
          type="checkbox"
          id="acceptTerms"
          name="acceptTerms"
          value="check"
          required
        />
        I accept the Terms of Use & Privacy Policy
      </label>
      <br />
      <Link to="">
        <input type="button" value="Register" />
      </Link>
      <p>or</p>
      <Google />
      <p>
        Already registered? <Link to="/LogIn">Login here</Link>.
      </p>
    </div>
  );
}
