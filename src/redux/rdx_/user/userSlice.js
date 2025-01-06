import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const API_URL = "http://localhost:8080";

// // Fetch users with token
// export const fetchUsers = createAsyncThunk(
//   "users/fetchUsers",
//   async (_, { getState }) => {
//     // Get the token from the auth state
//     // const token = getState().auth.token;
//     // console.log(token);

//     // Configure the headers with the token
//     // const config = {
//     //   headers: {
//     //     Authorization: `Bearer ${token}`,
//     //   },
//     // };

//     // // Send the request with the token
//     // const response = await axios.get(`${API_URL}/users`, config);
//     const response = await axios.get(`${API_URL}/users`);

//     return response.data;
//   }
// );
export const fetchUsers = createAsyncThunk(
  "auth/fetchUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      return rejectWithValue({
        status: response.status,
        message: "Unauthorized",
      });
    }
    return response.json();
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;

// // src/features/users/usersSlice.js users to user..
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL = "http://localhost:8080";

// export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//   const response = await axios.get(`${API_URL}/users`);

//   return response.data;
// });

// const usersSlice = createSlice({
//   name: "users",
//   initialState: {
//     users: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.users = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default usersSlice.reducer;
