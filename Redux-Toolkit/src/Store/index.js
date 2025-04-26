import { configureStore } from "@reduxjs/toolkit"; // configureStore API from Redux Toolkit.
import privacySlice from "./Privacy";
import counterSlice from "./Counter";
// creting slice 1.

// creating slice 2.

// combine slices into store.
const counterStore = configureStore({ //configureStore accepts a reducer function as a named argument
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export default counterStore;
