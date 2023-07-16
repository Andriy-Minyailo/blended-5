import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { filter } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors

export const getFilter = (state) => state.filter.filter;
