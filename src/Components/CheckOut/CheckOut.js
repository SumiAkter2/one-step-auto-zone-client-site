import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  return (
    <div>
      <h1>checkout:{service.id}</h1>
      <h1>{service.title}</h1>
    </div>
  );
};

export default CheckOut;
