import "./GetStarted.css";
import { Nav } from "./Nav.jsx";
import { Cal } from "./Cal.jsx";
import { Image } from "./Image.jsx";
import { Market } from "./Market.jsx";

export function GetStarted() {
  return (
    <div className="App">
      <Nav />
      <Image />
      <Cal />
      <Market />
    </div>
  );
}
