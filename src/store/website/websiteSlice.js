import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "uz",
  alert: {},
  skeleton: true,
  skeletonTime: 500,
  mobileMenuOpen: false,
  youtubeVideoModalOpen: {},
};

export const { actions: websiteActions, reducer: websiteReducer } = createSlice(
  {
    name: "website",
    initialState,
    reducers: {
      setWebsiteLang: (state, { payload }) => {
        state.lang = payload;
      },
      setSkeletonActive: (state, action) => {
        state.skeleton = action.payload;
      },
      setSkeletonTime: (state, action) => {
        state.skeletonTime = action.payload;
      },
      setMobileMenuOpen: (state, { payload }) => {
        state.mobileMenuOpen = payload;
      },
      setYoutubeVideoModal: (state, { payload }) => {
        state.youtubeVideoModalOpen = payload;
      },
      setAlertData: (state, { payload }) => {
        state.alert = payload;
      },
    },
  }
);
