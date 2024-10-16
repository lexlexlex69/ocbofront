import { createSlice } from "@reduxjs/toolkit";

export const dateFilterSlice = createSlice({
  name: "requestFilter",
  initialState: {
    params: {
      keyword: "",
      date_from: "",
      date_to: "",
    },
  },
  reducers: {
    clearState: (state) => {
      state.keyword = "";
      state.date_from = "";
      state.date_to = "";
      state.errors = "";
      state.isFetching = false;
    },
    setParams: (state, action) => {
      state.params = action.payload;
      return state;
    },
  },
});
