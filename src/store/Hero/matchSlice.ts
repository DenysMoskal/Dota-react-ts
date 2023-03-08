import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchMatch } from "@/fetch/fetchMatch";
import { Match } from "@/modules/modulseMatch";

export const fetchMatchData = createAsyncThunk(
  "heroes/fetchMatchData",
  async (id: string) => {
    const data = await fetchMatch(id);
    return data;
  }
);

interface MatchState {
  data: Match;
  loading: boolean;
  error: string | null;
}

const initialState: MatchState = {
  data: {},
  loading: false,
  error: null,
};

const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatchData.pending, (state) => {
        state.data = {};
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchMatchData.fulfilled,
        (state, action: PayloadAction<Match | {}>) => {
          state.data = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(fetchMatchData.rejected, (state, action) => {
        state.data = {};
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default matchSlice.reducer;
