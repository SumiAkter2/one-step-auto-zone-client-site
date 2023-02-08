import React, { useContext } from "react";

import { setAuthToken } from "../../../api/Auth";
import { AuthContext } from "../../../Context/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const googleSignup = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setAuthToken(user);
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
