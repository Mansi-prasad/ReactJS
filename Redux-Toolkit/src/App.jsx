// React-Redux-> action type is difficult to maintain, store becomes too big, Mistakenly editing store, Reducer Becomes too big.
//Redux- Toolkit-> best way to use Redux

//steps to use redux-toolkit
// 1. npm install @reduxjs/toolkit
// 3. import {createSlice} from "@reduxjs/toolkit"
// 4. slice of the store can be created using -
// Const slice=createSlice({name:"",initialState:{},reducers:{smallReducerMethods:(state,action=>{})}})
// 5. ConfigureStore combines multiple reducers and can be used as:
// ConfigureStore({reducer:{name:slice.reducer}})
// 6. Export actions = slice.actions;
// Actiona can be dispatched like: actions.reducerMethod(payload);

import { useSelector } from "react-redux";
import "./App.css";
import { DisplayCounter } from "./Components/DisplayCounter/DisplayCounter";
import { PrivacyMsg } from "./Components/PrivacyMsg";
import { CounterValue } from "./Components/CounterValue";
function App() {
  const privacy = useSelector((state) => state.privacy);
  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        {privacy ? <CounterValue /> : <PrivacyMsg />}
        <DisplayCounter />
      </div>
    </>
  );
}

export default App;
