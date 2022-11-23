import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GetStarted } from "./Components/GetStarted.jsx";
import { ReadMoreAndAct } from "./Components/ReadMoreAndAct.jsx";
import { LogIn } from "./Components/LogIn.jsx";
import { SignIn } from "./Components/SignIn.jsx";
import { Google } from "./Components/Google.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStarted />}></Route>
        <Route path="/ReadMoreAndAct" element={<ReadMoreAndAct />}></Route>
        <Route path="/LogIn" element={<LogIn />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/Google" element={<Google />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
