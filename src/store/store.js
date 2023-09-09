import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import windowsizeSlice from "./windowSizes/windowsize.slice";
import websiteRoutesSlice from "./websiteRoutes/websiteRoutes.slice";
import authSlice from "./auth/auth.slice";
import registrationModalSlice from "./registrationModal/registrationModal.slice";
import { websiteReducer } from "./website/websiteSlice";
import { coursesReducer } from "./videos/videos.slice";
import { orderReducer } from "./order/order.slice";
const authPersitConfig = {
  key: "auth",
  storage,
};

const windowSizePersitConfig = {
  key: "windowSize",
  storage,
};

const websiteRoutesPersistConfig = {
  key: "websiteRoutes",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersitConfig, authSlice),
  windowSize: persistReducer(windowSizePersitConfig, windowsizeSlice),
  websiteRoutes: persistReducer(websiteRoutesPersistConfig, websiteRoutesSlice),
  registrationModal: registrationModalSlice,
  website: websiteReducer,
  courses: coursesReducer,
  order: orderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
