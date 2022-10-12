import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1> im header</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
