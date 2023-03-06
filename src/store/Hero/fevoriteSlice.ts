import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { itemType } from "@/components/AllHero/HeroCard";
import { getLocalStorage } from "@/utils/localStorage";

export interface initialStateFavoriteType {
  favorite: itemType[] | any;
}

const initialState: initialStateFavoriteType = {
  favorite: getLocalStorage("store"),
};

export const favoriteSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<itemType>) => {
      state.favorite = [...state.favorite, action.payload];
    },
    removeFromFavorite: (state, action: PayloadAction<number>) => {
      state.favorite = state.favorite.filter(
        (item: itemType) => item.id !== action.payload
      );
    },
    clearFavorite: (state) => {
      state.favorite = [];
    },
  },
});

export const { addToFavorite, removeFromFavorite, clearFavorite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
