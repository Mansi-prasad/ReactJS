import { createSlice } from "@reduxjs/toolkit"; //  RTK, is a node package, and provide easy state management
//  Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.
const counterSlice = createSlice({
  name: "counter", //to identify the slice
  initialState: { counterValue: 0 },
  // slice reducer function to handle all updates to that state(how the state can be updated)
  reducers: {
    //methods which you want to support
    increment: (state) => {
      //Redux state updates immutably, by making copies of data and updating the copies.
      state.counterValue++;
    },
    decrement: (state) => {
      state.counterValue--;
    },
    add: (state, action) => {
      state.counterValue += Number(action.payload);
    },
    subtract: (state, action) => {
      state.counterValue -= Number(action.payload);
    },
    reset: (state) => {
      state.counterValue = 0;
    },
  },
});
export default counterSlice;
export const counterActions = counterSlice.actions;
