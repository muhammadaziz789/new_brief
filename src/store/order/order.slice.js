import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  couponData: {},
  orderData: {}
};

export const { actions: orderActions, reducer: orderReducer } = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCouponData: (state, action) => {
      state.couponData = action.payload;
    },
    setOrderData: (state, { payload }) => {
      state.orderData = payload
    }
  },
});
