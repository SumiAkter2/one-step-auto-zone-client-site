import React from "react";

const Services = ({ service }) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-400 shadow-xl my-12 ">
        <figure>
          <img
            src={service.img}
            alt="service-img"  className="w-80 rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.title}</h2>
          <p>Price: ${service.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
