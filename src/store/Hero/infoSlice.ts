import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchHeroInfo } from "../../fetch/fetchHeroes";
import { InfoHero } from "@modules/modulesHeroes";
import { RootState } from "..";

interface HeroesState {
  info: InfoHero[];
  count: number;
  loading: boolean;
  error: boolean;
}

export const fetchInfoHeroData = createAsyncThunk(
  "hero/fetchInfoHeroData",
  async (id: number, { getState }) => {
    const info = await fetchHeroInfo(id);
    const count = getState() as RootState;

    return info.slice(0, count.info.count);
  }
);

const initialState: HeroesState = {
  info: [],
  count: 10,
  loading: false,
  error: false,
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    changeCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfoHeroData.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        fetchInfoHeroData.fulfilled,
        (state, action: PayloadAction<InfoHero[]>) => {
          state.loading = false;
          state.error = false;
          state.info = action.payload;
        }
      )
      .addCase(fetchInfoHeroData.rejected, (state) => {
        state.info = [];
        state.loading = false;
        state.error = true;
      });
  },
});

export const { changeCount } = infoSlice.actions;
export default infoSlice.reducer;
