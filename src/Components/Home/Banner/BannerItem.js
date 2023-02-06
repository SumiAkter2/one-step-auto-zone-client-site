import React from "react";

const BannerItem = ({ slide }) => {
  return (
      <div id={`slide${slide.id}`} className="carousel-item relative w-full mb-12" style={{
          height:'500px'}}>
      <img src={slide.img} alt="banner-img" className="w-full rounded-xl " />
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/4 ">
        <h1 className="text-6xl font-bold ">
          Lorem ipsum dolor <br /> sit amet <br />
          elit. Amet, !
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/2 w-1/2">
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laborum
          quasi earum ad architecto architecto
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5  bottom-1/4 mt-6">
        <button className="btn btn-secondary">Discover More</button>{" "}
        <button
          className=" ml-6 btn btn-primary btn-outline
            "
        >
          Latest Project
        </button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${slide.prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${slide.next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
