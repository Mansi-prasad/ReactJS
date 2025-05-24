import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "./CustomHook";
const FetchingData = () => {
  //  1. Fetch Data from API using fetch method
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setTodos(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // 2. Fetch data using API using Axios Package:
  const fetchDataWithAxios = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users"); // axios already parses JSON
    // console.log(res.data);
    setUsers(res.data);
  };
  useEffect(() => {
    fetchDataWithAxios();
  }, []);
  // 3. Using Custom hook
  const {
    data: postData,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;
  if (!Array.isArray(postData)) return <p>Data format is incorrect</p>;
  return (
    <>
      <h2>Fetch Data from API using fetch method: </h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {todos.slice(0, 50).map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "green",
              margin: "10px",
              width: "300px",
              padding: "5px 20px",
            }}
          >
            <p>{item.id}</p>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <h2>Fetch data using API using Axios Package:</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user) => {
          return (
            <div
              key={user.id}
              style={{
                backgroundColor: "pink",
                margin: "10px",
                padding: "10px",
              }}
            >
              <p>{user.id}</p>
              <p>{user.name}</p>
            </div>
          );
        })}
      </div>
      <h2>Fetch data using Custom hook:</h2>
      {loading ? (
        "Loading....."
      ) : (
        <>
          {postData.slice(0, 10).map((post) => (
            <div key={post.id}>
              <p>Title: {post.title}</p>
              <p>Body:{post.body}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default FetchingData;
