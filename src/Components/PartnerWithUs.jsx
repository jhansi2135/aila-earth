import { Link } from "react-router-dom";
import "./PartnerWithUs.css";

export function PartnerWithUs() {
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
        <label for="partner_companyName">
          Company name
          <input id="partner_companyName" type="text" />
        </label>
        <label for="partner_rep_name">
          Name of representative
          <input id="partner_rep_name" type="text" />
        </label>
        <label for="partner_rep_title">
          Title of representative
          <input id="partner_rep_title" type="text" />
        </label>
        <label for="partner_email">
          Email
          <input id="partner_email" type="text" />
        </label>
        <label for="partner_ph_num">
          Phone number
          <input id="partner_ph_num" type="text" />
        </label>
        <label for="partner_business_area">
          Business area
          <input id="partner_business_area" type="text" />
        </label>
        <label for="partner_tell_us">
          Tell us more about the company and products
          <textarea id="partner_tell_us" name="partner-tell-us"></textarea>
        </label>
        <Link to="/partner-with-us/confirmation">
          <button id="btn-p">SUBMIT</button>
        </Link>
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
