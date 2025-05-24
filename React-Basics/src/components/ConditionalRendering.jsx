import React, { useState } from "react";
const ConditionalRendering = () => {
  const [number, setNumber] = useState(null);
  const handleCheck = () => {
    // if Statement
    if (number > 10) {
      alert(`${number} is greater than 10`);
    } else {
      alert(`${number} is less than 10`);
    }
  };
  return (
    <div>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={handleCheck}>Check</button>
      <br />
      {/* logical && */}
      {number > 10 && "number is greater than 10"}
      <br />
      {/* Ternary Operator */}
      {number > 0 ? "number is available" : "number is not available"}
    </div>
  );
};

export default ConditionalRendering;
