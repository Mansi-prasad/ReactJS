import "./App.css";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("aqua");
  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="button-box">
        <button
          onClick={() => {
            setColor("red");
          }}
          className="color-btn"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
          className="color-btn"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("purple");
          }}
          className="color-btn"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>
        <button
          onClick={() => {
            setColor("olive");
          }}
          className="color-btn"
          style={{ backgroundColor: "olive" }}
        >
          Olive
        </button>
        <button
          onClick={() => {
            setColor("orange");
          }}
          className="color-btn"
          style={{ backgroundColor: "orange" }}
        >
          Orange
        </button>
        <button
          onClick={() => {
            setColor("black");
          }}
          className="color-btn"
          style={{ backgroundColor: "black" }}
        >
          Black
        </button>
        <button
          onClick={() => {
            setColor("yellow");
          }}
          className="color-btn"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => {
            setColor("gray");
          }}
          className="color-btn"
          style={{ backgroundColor: "gray" }}
        >
          Gray
        </button>
        <button
          onClick={() => {
            setColor("pink");
          }}
          className="color-btn"
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
          className="color-btn"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => {
            setColor("maroon");
          }}
          className="color-btn"
          style={{ backgroundColor: "maroon" }}
        >
          Maroon
        </button>
      </div>
    </div>
  );
}
export default App;
