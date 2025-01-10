import { createSlice } from "@reduxjs/toolkit";
import { dashboardJobs, dashboardUsers } from "./dashAPI";

const initialState = {
  info: [],
  dash: {
    users: [],
    users_status: "idle",
    users_error: null,
    jobs: [],
    jobs_status: "idle",
    jobs_error: null,
    applied: [],
  },
  status: "idle", // Consider removing this if unused
  error: null,
  isLoading: false,
};

const dashboardInfoSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle dashboardUsers actions
      .addCase(dashboardUsers.pending, (state) => {
        state.dash.users_status = "loading";
        state.isLoading = true;
      })
      .addCase(dashboardUsers.fulfilled, (state, action) => {
        state.dash.users_status = "succeeded";
        state.dash.users = action.payload;
        state.isLoading = false;
      })
      .addCase(dashboardUsers.rejected, (state, action) => {
        state.dash.users_status = "failed";
        state.dash.users_error = action.error.message;
        state.isLoading = false;
      })
      // Handle dashboardJobs actions
      .addCase(dashboardJobs.pending, (state) => {
        state.dash.jobs_status = "loading";
        state.isLoading = true;
      })
      .addCase(dashboardJobs.fulfilled, (state, action) => {
        state.dash.jobs_status = "succeeded";
        state.dash.jobs = action.payload;
        state.isLoading = false;
      })
      .addCase(dashboardJobs.rejected, (state, action) => {
        state.dash.jobs_status = "failed";
        state.dash.jobs_error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default dashboardInfoSlice.reducer;
