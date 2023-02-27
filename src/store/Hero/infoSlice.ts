import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchHeroInfo } from "../../fetch/fetchHeroes";
import { InfoHero } from "@modules/modulesHeroes";

export const fetchInfoHeroData = createAsyncThunk(
  "hero/fetchInfoHeroData",
  async (id: number, thunkApi) => {
    const info = await fetchHeroInfo(id);
    return info.slice(0, 10);
  }
);

interface HeroesState {
  info: InfoHero[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: HeroesState = {
  info: [],
  status: "idle",
  error: "null",
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfoHeroData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchInfoHeroData.fulfilled,
        (state, action: PayloadAction<InfoHero[]>) => {
          state.status = "succeeded";
          state.info = action.payload;
        }
      )
      .addCase(fetchInfoHeroData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default infoSlice.reducer;
