import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import checkoutImg from "../../assets/images/checkout/checkout.png";
import OrderInfo from "./OrderInfo";

const Order = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://one-step-auto-zone-server.vercel.app/orders?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("autoZone-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Sure to Delete?");
    if (proceed) {
      fetch(`https://one-step-auto-zone-server.vercel.app/orders/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("autoZone-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delete");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  const handleStatusUpdate = (id) => {
    fetch(`https://one-step-auto-zone-server.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("autoZone-token")}`,
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
      <div>
        <h1 className="text-4xl text-center my-4">{orders.length} Orders</h1>
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
