import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import checkoutImg from "../../assets/images/checkout/checkout.png";

const Order = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <div className="carousel-item relative w-full  mb-12">
        <div className="bg-black opacity-90">
          <img src={checkoutImg} alt="" className="w-screen rounded-xl h-56" />
        </div>
        <div className="absolute left-2/4 bottom-0 ">
          <h1 className="text-xl font-bold text-white bg-secondary text-center p-4 rounded-tl-3xl rounded-tr-3xl">
            Home/ Order
          </h1>
        </div>
          </div>
          
          <div>
              
          </div>
    </div>
  );
};

export default Order;
