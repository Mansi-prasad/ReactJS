import React from "react";
export const Home = () => {
  return (
    <>
      <div className="md:flex justify-around items-center mx-20 py-20">
        <div className="order-1">
          <img
            src="../../public/img1.png"
            alt="Banner image"
            className="w-120"
          />
        </div>
        <div className="order-2">
          <div>
            <h2 className="text-5xl font-bold py-4">Download Now</h2>
          </div>
          <div>
            <p className="pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, natus.
            </p>
          </div>
          <button className="border-gray-200 rounded-xl bg-red-600 p-2 text-white font-semibold hover:bg-red-500 ">
            Download Now
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <img src="../../public/img2.webp" alt="Banner image" className="w-86"/>
          <p className="pb-12 text-3xl text-center">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </>
  );
};
