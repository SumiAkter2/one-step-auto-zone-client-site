import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Share/Footer";
import Header from "../Components/Share/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
