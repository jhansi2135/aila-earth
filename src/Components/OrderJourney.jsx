import "./OrderJourney.css";

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
        View <a href="#">terms of service</a>
      </p>
      <p>
        View <a href="#">Aila user terms</a>
      </p>
      <p>
        Next steps: Mobility Company A will contact you you in maximum 24 hours
        to conclude the contract.
      </p>
      <button id="btn-o">ORDER</button>
    </div>
  );
}
