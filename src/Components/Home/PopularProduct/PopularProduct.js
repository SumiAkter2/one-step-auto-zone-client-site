import React, { useEffect, useState } from "react";
import PopularProducts from "./PopularProducts";

const PopularProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("  product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="text-center my-12">
      <small className="text-secondary font-bold">Popular Products</small>
      <h1 className="text-3xl font-bold mb-2">Browse Our Products</h1>
      <p className="px-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eius iusto
        earum, expedita aperiam facere assumenda eum Lorem ipsum dolor sit amet.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 ">
        {products.map((service) => (
          <PopularProducts
            key={service._id}
            service={service}
          ></PopularProducts>
        ))}
      </div>
      <div className="flex justify-center items-center mb-12">
        <button className="btn btn-outline w-48 btn-secondary">View Site</button>
      </div>
    </div>
  );
};

export default PopularProduct;
