import React from "react";

const PropsPassing = ({ myName, isLoggedIn, myObj, array, myFunction }) => {
  console.log(myName, isLoggedIn, myObj, array, myFunction);
  return (
    <div>
      <p>{myName}</p>
      <p> isLoggedIn: {isLoggedIn ? "true" : "false"}</p>
      <p>
        {myObj.id}, {myObj.name}, {myObj.age}
      </p>
      <p>{array}</p>
      <button onClick={myFunction}>Greet</button>
    </div>
  );
};

export default PropsPassing;
