import React from "react";
import About from "./About";
import Banner from "./Banner/Banner";
import Contact from "./Contact";
import Features from "./Features";
import PopularProduct from "./PopularProduct/PopularProduct";
import Service from "./Service/Service";
import Teams from "./Teams";

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Contact />
      <PopularProduct />
      <Teams />
      <Features />
    </div>
  );
}

export default Home;
