import { createStore } from "redux";
const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

// reducers, a function that take the current state and action and return the new state and tell the store how to do.
// 1. Store: The store is the object which holds the state of the application.
// 2. actions only tell what to do,
const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + Number(action.payload.number) };
  } else if (action.type === "SUBTRACT") {
    return { ...store, counter: store.counter - Number(action.payload.number) };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { ...store, privacy: !store.privacy };
  } else if (action.type === "RESET") {
    return { counter: 0 };
  }
  return store;
};
const counterStore = createStore(counterReducer);
export default counterStore;
