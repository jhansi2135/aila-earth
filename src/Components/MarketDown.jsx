import "./MarketDown.css";
import { SupplierN } from "./SupplierN";
import Supplier1 from "./Supplier1.png";
import Supplier2 from "./Supplier2.png";
import Supplier3 from "./Supplier3.png";

export function MarketDown() {
  return (
    <div className="MarketDown">
      <SupplierN src={Supplier1} alt="Supplier1" text="vhfh" />
      <SupplierN src={Supplier2} alt="Supplier2" text="hii" />
      <SupplierN src={Supplier3} alt="Supplier2" text="aii" />
    </div>
  );
}
