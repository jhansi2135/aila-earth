import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home.jsx";
import { ReadMoreAndAct } from "./Components/ReadMoreAndAct.jsx";
import { LogIn } from "./Components/LogIn.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ReadMoreAndAct" element={<ReadMoreAndAct />}></Route>
        <Route path="/LogIn" element={<LogIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
