import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GetStarted } from "./Components/GetStarted.jsx";
import { ReadMoreAndAct } from "./Components/ReadMoreAndAct.jsx";
import { LogIn } from "./Components/LogIn.jsx";
import { RegisterUser } from "./Components/RegisterUser.jsx";
import { RegisterPartner } from "./Components/RegisterPartner.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStarted />}></Route>
        <Route path="/ReadMoreAndAct" element={<ReadMoreAndAct />}></Route>
        <Route path="/LogIn" element={<LogIn />}></Route>
        <Route path="/Register_User" element={<RegisterUser />}></Route>
        <Route path="/Register_Partner" element={<RegisterPartner />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
