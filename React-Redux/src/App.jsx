import { useSelector } from "react-redux";
import "./App.css";
import { DisplayCounter } from "./Components/DisplayCounter";
import { PrivacyMsg } from "./Components/PrivacyMsg";
import { CounterValue } from "./Components/CounterValue";

//  npm install redux
//  npm install react-redux
//  create stote folder with index.js file
// create the store using import {createStore} from redux
// Provide the store with react
// 1. Provider from react.redux
// 2. <Provider store={store}><App/></Provider>
// Using the store
// 1. useSelector Hook gets a slice of the store.
//  Const counter-useselector=> state.counter
// 2. subscription is already setup and only will re-execute when only your slice is changed.
function App() {
  const privacy = useSelector((state) => state.privacy);
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          width: "20%",
          margin: "auto",
          padding: "20px 30px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Counter</h1>
        {privacy ? <CounterValue /> : <PrivacyMsg />}
        <DisplayCounter />
      </div>
    </>
  );
}

export default App;
