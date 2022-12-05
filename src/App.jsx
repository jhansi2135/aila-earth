import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
  const [userInfo, setUserInfo] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home userInfo={userInfo} setUserInfo={setUserInfo} />}
        ></Route>
        <Route
          path="/ReadMoreAndAct"
          element={<ReadMoreAndAct userInfo={userInfo} />}
        ></Route>
        <Route
          path="/login"
          element={
            userInfo ? (
              <Navigate to="/order-summary" />
            ) : (
              <LogIn setUserInfo={setUserInfo} />
            )
          }
        ></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route
          path="/get-started"
          element={userInfo ? <Navigate to="/order-summary" /> : <GetStarted />}
        ></Route>
        <Route
          path="/order-summary"
          element={
            <OrderJourney userInfo={userInfo} setUserInfo={setUserInfo} />
          }
        ></Route>
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
