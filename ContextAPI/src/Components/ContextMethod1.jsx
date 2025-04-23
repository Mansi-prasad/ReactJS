import React from "react";
import { Login } from "./Login";
import { Profile } from "./Profile";
import UserContextProvider from "../Context/UserContext";
export const ContextMethod1 = () => {
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
