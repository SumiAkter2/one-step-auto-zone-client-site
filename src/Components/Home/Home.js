import React from "react";
import About from "./About";
import Banner from "./Banner/Banner";
import Contact from "./Contact";
import PopularProduct from "./PopularProduct/PopularProduct";
import Service from "./Service/Service";

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Contact />
      <PopularProduct />
    </div>
  );
}

export default Home;
