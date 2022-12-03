import "./Market.css";
import { MarketUp } from "./MarketUp.jsx";
import { useState } from "react";
import { SupplierN } from "./SupplierN";

export function Market() {
  const [searchText, setSearchText] = useState("");

  return (
    <div id="marketplace">
      <MarketUp onClick={setSearchText} />
      <SupplierN searchText={searchText} />
    </div>
  );
}
