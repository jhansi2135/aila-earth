import "./App.css";
import { Nav } from "./Components/Nav.jsx";
import { Image } from "./Components/Image.jsx";
import { Market } from "./Components/Market.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Image />

      <Market />
    </div>
  );
}

export default App;
