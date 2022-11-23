import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GetStarted } from "./Components/GetStarted.jsx";
import { ReadMoreAndAct } from "./Components/ReadMoreAndAct.jsx";
import { LogIn } from "./Components/LogIn.jsx";
import { ChooseLogIn } from "./Components/ChooseLogIn.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStarted />}></Route>
        <Route path="/ReadMoreAndAct" element={<ReadMoreAndAct />}></Route>
        <Route path="/ChooseLogIn" element={<ChooseLogIn />}></Route>
        <Route path="/ChooseLogIn/LogIn" element={<LogIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
