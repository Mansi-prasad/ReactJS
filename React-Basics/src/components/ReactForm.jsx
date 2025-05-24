import React, { useState } from "react";
export const ReactForm = () => {
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Password: "",
    Address: "",
    Hobby: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(userData));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="Name"
            value={userData.Name}
            placeholder="Enter name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            name="Email"
            value={userData.Email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            name="Password"
            value={userData.Password}
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <textarea
            id="address"
            name="Address"
            value={userData.Address}
            onChange={handleChange}
          >
            Enter address
          </textarea>
        </div>
        <div>
          <label htmlFor="hobby">Select Hobby:</label>
          <select
            name="Hobby"
            id="hobby"
            value={userData.Hobby}
            onChange={handleChange}
          >
            <option value="A">aa</option>
            <option value="B">bb</option>
            <option value="C">cc</option>
          </select>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
