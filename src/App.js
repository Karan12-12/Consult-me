import Home from "./components/Home/Home";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointment from "./Pages/AppointmentFolder/Appointment.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/appointment" element={<Appointment />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
