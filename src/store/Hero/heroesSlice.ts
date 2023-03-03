import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchHeroes, fetchHeroInfo } from "../../fetch/fetchHeroes";
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
  error: boolean;
}

const initialState: HeroesState = {
  data: [],
  loading: false,
  error: false,
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
        state.error = false;
      })
      .addCase(
        fetchHeroesData.fulfilled,
        (state, action: PayloadAction<Hero[]>) => {
          state.data = action.payload;
          state.loading = false;
          state.error = false;
        }
      )
      .addCase(fetchHeroesData.rejected, (state) => {
        state.data = [];
        state.loading = false;
        state.error = true;
      });
  },
});

export default heroesSlice.reducer;
