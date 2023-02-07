import React from "react";
import img from "../../assets/images/login/login.svg";
const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen mb-12">
        <div className="hero-content flex-col lg:flex-row justify-between">
          <div className=" flex justify-center items-center p-6">
            <img src={img} alt="logIn img" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  shadow-slate-400 bg-base-100 p-6">
            <div className="card-body">
                          <form className="form-control">
                              <h1 className="text-center text-4xl font-bold mb-6">Log In Now</h1>
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
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </form>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
