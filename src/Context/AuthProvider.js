import React, { createContext } from "react";
import app from "../Firebase/firebase.init";

const AuthContext = createContext();
// const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
