import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/app/Feature/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
