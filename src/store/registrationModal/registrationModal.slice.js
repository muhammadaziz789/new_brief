import { createSlice } from "@reduxjs/toolkit";

export const registrationModalSlice = createSlice({
  name: "registrationModal",
  initialState: {
    modalOpen: false,
    logoutModalOpen: false,
    step: "login",
    loginData: {},
    successModalOpen: {},
  },
  reducers: {
    setRegistrationModalOpen: (state, action) => {
      state.modalOpen = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setLoginData: (state, action) => {
      state.loginData = action.payload;
    },
    setLogoutModalOpen: (state, action) => {
      state.logoutModalOpen = action.payload;
    },
    setSuccessModalOpen: (state, action) => {
      state.successModalOpen = action.payload;
    },
  },
});

export const { setRegistrationModalOpen } = registrationModalSlice.actions;
export const { setStep } = registrationModalSlice.actions;
export const { setLoginData } = registrationModalSlice.actions;
export const { setLogoutModalOpen } = registrationModalSlice.actions;
export const { setSuccessModalOpen } = registrationModalSlice.actions;

export default registrationModalSlice.reducer;
