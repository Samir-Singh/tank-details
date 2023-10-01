import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../container/Home/Home";
import TankList from "../container/TankList/TankList";
import BmpList from "../container/BmpList/BmpList";
import TankDetails from "../container/TankDetails/TankDetails";
import BmpDetails from "../container/BmpDetails/BmpDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tankList" element={<TankList />} />
      <Route path="/bmpList" element={<BmpList />} />
      <Route path="/tankDetails" element={<TankDetails />} />
      <Route path="/bmpDetails" element={<BmpDetails />} />
    </Routes>
  );
};

export default Routing;
