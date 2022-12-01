import "./SupplierN.css";
import { Link } from "react-router-dom";
import { fetchPartners } from "../Fetch";
import { useState, useEffect } from "react";
import More from "./More.png";
import Less from "./Less.png";

export function SupplierN(props) {
  const [more, setmore] = useState(true);
  const handleMoreClick = () => {
    setmore(false);
  };

  const handleLessClick = () => {
    setmore(true);
  };

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

  const topList = more ? visibleList && visibleList.slice(0, 3) : visibleList;

  return (
    <>
      {details &&
        topList.map(
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
      {more && (
        <div id="more">
          <img src={More} alt="more" onClick={handleMoreClick} />
        </div>
      )}
      {!more && (
        <div id="more">
          <img src={Less} alt="less" onClick={handleLessClick} />
        </div>
      )}
    </>
  );
}
