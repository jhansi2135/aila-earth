import "./ReadMoreAndAct.css";
import Cross from "./Cross.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { fetchPartners } from "../Fetch";
import { useState, useEffect } from "react";

export function ReadMoreAndAct(props, { userInfo, setUserInfo }) {
  const [details, setDetails] = useState();

  const fetchData = async function () {
    const data = await fetchPartners();
    setDetails(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const location = useLocation();
  const { detail } = location.state;

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    if (userInfo) {
      navigate("/order-summary");
    } else {
      navigate("/login");
    }
  };

  const fetchList =
    details &&
    details.data.Partner_Details.filter((detail) => {
      return (
        detail.partner_business_area.includes(
          document.getElementById("fetch").innerHTML
        ) &&
        !detail.partner_companyName.includes(
          document.getElementById("notfetch").innerHTML
        )
      );
    });

  const handleUserInfoClick = () => {
    setUserInfo.email_verified(false);
  };

  return (
    <>
      <div className="user">
        {userInfo && (
          <div className="dropdown">
            <button className="dropbtn">{userInfo.picture}</button>
            <div className="dropdown-content">
              <Link to="/order-summary">{userInfo.name}</Link>
              <button onClick={handleUserInfoClick}>Log out</button>
            </div>
          </div>
        )}
      </div>
      <div key={detail.id} className="ReadMoreAndAct">
        <img className="img" src={detail.partner_companylogo} alt={props.alt} />
        <div className="yks">
          <div>
            <h2 id="notfetch">{detail.partner_companyName}</h2>
            <p>{detail.partner_tell_us}</p>
          </div>
          <div>
            <h3>Product Category</h3>
            <p id="fetch">{detail.partner_business_area}</p>
          </div>
          <div>
            <h3>Product description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sint
              nobis ex ratione in soluta pariatur nisi iste dolore ullam quam
              autem animi perspiciatis, doloremque, mollitia voluptatum
              consequuntur esse molestias.
            </p>
          </div>
          <div>
            <h3>Carbon emission details</h3>
          </div>
          <div>
            <h3>Pricing</h3>
          </div>
          <div>
            <h3>Contract term</h3>
          </div>
          <div>
            <h3>Standards for quality</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
              reprehenderit rem nemo molestias ipsam quia illum aspernatur
              debitis temporibus saepe velit iste deleniti ullam porro
              blanditiis quod provident, eaque accusantium.
            </p>
          </div>
          <div>
            <button onClick={handleSubmit}>
              Click to purchase and reduce your carbon footprint
            </button>
          </div>
          <div>
            <h3>Browse other products from {detail.partner_companyName}</h3>
          </div>
          <div>
            <h3>
              Browse products from same category: {detail.partner_business_area}
            </h3>
            <div className="cards">
              {details &&
                fetchList.map(
                  (detail) =>
                    detail.partner_confirmation && (
                      <div key={detail.id} className="card">
                        <img src={detail.partner_companylogo} alt={props.alt} />
                        <div className="p">
                          <p className="p1">{detail.partner_companyName}</p>
                          <p className="p2">{detail.partner_business_area}</p>
                          <p className="p3">{detail.partner_tell_us}</p>
                          <Link
                            onClick={() => window.location.reload(false)}
                            to="/ReadMoreAndAct"
                            state={{ detail: detail }}
                          >
                            Read more & Act
                          </Link>
                        </div>
                      </div>
                    )
                )}
            </div>
          </div>
        </div>
        <Link to="/">
          <img id="cross" src={Cross} alt="cross" />
        </Link>
      </div>
    </>
  );
}
