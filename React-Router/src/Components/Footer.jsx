import React from "react";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mx-6 md:mx-20 border-y border-gray-500 md:p-12">
      <div className=" w-full grid grid-cols-2 grid-rows-2 gap-10 p-4 md:grid-cols-4 md:grid-rows-1">
        <div className="text-left text-2xl md:text-5xl text-red-600 font-bold ">Logo</div>
        <div className="">
          <h2 className="text-xl font-semibold">RESOURSES</h2>
          <ul className="py-3 text-lg font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red-600" : "text-gray-700"
                  }  hover:text-red-500 lg:p-0`
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
                  }  hover:text-red-500 lg:p-0`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red-600" : "text-gray-700"
                  }  hover:text-red-500`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="text-xl font-semibold">Follow US</h2>
          <ul className="py-3 text-lg font-semibold text-gray-700">
            <li className="hover:text-blue-500 hover:underline">
              <a href="https://github.com/Mansi-prasad/">Github</a>
            </li>
            <li className="hover:text-red-500 ">
              <Link to="#">Discord</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-xl font-semibold">LEGAL</h2>
          <ul className="py-3 text-lg font-semibold text-gray-700">
            <li className="hover:text-red-500">
              <Link to="#">Privacy Policy</Link>
            </li>
            <li className="hover:text-red-500">
              <Link to="#">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
