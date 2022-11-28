import "./Cal.css";
import Learn from "./Learn.png";
import Attract from "./Attract.png";
import Act from "./Act.png";
import CO2 from "./CO2.png";
import { Link } from "react-router-dom";

export function Cal() {
  return (
    <div id="Calculate" className="Cal">
      <img src={CO2} alt="icon" />
      <p id="num">
        <b>186000 t. </b>
        <br />
        <b>co2e reduced by Aila </b>
      </p>
      <p id="num1">
        <b>How does Aila platform work?</b>
      </p>
      <div className="icon">
        <div className="icon1">
          <Link to="/calculator">
            <img src={Learn} alt="icon" />
            <br /> <br />
            Learn
          </Link>
          <p>
            With automated emission accounting protocol. Results reveal the
            climate health index of the company.
          </p>
        </div>
        <div className="icon1">
          <a href="#Market">
            <img src={Act} alt="icon" />
            <br /> <br />
            Act
          </a>
          <p>
            By providing reports and omni-channel shareable content to
            communicate the actions taken. Aila also tracks the SME's climate
            impact overtime.
          </p>
        </div>
        <div className="icon1">
          <a href="#Calculate">
            <img src={Attract} alt="icon" />
            <br /> <br />
            Attract
          </a>
          <p>
            Through a marketplace that offers a fast and efficient way to shrink
            carbon footprint by switching to green goods and services.
          </p>
        </div>
      </div>
    </div>
  );
}
