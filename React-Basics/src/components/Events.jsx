import React, { useState } from "react";
// React events are written in camelCase
const Events = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent to reload the page after form submit
    console.log("name: ", name);
    alert("form submitted by: " + name); // not use comma to concatinate
  };
  const handleClick = (e) => {
    const { type, clientX, clientY } = e;
    console.log(type, clientX, clientY);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div>
        <button onClick={(eve) => handleClick(eve)}>Click</button>
        <button onMouseEnter={() => alert("mouse enter")}>
          On mouse Enter
        </button>
        <button onKeyUp={() => alert("key up")}>
          On key up(releases any key )
        </button>{" "}
        <button onKeyDown={() => alert("key down")}>
          On key down(press any key)
        </button>
      </div>
    </>
  );
};

export default Events;
