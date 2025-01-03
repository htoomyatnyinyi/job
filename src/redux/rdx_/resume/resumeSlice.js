import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_HOST = "http://localhost:8080";

// Thunk to upload resume
export const uploadResume = createAsyncThunk(
  "resume/uploadResume",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_HOST}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, // Include cookies in the request
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk to fetch the latest resume
export const fetchResume = createAsyncThunk(
  "resume/fetchResume",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_HOST}/resume`, {
        withCredentials: true, // Include cookies in the request
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const previewResume = createAsyncThunk(
  "resume/previewResume",
  async (filename, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_HOST}/pdf/${filename}`, {
        responseType: "blob", // Ensure binary data
        withCredentials: true, // Include cookies
      });
      // check response header
      if (response.headers["content-type"] !== "application/pdf") {
        throw new Error("Invalid content-type: Expected application/pdf");
      }

      const fileURL = URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );

      return fileURL;
    } catch (error) {
      console.error("Error fetching PDF:", error);
      return rejectWithValue(error.response?.data || "Failed to fetch PDF");
    }
  }
);

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    data: null,
    fileURL: null,
    uploadStatus: null,
    fetchStatus: null,
    previewStatus: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadResume.pending, (state) => {
        state.uploadStatus = "loading";
      })
      .addCase(uploadResume.fulfilled, (state, action) => {
        state.uploadStatus = "succeeded";
        state.data = action.payload;
      })
      .addCase(uploadResume.rejected, (state, action) => {
        state.uploadStatus = "failed";
        state.error = action.payload;
      })
      .addCase(fetchResume.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchResume.fulfilled, (state, action) => {
        state.fetchStatus = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchResume.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.error = action.payload;
      })
      .addCase(previewResume.pending, (state) => {
        state.previewStatus = "loading";
      })
      .addCase(previewResume.fulfilled, (state, action) => {
        state.previewStatus = "succeeded";
        state.fileURL = action.payload;
      })
      .addCase(previewResume.rejected, (state, action) => {
        state.previewStatus = "failed";
        state.error = action.payload;
      });
  },
});

export default resumeSlice.reducer;
