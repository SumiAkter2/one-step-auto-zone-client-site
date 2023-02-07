import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import checkoutImg from "../../assets/images/checkout/checkout.png";
import OrderInfo from "./OrderInfo";

const Order = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("autoZone-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Sure to Delete?");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("dleete");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
          console.log(data, "dkkii");
        });
    }
  };
  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approve" }),
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = orders.filter((odr) => odr._id !== id);
        const approve = orders.find((odr) => odr._id === id);
        approve.status = "Approve";
        const newOrder = [approve, ...remaining];
        setOrders(newOrder);
      });
  };
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

      <div className="my-6">
        <div className="overflow-x-auto w-full shadow-2xl">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>X</label>
                </th>
                <th>Name</th>
                <th>Your Info</th>
                <th>Message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderInfo
                  key={order._id}
                  order={order}
                  handleDelete={handleDelete}
                  handleStatusUpdate={handleStatusUpdate}
                ></OrderInfo>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
