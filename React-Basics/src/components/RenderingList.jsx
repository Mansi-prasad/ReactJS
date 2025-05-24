import React from "react";

const RenderingList = () => {
  const arr = [1, 2, 3, 4, 5];
  // 2. Using for loop
  const arrElements = [];
  for (let i = 0; i < arr.length; i++) {
    arrElements.push(<p key={i}>{arr[i]}</p>);
  }
  // 3. Using Array.forEach()
  const arrItems = [];
  arr.forEach((ele, index) => {
    arrItems.push(<p key={index}>{ele}</p>);
  });

  return (
    <div>
      {/* 1. array map() method */}
      {arr.map((n) => (
        <p key={Math.random()}>{n}</p>
      ))}
      {arrElements}
      {arrItems}
    </div>
  );
};

export default RenderingList;
