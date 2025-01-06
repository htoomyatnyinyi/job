import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_HOST = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: API_HOST,
  withCredentials: true, // Include cookies in requests
});

export const signin = createAsyncThunk(
  "auth/signin",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${API_HOST}/signin`, credentials, {
        withCredentials: true, // Include cookies
      });
      // authToken response no use for security
      const { message, authToken, user } = response.data;

      // Save token and user info to localStorage
      // sessionStorage.setItem("userInfo", JSON.stringify(user)); // need to
      localStorage.setItem("userInfo", JSON.stringify(user));

      return { message, authToken, user }; // Pass the data to Redux store
    } catch (error) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue({ message: "Network error" });
      }
    }
  }
);

// export const signin = createAsyncThunk(
//   "auth/signin",
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axiosInstance.post(`/signin`, credentials);
//       console.log(response, "at api thunk");
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.data) {
//         return thunkAPI.rejectWithValue(error.response.data);
//       } else {
//         return thunkAPI.rejectWithValue({ message: "Network error" });
//       }
//     }
//   }
// );

export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/signup`, credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Original Code

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_HOST = "http://localhost:8080";

// export const signup = createAsyncThunk(
//   "auth/signup",
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post(`${API_HOST}/signup`, credentials);
//       // console.log(response.data, "at api thunk"); // later to display 'sign_in successfully use response return and check in action reduxtoolkit.
//       if (response) return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const signin = createAsyncThunk(
//   "auth/signin",
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post(`${API_HOST}/signin`, credentials);
//       console.log(response, "at api thunk"); // later to display 'sign_in successfully use response return and check in action reduxtoolkit.
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.data) {
//         return thunkAPI.rejectWithValue(error.response.data);
//       } else {
//         return thunkAPI.rejectWithValue({ message: "Network error" });
//       }
//     }
//   }
// );
