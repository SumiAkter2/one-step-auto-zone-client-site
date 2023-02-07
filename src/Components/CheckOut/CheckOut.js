import React from "react";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>checkout:{id}</h1>
    </div>
  );
};

export default CheckOut;
