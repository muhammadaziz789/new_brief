import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    loginSuccess: (state, { payload }) => {
      state.token = payload.token;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => initialState,
  },
});

export const { setUser } = authActions;
export const { setToken } = authActions;
export const { logout } = authActions;

export default authReducer;
