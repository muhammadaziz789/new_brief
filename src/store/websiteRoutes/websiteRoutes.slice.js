import { createSlice } from "@reduxjs/toolkit";

export const websiteRoutesFn = createSlice({
  name: "websiteRoutes",
  initialState: {
    routes: [],
    noHeaderPages: [],
    noFooterPages: [],
  },
  reducers: {
    setRoutes: (state, action) => {
      state.routes = action.payload;
    },
    setNoHeaderPages: (state, action) => {
      state.noHeaderPages = action.payload;
    },
    setNoFooterPages: (state, action) => {
      state.noFooterPages = action.payload;
    },
  },
});

export const { setRoutes } = websiteRoutesFn.actions;
export const { setNoFooterPages } = websiteRoutesFn.actions;
export const { setNoHeaderPages } = websiteRoutesFn.actions;

export default websiteRoutesFn.reducer;
