import { configureStore } from "@reduxjs/toolkit";
import HeroSlice from "./Hero/heroesSlice";
import filterSlice from "./Hero/filterSlice";
import infoSlice from "./Hero/infoSlice";
import favoriteSlice from "./Hero/fevoriteSlice";
import { setLocalStorage } from "@/utils/localStorage";

export const store = configureStore({
  reducer: {
    hero: HeroSlice,
    filter: filterSlice,
    info: infoSlice,
    favorite: favoriteSlice,
  },
});

store.subscribe(() => {
  setLocalStorage("store", store.getState().favorite);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
