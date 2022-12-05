import "./Home.css";
import { Nav } from "./Nav.jsx";
import { Cal } from "./Cal.jsx";
import { Image } from "./Image.jsx";
import { Market } from "./Market.jsx";

export function Home({ userInfo, setUserInfo }) {
  return (
    <div className="App">
      <Nav userInfo={userInfo} setUserInfo={setUserInfo} />
      <Image />
      <Cal />
      <Market userInfo={userInfo} setUserInfo={setUserInfo} />
    </div>
  );
}
