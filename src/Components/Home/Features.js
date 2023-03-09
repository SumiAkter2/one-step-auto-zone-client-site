import React from "react";
import features1 from "../../assets/icons/check.svg";
import features2 from "../../assets/icons/deliveryt.svg";

import features4 from "../../assets/icons/person.svg";
import features6 from "../../assets/icons/Wrench.svg";
import features7 from "../../assets/icons/group.svg";
import Feature from "./Feature";
const Features = () => {
  const featuresInfo = [
    {
      id: 1,
      name: "Leo Kito",
      title: "100% Guaranty",
      img: features1,
    },
    {
      id: 2,
      name: "Jony Luis",
      title: "Timely Delivery",
      img: features2,
    },
    {
      id: 3,
      name: "Pathio Kio",
      title: "Best Equipment",
      img: features6,
    },
    // {
    //   id: 4,
    //   name: "Pathio Kio",
    //   title: "Engine Expert",
    //   img: features4,
    // },

    {
      id: 6,
      name: "Pathio Kio",
      title: "24/7 Support",
      img: features4,
    },
    {
      id: 7,
      name: "Pathio Kio",
      title: "Engine Expert",
      img: features7,
    },
  ];
  return (
    <div>
      <div className="text-center">
        <small className="text-secondary font-bold"> Core Features</small>
        <h1 className="font-bold text-4xl mb-6">Why Choose Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nostrum
          maiores quibusdam. Qui labore repudiandae animi eaque, ut tenetur
          dolorem repellat.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 my-12 mx-auto gap-4 px-6 lg:w-2/3 w-full">
        {featuresInfo.map((featureInfo) => (
          <Feature key={featureInfo.id} featureInfo={featureInfo}></Feature>
        ))}
      </div>
    </div>
  );
};

export default Features;
