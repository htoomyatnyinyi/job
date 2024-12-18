import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { getState }) => {
    // async (_, { getState }) => {
    // Get the token from the auth state
    const token = getState().auth.token;
    // const accessToken = getCookies();
    // console.log(accessToken, "check");
    // console.log(token);

    // Configure the headers with the token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(`${API_URL}/allposting`, config);
    // console.log(response.data);
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
    postID: 1,
  },
  reducers: {
    postDetails: (state, action) => {
      state.posts.push(action.payload);
    },
    setPostID: (state, action) => {
      state.postID = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { postDetails, setPostID } = postsSlice.actions;
export default postsSlice.reducer;
