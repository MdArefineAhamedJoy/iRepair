import React from "react";
import { Outlet } from "react-router-dom";
import Naver from "./Naver";

const MainLayouts = () => {
  return (
    <div>
      <Naver></Naver>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
