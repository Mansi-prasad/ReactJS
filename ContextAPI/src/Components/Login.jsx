import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext.jsx";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // setUser value is passing through the Provider
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    //prevent to send data throught http method
    e.preventDefault();
    //sending data
    setUser({ username, password });
  };
  return (
    <div>
      <form>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
