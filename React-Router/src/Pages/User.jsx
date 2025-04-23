import React from "react";
import { useParams } from "react-router-dom";
export const User = () => {
  // useParams is a hook in React Router that allows you to access route parameters from the current URL
  const { userid } = useParams();
  return (
    <>
      <div className="h-screen">
        <h1 className="text-center mt-20 text-3xl">Hello, UserId is : {userid}</h1>
      </div>
    </>
  );
};
