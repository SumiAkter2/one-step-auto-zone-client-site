import React from "react";
import banner1 from "../../../assets/images/banner/3.jpg";
import banner2 from "../../../assets/images/banner/4.jpg";
import banner3 from "../../../assets/images/banner/5.jpg";
import banner4 from "../../../assets/images/banner/7.jpg";
import BannerItem from "./BannerItem";
const Banner = () => {
  const bannerImage = [
    {
      img: banner4,
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      img: banner2,
      prev: 1,
      id: 2,
      next: 3,
    },

    {
      img: banner3,
      prev: 2,
      id: 3,
      next: 4,
    },

    {
      img: banner1,
      prev: 3,
      id: 4,
      next: 1,
    },
  ];
  return (
    <div>
      <div className="carousel w-full text-white">
        {bannerImage.map((slide) => (
          <BannerItem key={slide.id} slide={slide}></BannerItem>
        ))}
      </div>
    </div>
  );
};

export default Banner;
