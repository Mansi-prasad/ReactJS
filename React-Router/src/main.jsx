import React from "react";
import "./index.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { User } from "./Pages/User";
import { Github, githubInfoLoader } from "./Pages/Github";
import ReactDOM from "react-dom/client";
import { Layout } from "./Layout";
import { Contact } from "./Pages/Contact";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
