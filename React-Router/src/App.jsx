import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route 
        //loader provide fetaure to direct do api calls , data fetching befour useeffect run , it store the fetched data in cache behind the scene. 
        // loader=
        path="/github" element={<Github />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

// BrowserRouter doesn't support loaders or useLoaderData()
