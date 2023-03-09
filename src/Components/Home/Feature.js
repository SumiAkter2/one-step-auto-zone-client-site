import React from "react";

const Feature = ({ featureInfo }) => {
  return (
   
      <div className="text-center w-1/2 mx-auto lg:block flex justify-center items-center gap-x-6">
        <img src={featureInfo.img} alt="feature-logo" />
        <h1 className="text-sm ">{featureInfo.title} </h1>
      </div>
    
  );
};

export default Feature;
