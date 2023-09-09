import { createSlice } from "@reduxjs/toolkit";

export const windowsizeSliceFn = createSlice({
  name: "windowsize",
  initialState: {
    minDesktop: 1200,
    tablet: 1135,
    ipod: 980,
    mobile: 768,
    small: 540,
  },
  reducers: {
    setIpodSize: (state, action) => {
      state.ipod = action.payload;
    },
    setMobileSize: (state, action) => {
      state.mobile = action.payload;
    },
  },
});

export const { setMobileSize } = windowsizeSliceFn.actions;
export const { setIpodSize } = windowsizeSliceFn.actions;

export default windowsizeSliceFn.reducer;
