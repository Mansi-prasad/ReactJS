import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext.jsx";

export const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return (
    <div>
      <h3>Welcome {user.username}</h3>
    </div>
  );
};
