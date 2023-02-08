import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Context/AuthProvider";
import SocialLogin from "../Share/SocialLogIn/SocialLogin";
const Login = () => {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password).then((result) => {
      const user = result.user;
      const currentUser = { email: user.email };
      fetch("https://one-step-auto-zone-server.vercel.app/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("autoZone-token", data.token);
          navigate(from, { replace: true });
        })
        .catch((err) => console.log(err));
    });
    e.target.reset();
  };
  return (
    <div>
      <div className="hero min-h-screen mb-12">
        <div className="hero-content flex-col lg:flex-row grid  grid-cols-2 gap-20">
          <div className=" flex justify-center items-center p-6">
            <img src={img} alt="logIn img" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  shadow-slate-400 bg-base-100 p-6">
            <div className="card-body">
              <form className="form-control" onSubmit={handleLogin}>
                <h1 className="text-center text-4xl font-bold mb-6">
                  Log In Now
                </h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />

                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                    <a className="text-secondary" href="/">
                      Please Reset
                    </a>
                  </a>
                </label>
                <div className="form-control mt-6">
                  <button className="btn btn-secondary ">Login</button>
                </div>
              </form>
              <SocialLogin />
              <p className="text-sm">
                New to Here?{" "}
                <a className="text-secondary" href="/signUp">
                  Please Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
