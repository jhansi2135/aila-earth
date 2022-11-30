import "./ReadMoreAndAct.css";

export function ReadMoreAndAct({ detail }, props) {
  return (
    <div key={detail.id} className="ReadMoreAndAct">
      <img src={detail.partner_companylogo} alt={props.alt} />
      <p>{detail.partner_companyName}</p>
      <p>{detail.partner_business_area}</p>
    </div>
  );
}
