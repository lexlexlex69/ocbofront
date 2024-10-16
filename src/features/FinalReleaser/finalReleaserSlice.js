import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFinalReleased = createAsyncThunk(
  "finalReleaser/getFinalReleased",
  async (filters, thunkAPI) => {
    try {
      const response = await axios({
        url: "api/final-releaser/dashboard",
        method: "GET",
        params: filters,
      });
      if (response.data) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getForFinalReleasing = createAsyncThunk(
  "finalReleaser/getForFinalReleasing",
  async (filters, params, thunkAPI) => {
    try {
      const response = await axios({
        url: "api/final-releaser/dashboard",
        method: "GET",
        params: filters,
      });
      if (response.data) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const finalReleaserSlice = createSlice({
  name: "finalReleaser",
  initialState: {
    finalReleased: [],
    forAction: [],
    errors: "",
    isFetching: false,
  },
  reducers: {
    clearState: (state) => {
      state.finalReleased = [];
      state.errors = "";
      state.isFetching = false;
    },
    setDataProps: (state, action) => {
      state.finalReleased = action.payload;
    },
    setShowLoading: (state, action) => {
      state.isFetching = action.payload;
    },
    setDataForReceiving: (state, action) => {
      state.forAction = action.payload;
    },
  },
  extraReducers: {
    [getFinalReleased.pending]: (state) => {
      state.isFetching = true;
    },
    [getFinalReleased.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.errors = payload;
    },
    [getFinalReleased.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.errors = "";
      state.finalReleased = payload;
    },
    [getForFinalReleasing.pending]: (state) => {
      state.isFetching = true;
    },
    [getForFinalReleasing.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.errors = payload;
    },
    [getForFinalReleasing.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.errors = "";
      state.forAction = payload;
    },
  },
});
