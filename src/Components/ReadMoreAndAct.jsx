import "./ReadMoreAndAct.css";
// import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function ReadMoreAndAct(props) {
  const location = useLocation();
  const { detail } = location.state;
  // let navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   if (login) {
  //     navigate("/order-summary");
  //   } else {
  //     navigate("/login");
  //   }
  // };

  return (
    <div key={detail.id} className="ReadMoreAndAct">
      <img src={detail.partner_companylogo} alt={props.alt} />
      <h5>{detail.partner_companyName}</h5>
      <p className="p3">{detail.partner_tell_us}</p>
      <h5>Product Category</h5>
      <p>{detail.partner_business_area}</p>
      <h5>Product description</h5>
      <h5>Standards for quality</h5>
      {/* <button onClick={handleSubmit}></button> */}
      <button>Click to purchase and reduce your carbon footprint</button>
      <h5>Browse other products from Mobility Company A</h5>
    </div>
  );
}
