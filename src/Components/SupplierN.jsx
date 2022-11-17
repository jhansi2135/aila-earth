import "./SupplierN.css";

export function SupplierN(props) {
  return (
    <div className="SupplierN">
      <img src={props.src} alt={props.alt} />
      <p className="p1">{props.text1}</p>
      <p className="p1">{props.text2}</p>
      <p className="p1">{props.text3}</p>
      <a>Read more & Act</a>
    </div>
  );
}
