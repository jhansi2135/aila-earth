import "./Market.css";
import { MarketUp } from "./MarketUp.jsx";
import { MarketDown } from "./MarketDown.jsx";

export function Market() {
  return (
    <div id="Market">
      <MarketUp />
      <MarketDown />
    </div>
  );
}
