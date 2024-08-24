import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filterValue: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue: (state, action) => {state.filterValue = action.payload }
  },
});

export const FilterReducer = filterSlice.reducer;
export const {setFilterValue} = filterSlice.actions

