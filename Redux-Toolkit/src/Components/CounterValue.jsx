import React from "react";
import { useSelector } from "react-redux"; // helps to read data from the store
export const CounterValue = () => {
  const { counterValue } = useSelector((store) => store.counter); //gets a slice of the store.
  return (
    <>
      {/* {console.log("counter value", counterValue)} */}
      <p>Value of counter : {counterValue}</p>
    </>
  );
};
