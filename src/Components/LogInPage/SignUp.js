import React from "react";
import img from "../../assets/images/login/login.svg";
const SignUp = () => {
  return (
    <div className="hero min-h-screen mb-12">
      <div className="hero-content flex-col lg:flex-row grid  grid-cols-2 gap-20">
        <div className=" flex justify-center items-center p-6">
          <img src={img} alt="logIn img" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  shadow-slate-400 bg-base-100 p-6">
          <div className="card-body">
            <form className="form-control">
              <h1 className="text-center text-4xl font-bold mb-6">
                Please Sign Up
              </h1>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />

              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />

              <div className="form-control mt-6">
                <button className="btn btn-secondary ">Sign Up</button>
              </div>
            </form>
            <div className="divider ">Or Sign In With</div>
            <button className="btn btn-secondary btn-outline">Google</button>
            <div className="divider ">Or </div>
            <p className="">
              Have an account?
              <a className="text-secondary" href="/logIn">
                Please Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
