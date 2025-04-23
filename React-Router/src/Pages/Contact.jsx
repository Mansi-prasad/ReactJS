import React from "react";

import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
export const Contact = () => {
  return (
    <>
      <div className="m-10 md:flex justify-center gap-30 items-center md:m-20">
        <div className="bg-gray-100 p-8 m-6">
          <div className="">
            <div className="py-4 text-3xl font-semibold text-center">
              <h1>Get in touch</h1>
            </div>
            <div className="flex items-center gap-3 pb-4 text-lg">
              <IoLocationOutline />
              <p>Street name, City, State</p>
            </div>
            <div className="flex items-center gap-3 pb-4 text-lg">
              <CiPhone />
              <p>+ 53446557786</p>
            </div>
            <div className="flex items-center gap-3 pb-4 text-lg">
              <CiMail />
              <p>info@fsfd.org</p>
            </div>
          </div>
        </div>
        <div className="w-68 ml-8 border-1 p-8 md:w-86 md:m-10">
          <form action="">
            <div className="flex flex-row justify-between items-center px-2 border rounded-xl m-4">
              <FaRegUser className="text-xl" />
              <input
                type="text"
                placeholder="Full Name"
                className="border-none outline-none p-2 w-full "
              />
            </div>
            <div className="flex flex-row justify-between items-center px-2 border rounded-xl m-4">
              <CiMail className="text-2xl" />
              <input
                type="email"
                placeholder="email@mail.com"
                className="border-none outline-none p-2 w-full "
              />
            </div>
            <div className="flex flex-row justify-between items-center px-2 border rounded-xl m-4">
              <CiPhone className="text-2xl" />
              <input
                type="text"
                placeholder="Telephone Number"
                className="border-none outline-none p-2 w-full "
              />
            </div>
            <div className="m-4">
              <input
                type="submit"
                value="Submit"
                className="rounded-xl bg-red-600 border-none text-white px-4 py-1"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
