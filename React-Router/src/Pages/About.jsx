import React from "react";

export const About = () => {
  return (
    <>
      <div>
        <div className="md:flex justify-around items-center my-10">
          <div className="mx-10 md:w-1/2">
            <img
              src="../../public/aboutImage.jpeg"
              alt="About image"
              className="w-120 h-auto mx-auto object-cover rounded-lg"
            />
          </div>
          <div className="mx-10 md:w-1/2 pr-4">
            <h1 className="text-5xl font-semibold py-2">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className=" text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              quia excepturi est saepe quidem praesentium facere eos perferendis
              deleniti ad. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Reiciendis impedit no doloribusm ipsum dolor sit amet,
              consectetur adipisicing elit. Quidem sequi illo aliquid? Magni
              illum repellat mollitia eligendi id iste quidem! Lorem ipsum dolor
              sit amet,deleniti velit soluta obcaecati id
              incidunt quidem est iusto explicabo, vel ducimus at? Unde
              accusamus illo assumenda eligendi hic totam exercitationem cumque
              saepe inventore odit velit earum magnam, quaerat sequi, voluptate
              voluptatibus? Pariatur totam adipisci fugiat.
            </p>
          </div>
        </div>
      </div>

    </>
  );
};
