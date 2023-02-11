import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const TeamInfo = ({ team }) => {
  return (
    <div className="my-6">
      <div>
        <img className="rounded-2xl" src={team.img} alt="team-person-img" />
        <h1 className="text-2xl font-bold mt-4">{team.name} </h1>
        <h1>{team.title} </h1>
        <p className="flex justify-center items-center gap-x-4">
          <FaFacebookF
            size="25px"
            color="white"
            className="bg-blue-800 rounded-full p-1"
          />{" "}
          <BsTwitter
            size="25px"
            color="white"
            className="bg-blue-400 rounded-full p-1"
          />
          <BsInstagram
            size="25px"
            color="white"
            className="bg-blue-800 rounded-full p-1"
          />{" "}
          <FaWhatsapp
            size="25px"
            color="white"
            className="bg-blue-800 rounded-full p-1"
          />
        </p>
      </div>
    </div>
  );
};

export default TeamInfo;
