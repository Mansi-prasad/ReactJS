import { createSlice } from "@reduxjs/toolkit";
const privacySlice = createSlice({
  name: "Privacy",
  initialState: false,
  reducers: {
    privacyToggle: (state) => (state = !state),
  },
});
export default privacySlice;
export const privacyActions = privacySlice.actions;
