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
        <label for="company-name-partner">
          Company name
          <input id="company-name-partner" type="text" />
        </label>
        <label for="partner-rep-name">
          Name of representative
          <input id="partner-rep-name" type="text" />
        </label>
        <label for="partner-rep-title">
          Title of representative
          <input id="partner-rep-title" type="text" />
        </label>
        <label for="partner-email">
          Email
          <input id="partner-email" type="text" />
        </label>
        <label for="partner-ph-num">
          Phone number
          <input id="partner-ph-num" type="text" />
        </label>
        <label for="partner-business-area">
          Business area
          <input id="partner-business-area" type="text" />
        </label>
        <label for="partner-tell-us">
          Tell us more about the company and products
          <textarea id="partner-tell-us" name="partner-tell-us"></textarea>
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
