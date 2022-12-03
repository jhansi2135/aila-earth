import { Link } from "react-router-dom";
import "./GetStarted.css";
import { useState } from "react";
import { InsertUsers } from "../Fetch";
import { useNavigate } from "react-router-dom";
import Cross from "./Cross.png";

export function GetStarted() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    user_company_name: "",
    user_company_reg_name: "",
    user_company_add: "",
    user_rep_name: "",
    user_rep_title: "",
    user_email: "",
    user_ph_num: "",
    user_industry: "",
    user_agree: "",
  });

  const {user_company_name, user_company_reg_name, user_company_add, user_rep_name, user_rep_title, user_email, user_ph_num, user_industry, user_agree} = user;

  const handleInputChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value });
  };
  const insertUser = async function (data) {
    const result = await InsertUsers(data);
    console.log(result);
  };
  const handleSubmit = (event) => {
    const data = {
      user_company_name: user_company_name,
      user_company_reg_name: user_company_reg_name,
      user_company_add: user_company_add,
      user_rep_name: user_rep_name,
      user_rep_title: user_rep_title,
      user_email: user_email,
      user_ph_num: user_ph_num,
      user_industry: user_industry,
      user_agree: true,
    };
    insertUser(data);
    navigate("/order-summary");
  };

  return (
    <div className="GetStarted">
      <div className="a">
        <h2>Register</h2>
        <p>
          Start your sustainability journey by providing us few details about
          your company. This will help us to provide you the best experience and
          tools to track your progress on reducing carbon emissions.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user_company_name">
            Company name
            <input id="user_company_name" type="text"  name="user_company_name"
            value={user_company_name}
            onChange={handleInputChange} required />
          </label>
          <label htmlFor="user_company_reg_name">
            Company registration number
            <input id="user_company_reg_name" type="text" name="user_company_reg_name"
            value={user_company_reg_name}
            onChange={handleInputChange} required />
          </label>
          <label htmlFor="user_company_add">
            Company address
            <input id="user_company_add" type="text" name="user_company_add"
            value={user_company_add}
            onChange={handleInputChange} required />
          </label>
          <label htmlFor="user_rep_name">
            Name of representative
            <input id="user_rep_name" type="text" name="user_rep_name"
            value={user_rep_name}
            onChange={handleInputChange} required />
          </label>
          <label htmlFor="user_rep_title">
            Title of representative
            <input id="user_rep_title" type="text" name="user_rep_title"
            value={user_rep_title}
            onChange={handleInputChange} required />
          </label>
          <label htmlFor="user_email">
            Email
            <input id="user_email" type="text" name="user_email"
            value={user_email}
            onChange={handleInputChange} required />
          </label>
          <label htmlFor="user_ph_num">
            Phone number
            <input id="user_ph_num" type="text" name="user_ph_num"
            value={user_ph_num}
            onChange={handleInputChange} required />
          </label>
          <label htmlFor="user_industry">
            Industry
            <input id="user_industry" type="text" name="user_industry"
            value={user_industry}
            onChange={handleInputChange} required />
          </label>
          <label htmlFor="user_agree" id="ag">
            <input
            type="checkbox"
            id="user_agree"
            name="user_agree"
            value={user_agree}
            onChange={handleInputChange}
            required
            />
          I agree to the <a href="#marketplace">User Agreement</a> and <a href="#marketplace">Privacy Policy</a>.
          </label>
          <button id="btn-g1">REGISTER</button>
        </form>
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
      <div>
      <Link to="/">
        <img id="cross" src={Cross} alt="cross" />
      </Link>
      </div>
    </div>
  );
}
