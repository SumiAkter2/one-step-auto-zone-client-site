import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
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

          <Link to={`/checkout/${service.service_id}`}>
            {" "}
            <button className="btn btn-primary">
              <BsFillArrowRightCircleFill size="25px" color="#FF3811" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
