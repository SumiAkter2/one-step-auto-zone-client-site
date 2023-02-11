import React from "react";

function Feature(feature) {
  return (
    <div>
      <img src={feature.img} alt="" />
      <h1> {feature.title}</h1>
    </div>
  );
}

export default Feature;
