import { configureStore } from "@reduxjs/toolkit";
import HeroSlice from "./Hero/heroesSlice";
import filterSlice from "./Hero/filterSlice";
import infoSlice from "./Hero/infoSlice";

export const store = configureStore({
  reducer: {
    hero: HeroSlice,
    filter: filterSlice,
    info: infoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
