import "./MarketDown.css";
import { SupplierN } from "./SupplierN";

export function MarketDown({ searchText }) {
  return (
    <div className="MarketDown">
      <SupplierN alt="SupplierLogo" searchText={searchText} />
    </div>
  );
}
