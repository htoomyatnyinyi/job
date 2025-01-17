import { createSlice } from "@reduxjs/toolkit";
import { dashboardGraph, dashboardJobs, dashboardUsers } from "./dashAPI";

const initialState = {
  dash: {
    users: [],
    users_status: "idle",
    users_error: null,
    jobs: [],
    jobs_status: "idle",
    jobs_error: null,
    applied: [],
  },
  info: 0,
  stats: [
    { title: "Applied Jobs", count: 1 },
    { title: "Saved Jobs", count: 2 },
    { title: "Jobs", count: 34 },
    { title: "Users", count: 0 },
    { title: "TEST", count: 0 },
  ],
  status: "idle", // Consider removing this if unused
  error: null,
  isLoading: false,
};

const dashboardInfoSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setCount(state) {
      state.info = state.info + 1;
    },
    updateCount(state) {
      // Update the "Users" stat directly based on fetched data
      const usersCount = state.dash.users.length;
      const jobsCount = state.dash.jobs.length;
      const newStats = state.stats.map((stat) => {
        if (stat.title === "Users") {
          return { ...stat, count: usersCount }; // Create new object with updated count
        }
        if (stat.title === "Jobs") {
          return { ...stat, count: jobsCount }; // Create new object with updated count
        }
        return stat; // Keep other stats unchanged
      });
      state.stats = newStats; // Replace old stats with new stats object
    },
  },
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
      })
      .addCase(dashboardGraph.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(dashboardGraph.fulfilled, (state, action) => {
        state.dash.data = action.payload;
        state.isLoading = false;
      })
      .addCase(dashboardGraph.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setCount, updateCount } = dashboardInfoSlice.actions;

export default dashboardInfoSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";
// import { dashboardGraph, dashboardJobs, dashboardUsers } from "./dashAPI";

// const initialState = {
//   dash: {
//     users: [],
//     users_status: "idle",
//     users_error: null,
//     jobs: [],
//     jobs_status: "idle",
//     jobs_error: null,
//     applied: [],
//   },
//   info: 0,
//   stats: [
//     { title: "Applied Jobs", count: 1 },
//     { title: "Saved Jobs", count: 2 },
//     { title: "Jobs", count: 34 },
//     { title: "Users", count: 0 },
//     { title: "TEST", count: dash.users.length },
//   ],
//   status: "idle", // Consider removing this if unused
//   error: null,
//   isLoading: false,
// };

// const dashboardInfoSlice = createSlice({
//   name: "dashboard",
//   initialState,
//   reducers: {
//     setCount(state) {
//       state.info = state.info + 1;
//     },
//     updateCount(state) {
//       // Update the "Users" stat directly based on fetched data
//       const usersCount = state.dash.users.length;
//       const jobsCount = state.dash.jobs.length;
//       const newStats = state.stats.map((stat) => {
//         if (stat.title === "Users") {
//           return { ...stat, count: usersCount }; // Create new object with updated count
//         }
//         if (stat.title === "Jobs") {
//           return { ...stat, count: jobsCount }; // Create new object with updated count
//         }
//         return stat; // Keep other stats unchanged
//       });
//       state.stats = newStats; // Replace old stats with new stats object
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Handle dashboardUsers actions
//       .addCase(dashboardUsers.pending, (state) => {
//         state.dash.users_status = "loading";
//         state.isLoading = true;
//       })
//       .addCase(dashboardUsers.fulfilled, (state, action) => {
//         state.dash.users_status = "succeeded";
//         state.dash.users = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(dashboardUsers.rejected, (state, action) => {
//         state.dash.users_status = "failed";
//         state.dash.users_error = action.error.message;
//         state.isLoading = false;
//       })
//       // Handle dashboardJobs actions
//       .addCase(dashboardJobs.pending, (state) => {
//         state.dash.jobs_status = "loading";
//         state.isLoading = true;
//       })
//       .addCase(dashboardJobs.fulfilled, (state, action) => {
//         state.dash.jobs_status = "succeeded";
//         state.dash.jobs = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(dashboardJobs.rejected, (state, action) => {
//         state.dash.jobs_status = "failed";
//         state.dash.jobs_error = action.error.message;
//         state.isLoading = false;
//       })
//       .addCase(dashboardGraph.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(dashboardGraph.fulfilled, (state, action) => {
//         state.dash.data = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(dashboardGraph.rejected, (state) => {
//         state.isLoading = false;
//       });
//   },
// });

// export const { setCount, updateCount } = dashboardInfoSlice.actions;

// export default dashboardInfoSlice.reducer;
