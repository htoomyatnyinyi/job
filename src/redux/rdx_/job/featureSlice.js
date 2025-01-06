import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_HOST = "http://localhost:8080";

// Thunks
export const applyJob = createAsyncThunk(
  "features/applyJob",
  async ({ user_id, post_id, resume_id }, thunkAPI) => {
    console.log(user_id, post_id, resume_id, " at thunk");
    try {
      const response = await axios.post(`${API_HOST}/apply-job`, {
        user_id,
        post_id,
        resume_id,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const saveJob = createAsyncThunk(
  "features/saveJob",
  async ({ user_id, post_id }, thunkAPI) => {
    try {
      const response = await axios.post(`${API_HOST}/save-job`, {
        user_id,
        post_id,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchAppliedJobs = createAsyncThunk(
  "features/fetchAppliedJobs",
  async (user_id, thunkAPI) => {
    try {
      const response = await axios.get(`${API_HOST}/applied-jobs/${user_id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchSavedJobs = createAsyncThunk(
  "features/fetchSavedJobs",
  async (user_id, thunkAPI) => {
    try {
      const response = await axios.get(`${API_HOST}/saved-jobs/${user_id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const featureSlice = createSlice({
  name: "features",
  initialState: {
    appliedJobs: [],
    savedJobs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Apply Job
      .addCase(applyJob.pending, (state) => {
        state.loading = true;
      })
      .addCase(applyJob.fulfilled, (state, action) => {
        state.loading = false;
        state.appliedJobs.push(action.payload);
      })
      .addCase(applyJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Save Job
      .addCase(saveJob.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveJob.fulfilled, (state, action) => {
        state.loading = false;
        state.savedJobs.push(action.payload);
      })
      .addCase(saveJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Applied Jobs
      .addCase(fetchAppliedJobs.fulfilled, (state, action) => {
        state.appliedJobs = action.payload;
      })
      // Fetch Saved Jobs
      .addCase(fetchSavedJobs.fulfilled, (state, action) => {
        state.savedJobs = action.payload;
      });
  },
});

export default featureSlice.reducer;
