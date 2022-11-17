import "./SupplierN.css";

export function SupplierN(props) {
  return (
    <div className="SupplierN">
      <img src={props.src} alt={props.alt} />
      <div className="p">
        <p className="p1">{props.text1}</p>
        <p className="p2">{props.text2}</p>
        <p className="p3">{props.text3}</p>
        <a href="#">Read more & Act</a>
      </div>
    </div>
  );
}
