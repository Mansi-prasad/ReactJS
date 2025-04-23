import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
const NavBar = () => {
  const NavList = (
    <>
      <li>
        {/* navlink provide a default value for isAction, define the active link  */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "text-red-600" : "text-gray-700"
            } hover:text-red-500 lg:p-0`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive ? "text-red-600" : "text-gray-700"
            } hover:text-red-500 lg:p-0`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/github"
          className={({ isActive }) =>
            `${
              isActive ? "text-red-600" : "text-gray-700"
            } hover:text-red-500 lg:p-0`
          }
        >
          Github
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${
              isActive ? "text-red-600" : "text-gray-700"
            } hover:text-red-500 lg:p-0`
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavList}
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-red-600 text-4xl">Logo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 font-semibold">{NavList}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-red-600 text-white"> Get Started</a>
        </div>
      </div>
    </>
  );
};
export default NavBar;
