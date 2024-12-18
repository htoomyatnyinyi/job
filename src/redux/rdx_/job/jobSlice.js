// // src/features/posts/postsSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL = "http://localhost:8080";

// export const fetchJobs = createAsyncThunk(
//   "jobs/fetchJobs",
//   async (_, { getState }) => {
//     // async (_, { getState }) => {
//     // Get the token from the auth state
//     const token = getState().auth.token;
//     // console.log(token);

//     // Configure the headers with the token
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const response = await axios.get(`${API_URL}/allposting`, config);
//     // console.log(response.data);
//     return response.data;
//   }
// );

// const initialState = {
//   jobs: [],
//   status: "idle",
//   error: null,
//   jobID: 1,
// };

// const jobSlice = createSlice({
//   name: "jobs",
//   initialState,
//   reducers: {
//     jobDetails: (state, action) => {
//       state.posts.push(action.payload);
//     },
//     setJobID: (state, action) => {
//       state.postID = action.payload;
//     },
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchJobs.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchJobs.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.posts = action.payload;
//       })
//       .addCase(fetchJobs.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { jobDetails, setJobID } = jobSlice.actions;
// export default jobSlice.reducer;
