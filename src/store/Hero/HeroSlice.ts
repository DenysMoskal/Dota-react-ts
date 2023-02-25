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
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: HeroesState = {
  data: [],
  status: "idle",
  error: null,
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroesData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchHeroesData.fulfilled,
        (state, action: PayloadAction<Hero[]>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(fetchHeroesData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default heroesSlice.reducer;
