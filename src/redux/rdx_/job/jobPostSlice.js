// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_BASE_URL = "http://localhost:8080";
// // const Token =
// //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlclR5cGUiOiJFbXBsb3llciIsImlhdCI6MTcyMzQ3MTU4OCwiZXhwIjoxNzIzNDc1MTg4fQ.ChCw0q4xcdr1A69Tv-n-ooJDyHsXRorJd27LLXEm_1Y";
// const Token = localStorage.getItem("mlab");
// // Thunks
// export const createJobPosting = createAsyncThunk(
//   "jobPosting/create-posting",
//   async (jobData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/create-posting`,
//         jobData,
//         {
//           headers: {
//             Authorization: `Bearer ${Token}`,
//           },
//         }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const getAllJobPostings = createAsyncThunk(
//   "jobPosting/allposting",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/allposting`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const jobPostingSlice = createSlice({
//   name: "jobPosting",
//   initialState: {
//     postings: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(createJobPosting.fulfilled, (state, action) => {
//         state.postings.push(action.payload);
//       })
//       .addCase(getAllJobPostings.fulfilled, (state, action) => {
//         state.postings = action.payload;
//       });
//   },
// });

// export default jobPostingSlice.reducer;
