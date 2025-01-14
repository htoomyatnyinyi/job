import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
// export const fetchUsers = createAsyncThunk(
//   "auth/fetchUsers",
//   async (_, { rejectWithValue }) => {
//     const response = await fetch(`${API_URL}/users`);
//     if (!response.ok) {
//       return rejectWithValue({
//         status: response.status,
//         message: "Unauthorized",
//       });
//     }
//     return response.json();
//   }
// );

const axiosInstance = axios.create({
  withCredentials: true, // This line enables cookie-based credentials
});

export const fetchUsers = createAsyncThunk(
  "auth/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_URL}/users`);
      return response.data;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return rejectWithValue({
          status: error.response.status,
          message: error.response.data.message || "Error fetching users",
        });
      } else if (error.request) {
        // The request was made but no response was received
        return rejectWithValue({
          status: 500,
          message: "No response from server",
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        return rejectWithValue({
          status: 500,
          message: "An error occurred",
        });
      }
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`${API_URL}/profile`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
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
      })
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload, " at slice user");
        state.users = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
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
