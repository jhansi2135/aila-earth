import "./MarketUp.css";
import Icons from "./Icons.png";

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
        <img src={Icons} alt="icon" />
      </div>
    </div>
  );
}
