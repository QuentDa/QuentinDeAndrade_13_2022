import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";

const store = configureStore({
  reducer: {
    AUTH: authSlice,
  },
});

export default store;