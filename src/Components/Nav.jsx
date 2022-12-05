import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

export function Nav({ userInfo, setUserInfo }) {
  const handleUserInfoClick = () => {
    setUserInfo(undefined);
  };
  return (
    <div className="Nav">
      <div className="user">
        {userInfo ? (
          <div className="dropdown">
            <button className="dropbtn">
              <img src={userInfo.picture} alt="gmailPicture" />
            </button>
            <div className="dropdown-content">
              <Link to="/order-summary">{userInfo.name}</Link>
              <button onClick={handleUserInfoClick}>Log out</button>
            </div>
          </div>
        ) : (
          <Link to="/logIn">Log In</Link>
        )}
      </div>

      <Link to="/get-started">Get Started</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/about">About</Link>
      <a href="#marketplace">Marketplace</a>
      <Link to="/calculator">Calculate</Link>
      <img id="logo" src={logo} alt="aila" />
    </div>
  );
}
