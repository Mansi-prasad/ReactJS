import React from "react";
import { useSelector } from "react-redux";
export const CounterValue = () => {
  const counter = useSelector((store) => store.counter); //gets a slice of the store.
  return (
    <>
      <p>Value of counter : {counter}</p>
    </>
  );
};
