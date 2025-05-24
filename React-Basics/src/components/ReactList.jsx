import React from "react";
// we can render list with loop
const ReactList = () => {
  const names = ["Mansi", "Ishika", "Archna", "Neha", "Mitanshi"];
  return (
    <>
      <div>
        {/* array map() method to iterate over items */}
        {names.map((item) => {
          return <div key={Math.random()}>{item}</div>;
        })}
      </div>
      {/* Filter an Array  */}
      <div>
        <p>Name starts with M: </p>
        {names
          .filter((name) => name.startsWith("M"))
          .map((n) => (
            <p key={Math.random()}>{n}</p>
          ))}
      </div>
    </>
  );
};
export default ReactList;
