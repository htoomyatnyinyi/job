// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// // this code is copy from profileSlice
// const API_URL = "http://localhost:8080";

// // Fetch users with token
// export const fetchResume = createAsyncThunk(
//   "profile/fetchResume",
//   async (_, { getState }) => {
//     // Get the token from the auth state
//     const token = getState().auth.token;
//     // console.log(token);

//     // Configure the headers with the token
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     // Send the request with the token
//     const response = await axios.get(`${API_URL}/resume`, config);

//     return response.data;
//   }
// );
