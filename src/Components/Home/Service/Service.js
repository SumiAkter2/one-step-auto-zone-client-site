import React, { useEffect, useRef, useState } from "react";
import Services from "./Services";

const Service = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [isAsc, setIsAsc] = useState(true);
  const searchRef = useRef();
  useEffect(() => {
    fetch(
      `https://one-step-auto-zone-server.vercel.app/services?search=${search}&order=${
        isAsc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isAsc, search]);
  const handleInput = () => {
    setSearch(searchRef.current.value);
  };
  return (
    <div className="my-56 lg:my-6">
      <p className="text-sm font-bold text-secondary text-center mt-12">
        {" "}
        Service
      </p>
      <h1 className="text-3xl font-bold text-center mb-4">Our Service Area</h1>
      <p className=" text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        corporis cum hic doloremque.
      </p>
      <div className=" lg:flex justify-center items-center my-4 gap-6 lg:w-1/2 mx-auto align-middle px-6 ">
        <input
          type="text"
          className="input input-secondary  mx-auto mb-4"
          placeholder="Search"
          ref={searchRef}
        />
    
        <button
          onClick={handleInput}
          className="btn btn-secondary w-32 mx-auto "
        >
          search
        </button>
        <br />
        <button
          onClick={() => setIsAsc(!isAsc)}
          className="btn btn-secondary btn-outline w-32 mx-auto mt-4"
        >
          {isAsc ? "DESC" : "ASC"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-x-4">
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
