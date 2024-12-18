import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsOpen } = navSlice.actions;
export default navSlice.reducer;
