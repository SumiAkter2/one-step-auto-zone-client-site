import React, { useEffect, useState } from "react";

const OrderInfo = ({ order, handleDelete, handleStatusUpdate }) => {
  const {
    serviceName,
    servicePrice,
    name,
    phone,
    message,
    serviceId,
    _id,
    status,
  } = order;
  const [orderService, setOrderService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [serviceId]);

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
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-secondary btn-sm btn-outline rounded-full"
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderInfo;
