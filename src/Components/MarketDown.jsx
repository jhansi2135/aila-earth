import "./MarketDown.css";
import { SupplierN } from "./SupplierN";
// import { useState } from "react";
// import More from "./More.png";
// import Less from "./Less.png";

export function MarketDown() {
  // const [more, setMore] = useState(true);
  // const handleMoreClick = () => {
  //   setMore(false);
  // };

  // const handleLessClick = () => {
  //   setMore(true);
  // };
  return (
    <div className="MarketDown">
      <SupplierN alt="SupplierLogo" to="/ReadMoreAndAct" />
      {/* <div id="more">
        <img src={Less} alt="less" onClick={handleLessClick} />
      </div> */}
    </div>
  );
}
