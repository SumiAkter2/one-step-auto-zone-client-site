import React, { useEffect, useState } from "react";

const OrderInfo = ({ order }) => {
  const { serviceName, servicePrice, name, phone, message, serviceId, _id } =
    order;
  const [orderService, setOrderService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [serviceId]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Sure to Delete?");
    if (proceed) {
      fetch(`http://localhost:5000/services/${serviceId}`)
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-secondary btn-outline rounded-full btn-xs"
          >
            x
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {orderService?.img && (
                <img
                  src={orderService?.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm ">${servicePrice}</div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
        <span>{phone}</span>
      </td>
      <td>{message}</td>
      <th>
        <button className="btn btn-secondary btn-sm rounded-full">
          details
        </button>
      </th>
    </tr>
  );
};

export default OrderInfo;
