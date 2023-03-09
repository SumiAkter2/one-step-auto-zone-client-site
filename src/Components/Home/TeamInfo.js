import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const TeamInfo = ({ team }) => {
  return (
    <div className="my-12 w-80 mx-auto">
      <div>
        <img className="rounded-2xl " src={team.img} alt="team-person-img" />
        <h1 className="text-2xl font-bold mt-4">{team.name} </h1>
        <h1>{team.title} </h1>
        <p className="flex justify-center items-center gap-x-4 my-2">
          <FaFacebookF
            size="25px"
            color="white"
            className="bg-blue-800 rounded-full p-1 cursor-pointer"
          />
          <BsTwitter
            size="25px"
            color="white"
            className="bg-blue-400 rounded-full p-1 cursor-pointer"
          />
          <BsInstagram
            size="25px"
            color="white"
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-1 cursor-pointer"
          />{" "}
          <FaWhatsapp
            size="25px"
            color="white"
            className="bg-green-400 rounded-full p-1 cursor-pointer"
          />
        </p>
      </div>
    </div>
  );
};

export default TeamInfo;
