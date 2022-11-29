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
        <label for="user_company_name">
          Company name
          <input id="user_company_name" type="text" required />
        </label>
        <label for="user_company_reg_name">
          Company registration number
          <input id="user_company_reg_name" type="text" required />
        </label>
        <label for="user_company_add">
          Company address
          <input id="user_company_add" type="text" required />
        </label>
        <label for="user_rep_name">
          Name of representative
          <input id="user_rep_name" type="text" required />
        </label>
        <label for="user_rep_title">
          Title of representative
          <input id="user_rep_title" type="text" required />
        </label>
        <label for="user_email">
          Email
          <input id="user_email" type="text" required />
        </label>
        <label for="user_ph_num">
          Phone number
          <input id="user_ph_num" type="text" required />
        </label>
        <label for="user_industry">
          Industry
          <input id="user_industry" type="text" required />
        </label>
        <label for="user_agree" id="ag">
          <input
            type="checkbox"
            id="user_agree"
            name="agreed"
            value="agreed"
            required
          />
          I agree to the <a href="#marketplace">User Agreement</a> and <a href="#marketplace">Privacy Policy</a>.
        </label>
        <Link to="/order-summary">
          <button id="btn-g1">REGISTER</button>
        </Link>
        <p id="p-g">
          Are you looking to partner with Aila platform to provide your green
          goods and services or cooperate in some other way?
        </p>
        <Link to="/partner-with-us">
          <button id="btn-g">PARTNER WITH US</button>
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
