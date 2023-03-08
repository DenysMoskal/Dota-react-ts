import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchHeroes } from "../../fetch/fetchHeroes";
import { Hero } from "@modules/modulesHeroes";

export const fetchHeroesData = createAsyncThunk(
  "heroes/fetchHeroesData",
  async () => {
    const data = await fetchHeroes();
    return data;
  }
);

interface HeroesState {
  data: Hero[];
  loading: boolean;
  error: string | null;
}

const initialState: HeroesState = {
  data: [],
  loading: false,
  error: null,
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroesData.pending, (state) => {
        state.data = [];
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchHeroesData.fulfilled,
        (state, action: PayloadAction<Hero[]>) => {
          state.data = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(fetchHeroesData.rejected, (state, action) => {
        state.data = [];
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default heroesSlice.reducer;
