import "./MarketUp.css";
import Electricity from "./Electricity.png";
import TransportationLogistics from "./TransportationLogistics.png";
import Foods from "./Foods.png";
import DigitalServices from "./DigitalServices.png";
import GreenSupplies from "./GreenSupplies.png";
import WasteManagement from "./WasteManagement.png";

export function MarketUp() {
  return (
    <div className="MarketUp">
      <h2>
        Remove CO<sub>2</sub> emissions now
      </h2>
      <div className="Search">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="img">
        <div className="icon">
          <img src={Electricity} alt="Electricity" />
          <p>Electricity</p>
        </div>
        <div className="icon">
          <img src={TransportationLogistics} alt="TransportationLogistics" />
          <p>Transportation & Logistics</p>
        </div>
        <div className="icon">
          <img src={Foods} alt="Foods" />
          <p>Foods</p>
        </div>
        <div className="icon">
          <img src={DigitalServices} alt="Digital Services" />
          <p>Digital Services</p>
        </div>
        <div className="icon">
          <img src={GreenSupplies} alt="Green Supplies" />
          <p>Green Supplies</p>
        </div>
        <div className="icon">
          <img src={WasteManagement} alt="Waste Management" />
          <p>Waste Management</p>
        </div>
      </div>
    </div>
  );
}
