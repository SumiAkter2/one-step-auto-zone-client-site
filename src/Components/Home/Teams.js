import React from "react";
import teamPerson1 from "../../assets/images/team/1.jpg";
import teamPerson2 from "../../assets/images/team/2.jpg";
import teamPerson3 from "../../assets/images/team/3.jpg";
const Teams = () => {
  const teamInfo = [
    {
      id: 1,
      name: "Leo Kito",
      title: "Engine Expert",
      img: teamPerson1,
    },
    {
      id: 2,
      name: "Jony Luis",
      title: "Engine Expert",
      img: teamPerson2,
    },
    {
      id: 3,
      name: "Pathio Kio",
      title: "Engine Expert",
      img: teamPerson3,
    },
  ];
  return (
    <div className="text-center">
      <small className="text-secondary font-bold"> Team Members</small>
      <h1 className="font-bold text-4xl">Meet Our Team</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nostrum
        maiores quibusdam. Qui labore repudiandae animi eaque, ut tenetur
        dolorem repellat.
      </p>
    </div>
  );
};

export default Teams;
