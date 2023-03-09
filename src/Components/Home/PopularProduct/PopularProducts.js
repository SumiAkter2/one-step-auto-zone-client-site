import React from "react";
import { AiFillStar } from "react-icons/ai";

const PopularProducts = ({ service }) => {
  return (
    <div>
      <div className="card card-compact lg:w-80 my-6 mx-auto">
        <figure data-aos="zoom-in-down" data-aos-duration="1500">
          <img
            src={service.imageURL}
            alt="service-img"
            className="w-48 h-48 rounded-lg"
          />
        </figure>
        <div className=" flex justify-center items-center p-8">
          <div>
            <p className="flex justify-center items-center">
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
            </p>
            <h2 className="card-title">{service.title}</h2>
            <p className="text-secondary text-xl font-bold">
              Price: ${service.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
