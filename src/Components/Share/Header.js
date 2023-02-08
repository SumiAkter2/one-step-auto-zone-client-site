import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      {user ? (
        <>
          <li className="font-semibold">
            <Link to="/orders">Order</Link>
          </li>
          <li className="font-semibold">
            <button onClick={handleSignOut} className="btn btn-ghost">
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/logIn">Log In</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 h-20 mb-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a
            href="/"
            className="flex justify-center items-center uppercase text-xl font-bold"
          >
            <img src={logo} alt="" className="w-20" />
            One Step Auto Zone
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <a href="/" className="btn btn-outline btn-secondary">
            Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
