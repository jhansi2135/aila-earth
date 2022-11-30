import { useState } from "react";
import "./PartnerWithUs.css";
import { InsertPartners } from "../Fetch";
import { useNavigate } from "react-router-dom";
import Back from "./Back.png";
import Cross from "./Cross.png";
import { Link } from "react-router-dom";

export function PartnerWithUs() {
  let navigate = useNavigate();
  const [partner, setPartner] = useState({
    partner_companyName: "",
    partner_rep_name: "",
    partner_rep_title: "",
    partner_email: "",
    partner_ph_num: "",
    partner_business_area: "",
    partner_tell_us: "",
  });
  const {
    partner_companyName,
    partner_rep_name,
    partner_rep_title,
    partner_email,
    partner_ph_num,
    partner_business_area,
    partner_tell_us,
  } = partner;

  const handleInputChange = (event) => {
    setPartner({ ...partner, [event.target.name]: event.target.value });
  };
  const insertPartner = async function (data) {
    const result = await InsertPartners(data);
    console.log(result);
  };
  const handleSubmit = (event) => {
    const data = {
      partner_companyName: partner_companyName,
      partner_rep_name: partner_rep_name,
      partner_rep_title: partner_rep_title,
      partner_email: partner_email,
      partner_ph_num: partner_ph_num,
      partner_business_area: partner_business_area,
      partner_tell_us: partner_tell_us,
    };
    insertPartner(data);
    navigate("/partner-with-us/confirmation");
  };

  return (
    <div className="PartnerWithUs">
      <div className="a">
        <h2>Partner with Aila</h2>
        <p>
          In order to improve our service and provide more options for companies
          ready to reduce their carbon emissions, Aila is always looking for new
          partners. Leave us your details and lets discuss how we can make an
          impact!
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="partner_companyName">
            Company name
            <input
              id="partner_companyName"
              type="text"
              name="partner_companyName"
              value={partner_companyName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="partner_rep_name">
            Name of representative
            <input
              id="partner_rep_name"
              type="text"
              name="partner_rep_name"
              value={partner_rep_name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="partner_rep_title">
            Title of representative
            <input
              id="partner_rep_title"
              type="text"
              name="partner_rep_title"
              value={partner_rep_title}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="partner_email">
            Email
            <input
              id="partner_email"
              type="text"
              name="partner_email"
              value={partner_email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="partner_ph_num">
            Phone number
            <input
              id="partner_ph_num"
              type="text"
              name="partner_ph_num"
              value={partner_ph_num}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="partner_business_area">
            Business area
            <input
              id="partner_business_area"
              type="text"
              name="partner_business_area"
              value={partner_business_area}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="partner_tell_us">
            Tell us more about the company and products
            <textarea
              id="partner_tell_us"
              name="partner_tell_us"
              value={partner_tell_us}
              onChange={handleInputChange}
              required
            ></textarea>
          </label>
          <button id="btn-p">SUBMIT</button>
        </form>
      </div>
      <div className="b">
        <h1>
          Small effort,
          <br />
          big impact
        </h1>
      </div>
      <div>
        <Link to="/get-started">
          <img id="back" src={Back} alt="back" />
        </Link>
        <Link to="/">
          <img id="cross" src={Cross} alt="cross" />
        </Link>
      </div>
    </div>
  );
}
