import "./SupplierN.css";
import { Link } from "react-router-dom";

export function SupplierN(props) {
  return (
    <div className="SupplierN">
      <img src={props.src} alt={props.alt} />
      <div className="p">
        <p className="p1">{props.text1}</p>
        <p className="p2">{props.text2}</p>
        <p className="p3">{props.text3}</p>
        <Link to={props.to}>Read more & Act</Link>
      </div>
    </div>
  );
}
