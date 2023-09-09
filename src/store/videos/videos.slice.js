import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seminars: [],
  courses: [],
};

export const { actions: coursesAction, reducer: coursesReducer } = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setSeminarVideos: (state, action) => {
      state.seminars = action.payload;
    },
    setCourses: (state, { payload }) => {
      state.courses = payload;
    },
  },
});
