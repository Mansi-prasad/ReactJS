import React, { useRef } from "react";
import { useDispatch } from "react-redux"; //we can use the React-Redux hooks to let React components interact with the Redux store.
import "./DisplayCounter.css";
import { counterActions } from "../../Store/Counter";
import { privacyActions } from "../../Store/Privacy";
export const DisplayCounter = () => {
  const inputNumber = useRef();
  const dispatch = useDispatch(); //dispatch action -To change the state
  const handleIncrement = () => {
    // actions only tell what to do,
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleAdd = () => {
    dispatch(counterActions.add(inputNumber.current.value));
    inputNumber.current.value = "";
  };
  const handleSubtract = () => {
    // passing payload
    dispatch(counterActions.subtract(inputNumber.current.value));
    inputNumber.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch(privacyActions.privacyToggle());
  };
  const reset = () => {
    dispatch(counterActions.reset());
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
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};
