import React from "react";
import features1 from "../../assets/icons/check.svg";
import features2 from "../../assets/icons/deliveryt.svg";
import features3 from "../../assets/icons/Group 38729.svg";
import features4 from "../../assets/icons/person.svg";
import features5 from "../../assets/icons/quote.svg";
import features6 from "../../assets/icons/Wrench.svg";
import features7 from "../../assets/icons/group.svg";
import Feature from "./Feature";
const Features = () => {
  const featuresInfo = [
    {
      id: 1,
      name: "Leo Kito",
      title: "Engine Expert",
      img: features1,
    },
    {
      id: 2,
      name: "Jony Luis",
      title: "Engine Expert",
      img: features2,
    },
    {
      id: 3,
      name: "Pathio Kio",
      title: "Engine Expert",
      img: features3,
    },
    {
      id: 4,
      name: "Pathio Kio",
      title: "Engine Expert",
      img: features4,
    },
    {
      id: 5,
      name: "Pathio Kio",
      title: "Engine Expert",
      img: features5,
    },
    {
      id: 6,
      name: "Pathio Kio",
      title: "Engine Expert",
      img: features6,
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

      {featuresInfo.map((featureInfo) => (
        <Feature key={featureInfo.id} featureInfo={featureInfo}></Feature>
      ))}
    </div>
  );
};

export default Features;
