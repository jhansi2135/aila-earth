import "./Market.css";
import { MarketUp } from "./MarketUp.jsx";
import { MarketDown } from "./MarketDown.jsx";
import { useState } from "react";

export function Market() {
  const [searchText, setSearchText] = useState("");

  return (
    <div id="marketplace">
      <MarketUp onClick={setSearchText} />
      <MarketDown searchText={searchText} />
    </div>
  );
}
