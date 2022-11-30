import "./SupplierN.css";
import { Link } from "react-router-dom";
import { fetchPartners } from "../Fetch";
import { useState, useEffect } from "react";

export function SupplierN(props) {
  const [details, setDetails] = useState();

  const fetchData = async function () {
    const data = await fetchPartners();
    setDetails(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const visibleList =
    details &&
    details.data.Partner_Details.filter((detail) => {
      return (
        detail.partner_companyName.toLowerCase().includes(props.searchText) ||
        detail.partner_business_area.toLowerCase().includes(props.searchText)
      );
    });

  return (
    <>
      {details &&
        visibleList.map(
          (detail) =>
            detail.partner_confirmation && (
              <div key={detail.id} className="SupplierN">
                <img src={detail.partner_companylogo} alt={props.alt} />
                <div className="p">
                  <p className="p1">{detail.partner_companyName}</p>
                  <p className="p2">{detail.partner_business_area}</p>
                  <p className="p3">{detail.partner_tell_us}</p>
                  <Link to="/ReadMoreAndAct" state={{ detail: detail }}>
                    Read more & Act
                  </Link>
                </div>
              </div>
            )
        )}
    </>
  );
}
