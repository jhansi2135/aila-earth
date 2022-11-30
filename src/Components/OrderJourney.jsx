import "./OrderJourney.css";
import Back from "./Back.png";
import Cross from "./Cross.png";
import { Link } from "react-router-dom";

export function OrderJourney() {
  return (
    <div className="OrderJourney">
      <h2>Complete your order</h2>
      <p className="center">
        Great (USER NAME), you are almost there in directly reducing your CO
        <sub>2</sub> emissions!
      </p>
      <p>Summary of your order:</p>
      <ul>
        <li>Company name</li>
        <li>Product name</li>
        <li>Product CO2 emission details</li>
        <li>Contract term</li>
        <li>Contract price</li>
      </ul>
      <p>
        View <a href="#marketplace">terms of service</a>
      </p>
      <p>
        View <a href="#marketplace">Aila user terms</a>
      </p>
      <p>
        Next steps: Mobility Company A will contact you you in maximum 24 hours
        to conclude the contract.
      </p>
      <button id="btn-o">ORDER</button>
      <Link to="/">
        <img id="back" src={Back} alt="back" />
      </Link>
      <Link to="/">
        <img id="cross" src={Cross} alt="cross" />
      </Link>
    </div>
  );
}
