// In resumeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchResume } from "./resumeAPI";

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    resumes: [],
    previewResume: null, // Add this line if it doesn't exist
    status: "idle",
    error: null,
  },
  reducers: {
    setPreviewResume: (state, action) => {
      state.previewResume = action.payload;
    },
  },
  // your other reducers here
  extraReducers: (builder) => {
    builder
      .addCase(fetchResume.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchResume.fulfilled, (state, action) => {
        // console.log(action.payload, "at slice");
        state.status = "succeeded";
        state.resumes = action.payload;
      })
      .addCase(fetchResume.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setPreviewResume } = resumeSlice.actions;
export default resumeSlice.reducer;
