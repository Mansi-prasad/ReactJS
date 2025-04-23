import React, { useState } from "react";
export const UserContext = React.createContext(); // is a provider
//providing a centralized way to manage state across components.
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const contextValue = {
    user,
    setUser,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
export default UserContextProvider;
