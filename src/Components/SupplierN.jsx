import "./SupplierN.css";

export function SupplierN(props) {
  return (
    <div className="SupplierN">
      <img src={props.src} alt={props.alt} />
      <p>{props.text}</p>
    </div>
  );
}
