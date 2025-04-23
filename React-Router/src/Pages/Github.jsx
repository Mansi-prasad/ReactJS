import React, { useEffect, useState } from "react";
// useLoaderData() is a hook provided by React Router to access data that was preloaded by a route loader.
import { useLoaderData } from "react-router-dom";
export const Github = () => {
  const githubData = useLoaderData();
  // const [githubData, setGithubData] = useState([]);
  useEffect(() => {
    // Api call for fetching the github followers
    // const url = "https://api.github.com/users/Mansi-prasad";
    // fetch(url)
    //   .then((res) => {
    //     if (!res.ok) {
    //       console.log("Error", res.status);
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setGithubData(data);
    //   });
  }, []);
  return (
    <>
      {/* {console.log(githubData)} */}

      <div className="m-10">
        <div className="w-full bg-gray-400 text-white text-center text-3xl py-3">
          <h1>Github Followers: {githubData.followers}</h1>
        </div>
        <div className="flex justify-start items-center m-10">
          <div className="flex flex-col items-center">
            <img
              src={githubData.avatar_url}
              alt="github image"
              className="rounded-full w-68 h-68"
            />
            <p className="mt-4">User: {githubData.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const githubInfoLoader = async () => {
  const url = "https://api.github.com/users/Mansi-prasad";
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }
  const data = await res.json();
  return data;
};
