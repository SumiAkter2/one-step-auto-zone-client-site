import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import checkoutImg from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../../Context/AuthProvider";
const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;
    const order = {
      serviceName: service.title,
      servicePrice: service.price,
      serviceId: service._id,
      name,
      phone,
      email,
      message,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("added successfully");
      })
      .catch((err) => console.log(err));
    console.log(order);
  };
  return (
    <div>
      <div className="carousel-item relative w-full  mb-12">
        <div className="bg-black opacity-90">
          <img src={checkoutImg} alt="" className="w-screen rounded-xl h-56" />
        </div>
        <div className="absolute right-1/2 bottom-0 ">
          <h1 className="text-xl font-bold text-white bg-secondary text-center p-4 rounded-tl-3xl rounded-tr-3xl">
            Home/CheckOut
          </h1>
        </div>
      </div>
      <div>
        <form
          onSubmit={handlePlaceOrder}
          className="border-2 rounded-lg p-12 border-orange-200 my-6"
        >
          <h2 className="text-4xl text-center font-bold">
            You are about to order: {service.title}
          </h2>
          <h4 className="text-3xl text-center my-4 font-bold">
            Price: $ {service.price}
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              className="input input-ghost w-full  input-bordered"
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="input input-ghost w-full  input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="input input-ghost w-full  input-bordered"
              required
            />
            <input
              name="email"
              type="text"
              placeholder="Your email"
              defaultValue={user?.email}
              readOnly
              className="input input-ghost w-full  input-bordered"
            />
          </div>
          <br />
          <textarea
            name="message"
            className="textarea textarea-bordered h-24 w-full"
            placeholder="Your Message"
            required
          ></textarea>
          <br />
          <input
            className="btn btn-secondary w-full "
            type="submit"
            value="Place Your Order"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
