import { createSlice } from "@reduxjs/toolkit";
import PropType from "prop-types";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "",
  },
  reducers: {
    searchByCar(state, action) {
      state.filter = action.payload;
    },
  },
});

filterSlice.protype = {
  filter: PropType.string.isRequired,
};

export const { searchByCar } = filterSlice.actions;
export default filterSlice.reducer;
