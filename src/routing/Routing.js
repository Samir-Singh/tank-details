import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../container/Home/Home";
import TankList from "../container/TankList/TankList";
import BmpList from "../container/BmpList/BmpList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tankList" element={<TankList />} />
      <Route path="/bmpList" element={<BmpList />} />
    </Routes>
  );
};

export default Routing;
