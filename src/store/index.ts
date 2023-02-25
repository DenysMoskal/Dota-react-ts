import { configureStore } from "@reduxjs/toolkit";
import HeroSlice from "./Hero/HeroSlice";

export const store = configureStore({
  reducer: {
    hero: HeroSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
