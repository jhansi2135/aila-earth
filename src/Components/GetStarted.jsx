import { Link } from "react-router-dom";
import "./GetStarted.css";

export function GetStarted() {
  return (
    <div className="GetStarted">
      <div className="a">
        <h2>Register</h2>
        <p>
          Start your sustainability journey by providing us few details about
          your company. This will help us to provide you the best experience and
          tools to track your progress on reducing carbon emissions.
        </p>
        <label for="user-company-name">
          Company name
          <input id="user-company-name" type="text" />
        </label>
        <label for="user-company-reg-name">
          Company registration number
          <input id="user-company-reg-name" type="text" />
        </label>
        <label for="user-company-add">
          Company address
          <input id="user-company-add" type="text" />
        </label>
        <label for="user-rep-name">
          Name of representative
          <input id="user-rep-name" type="text" />
        </label>
        <label for="user-rep-title">
          Title of representative
          <input id="user-rep-title" type="text" />
        </label>
        <label for="user-email">
          Email
          <input id="user-email" type="text" />
        </label>
        <label for="user-ph-num">
          Phone number
          <input id="user-ph-num" type="text" />
        </label>
        <label for="user-industry">
          Industry
          <input id="user-industry" type="text" />
        </label>
        <label for="user-agree" id="ag">
          <input type="checkbox" id="user-agree" name="agreed" value="agreed" />
          I agree to the User Agreement and Privacy Policy.
        </label>
        <Link to="/">
          <input id="btn-g1" type="button" value="REGISTER" />
        </Link>
        <p id="p-g">
          Are you looking to partner with Aila platform to provide your green
          goods and services or cooperate in some other way?
        </p>
        <Link to="/partner-with-us">
          <input id="btn-g" type="button" value="PARTNER WITH US" />
        </Link>
      </div>
      <div className="b">
        <h1>
          Learn
          <br />
          Act
          <br />
          Impact
        </h1>
      </div>
    </div>
  );
}
