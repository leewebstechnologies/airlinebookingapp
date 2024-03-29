import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import FlightInfo from "./pages/flightinfo/FlightInfo";

const AppRoutes = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-flight-info" element={<FlightInfo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
