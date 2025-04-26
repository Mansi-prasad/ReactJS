import React, { useRef } from "react";
import { useDispatch } from "react-redux"; //Redux is a state managing library
import "./DisplayCounter.css";

export const DisplayCounter = () => {
  const inputNumber = useRef();

  const dispatch = useDispatch(); //dispatch action -To change the state
  const handleIncrement = () => {
    // actions only tell what to do,
    dispatch({ type: "INCREMENT" }); //action type- field define what kind of action to perform
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        number: inputNumber.current.value,
      },
    });
    inputNumber.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        number: inputNumber.current.value,
      },
    });
    inputNumber.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <>
      <div className="btns">
        <button className="green-btn" onClick={handleIncrement}>
          +1
        </button>
        <button className="red-btn" onClick={handleDecrement}>
          -1
        </button>
        <button className="privacy-btn" onClick={handlePrivacy}>
          Privacy Toggle
        </button>
      </div>
      <div>
        <div className="input">
          <input type="text" placeholder="Enter Number" ref={inputNumber} />
          <button className="green-btn" onClick={handleAdd}>
            Add
          </button>
          <button className="red-btn" onClick={handleSubtract}>
            Subtract
          </button>
        </div>
        <button className="reset-btn" onClick={reset}>Reset</button>
      </div>
    </>
  );
};
