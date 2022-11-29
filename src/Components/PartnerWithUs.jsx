import { Link } from "react-router-dom";
import { useState } from "react";
import "./PartnerWithUs.css";

export function PartnerWithUs() {
  const [partner, setPartner] = useState({
    partner_companyName: "",
    partner_rep_name: "",
    partner_rep_title: "",
    partner_email: "",
    partner_ph_num: "",
    partner_business_area: "",
    partner_tell_us: "",
    partner_companylogo: "",
    partner_confirmation: "",
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

  const onInputChange = (event) => {
    setPartner({ ...partner, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    alert("Data Inserted");
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
        <form onSubmit={(event) => onSubmit(event)}>
          <label for="partner_companyName">
            Company name
            <input
              id="partner_companyName"
              type="text"
              name="partner_companyName"
              value={partner_companyName}
              onChange={(event) => onInputChange(event)}
            />
          </label>
          <label for="partner_rep_name">
            Name of representative
            <input
              id="partner_rep_name"
              type="text"
              name="partner_rep_name"
              value={partner_rep_name}
              onChange={(event) => onInputChange(event)}
            />
          </label>
          <label for="partner_rep_title">
            Title of representative
            <input
              id="partner_rep_title"
              type="text"
              name="partner_rep_title"
              value={partner_rep_title}
              onChange={(event) => onInputChange(event)}
            />
          </label>
          <label for="partner_email">
            Email
            <input
              id="partner_email"
              type="text"
              name="partner_email"
              value={partner_email}
              onChange={(event) => onInputChange(event)}
            />
          </label>
          <label for="partner_ph_num">
            Phone number
            <input
              id="partner_ph_num"
              type="text"
              name="partner_ph_num"
              value={partner_ph_num}
              onChange={(event) => onInputChange(event)}
            />
          </label>
          <label for="partner_business_area">
            Business area
            <input
              id="partner_business_area"
              type="text"
              name="partner_business_area"
              value={partner_business_area}
              onChange={(event) => onInputChange(event)}
            />
          </label>
          <label for="partner_tell_us">
            Tell us more about the company and products
            <textarea
              id="partner_tell_us"
              name="partner-tell-us"
              value={partner_tell_us}
              onChange={(event) => onInputChange(event)}
            ></textarea>
          </label>
          <Link to="/partner-with-us/confirmation">
            <button id="btn-p">SUBMIT</button>
          </Link>
        </form>
      </div>
      <div className="b">
        <h1>
          Small effort,
          <br />
          big impact
        </h1>
      </div>
    </div>
  );
}
