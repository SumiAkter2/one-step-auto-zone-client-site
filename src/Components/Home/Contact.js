import React from "react";
import { GoCalendar } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
const Contact = () => {
  return (
    <div className="flex justify-around items-center bg-black my-6 lg:p-12 p-6 text-primary">
      <div className="flex justify-between items-center">
        <div className="mr-4">
          <GoCalendar size="30px" fill="red" />
        </div>
        <div>
          <p>We are open monday-friday</p>
          <h3 className="text-2xl">7.00 AM - 9.00 PM</h3>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mr-4">
          <BiPhoneCall size="30px" fill="red" />
        </div>
        <div>
          <p>Have A Question ?</p>
          <h3 className="text-2xl">+25365658888</h3>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mr-4">
          <MdLocationPin size="30px" fill="red" />
        </div>
        <div>
          <p>Need a repair? Our address</p>
          <h3 className="text-2xl">Mirpur, Dhaka</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
