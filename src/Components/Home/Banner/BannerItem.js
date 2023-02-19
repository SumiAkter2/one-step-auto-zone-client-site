import React from "react";
import "./Banner.css";
const BannerItem = ({ slide }) => {
  const { img, id, prev, next } = slide;
  return (
    <div
      id={`slide${id}`}
      className="carousel-item relative w-full h-screen mb-12"
    >
      <div className="carousel-img">
        <img src={img} alt="" className="w-screen rounded-xl h-screen" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br />
          Price for Car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
        <p className="text-xl  text-primary">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <button className="btn btn-secondary mr-5">Discover More</button>
        <button className="btn btn-outline btn-primary">New Project</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-24">
        <a href={`#slide${prev}`} className="btn btn-circle btn-primary mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle btn-primary">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
