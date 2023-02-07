import React, { useEffect, useState } from "react";
import Services from "./Services";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <p className="text-sm font-bold text-secondary text-center"> Service</p>
      <h1 className="text-3xl font-bold text-center my-4">Our Service Area</h1>
      <p className=" text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        corporis cum hic doloremque. Esse nisi cupiditate, blanditiis alias
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-4">
        {services.map((service) => (
          <Services key={service._id} service={service}></Services>
        ))}
      </div>
      <div className="flex justify-center items-center mb-12">
        <button className="btn btn-outline btn-secondary">More Service</button>
      </div>
    </div>
  );
};

export default Service;
