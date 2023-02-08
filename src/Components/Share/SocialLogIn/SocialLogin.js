import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const googleSignup = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
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
          });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="divider ">Or Sign In With</div>
      <button
        onClick={googleSignup}
        className="btn w-full btn-secondary btn-outline"
      >
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
