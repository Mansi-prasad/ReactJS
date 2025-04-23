import React from "react";
import UserContextProvider from "./Context/UserContext";
import { Login } from "./Components/Login";
import { Profile } from "./Components/Profile";
export const App = () => {
  return (
    <>
      <UserContextProvider>
        <h1>UseContext </h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
};
