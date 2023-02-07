import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Services = ({ service }) => {
  return (
    <div>
      <div className="card card-compact lg:w-96 bg-base-400 shadow-xl my-12 ">
        <figure>
          <img
            src={service.img}
            alt="service-img"
            className="w-80 h-56 rounded-lg"
          />
        </figure>
        <div className=" flex justify-between items-center p-8">
          <div>
            <h2 className="card-title">{service.title}</h2>
            <p className="text-secondary text-xl font-bold">
              Price: ${service.price}
            </p>
          </div>

          <button className="btn btn-primary">
            <BsFillArrowRightCircleFill size="25px" color="#FF3811" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
