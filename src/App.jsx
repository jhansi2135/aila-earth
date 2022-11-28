import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home.jsx";
import { ReadMoreAndAct } from "./Components/ReadMoreAndAct.jsx";
import { LogIn } from "./Components/LogIn.jsx";
import { Calculator } from "./Components/Calculator";
import { About } from "./Components/About";
import { Resources } from "./Components/Resources";
import { GetStarted } from "./Components/GetStarted";
import { OrderJourney } from "./Components/OrderJourney";
import { Confirm } from "./Components/Confirm";
import { PartnerWithUs } from "./Components/PartnerWithUs.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ReadMoreAndAct" element={<ReadMoreAndAct />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/get-started" element={<GetStarted />}></Route>
        <Route path="/order-summary" element={<OrderJourney />}></Route>
        <Route path="/partner-with-us" element={<PartnerWithUs />}></Route>
        <Route
          path="/partner-with-us/confirmation"
          element={<Confirm />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
