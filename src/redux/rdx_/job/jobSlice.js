import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base API URL
const API_URL = "http://localhost:8080";
axios.defaults.withCredentials = true;
// Function to get the access token from cookies
const getAccessToken = () => {
  const token = document.cookie
    .split(";")
    .find((c) => c.startsWith("access_token="));
  if (token) {
    return token.split("=")[1];
  }
  return null;
};

// Fetch all jobs
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const token = getAccessToken();
  const response = await axios.get(`${API_URL}/jobs`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  console.log(response, "fetch all job");
  return response.data;
});

// Fetch a single job
export const fetchJob = createAsyncThunk("jobs/fetchJob", async (id) => {
  const token = getAccessToken();
  const response = await axios.get(`${API_URL}/jobs/${id}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  console.log(response.data, "check fetch with id");
  return response.data;
});

// Create a job (assuming the create endpoint requires a token)
export const createJob = createAsyncThunk("jobs/createJob", async (jobData) => {
  console.log(jobData, " check");
  const response = await axios.post(`${API_URL}/jobs`, jobData);
  return response.data;
});

// Update a job (assuming the update endpoint requires a token)
export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async ({ id, jobData }) => {
    const token = getAccessToken();
    const response = await axios.put(`${API_URL}/jobs/${id}`, jobData, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return response.data;
  }
);

// Delete a job (assuming the delete endpoint requires a token)
export const deleteJob = createAsyncThunk("jobs/deleteJob", async (id) => {
  const token = getAccessToken();
  const response = await axios.delete(`${API_URL}/jobs/${id}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return response.data;
});

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    job: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //  BY individual
      .addCase(fetchJob.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.loading = false;
        state.job = action.payload;
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // Add more cases for other thunks...
  },
});

export default jobSlice.reducer; // // src/features/jobs/jobSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Base API URL
// const API_URL = "http://localhost:8080";

// // Fetch all jobs
// export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
//   const response = await axios.get(`${API_URL}/jobs`);
//   console.log(response, "fetch all job");
//   return response.data;
// });

// // Fetch a single job
// export const fetchJob = createAsyncThunk("jobs/fetchJob", async (id) => {
//   const response = await axios.get(`${API_URL}/jobs/${id}`);
//   console.log(response.data, "check fetch with id");
//   return response.data;
// });

// // Create a job
// export const createJob = createAsyncThunk("jobs/createJob", async (jobData) => {
//   const response = await axios.post(`${API_URL}/jobs`, jobData, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("mlab_token")}`,
//     },
//   });
//   return response.data;
// });

// // Update a job
// export const updateJob = createAsyncThunk(
//   "jobs/updateJob",
//   async ({ id, jobData }) => {
//     const response = await axios.put(`${API_URL}/jobs/${id}`, jobData, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("mlab_token")}`,
//       },
//     });
//     return response.data;
//   }
// );

// // Delete a job
// export const deleteJob = createAsyncThunk("jobs/deleteJob", async (id) => {
//   const response = await axios.delete(`${API_URL}/jobs/${id}`, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("mlab_token")}`,
//     },
//   });
//   return response.data;
// });

// const jobSlice = createSlice({
//   name: "jobs",
//   initialState: {
//     jobs: [],
//     job: null,
//     loading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchJobs.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchJobs.fulfilled, (state, action) => {
//         state.loading = false;
//         state.jobs = action.payload;
//       })
//       .addCase(fetchJobs.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       //   BY individual
//       .addCase(fetchJob.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchJob.fulfilled, (state, action) => {
//         state.loading = false;
//         state.job = action.payload;
//       })
//       .addCase(fetchJob.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//     // Add more cases for other thunks...
//   },
// });

// export default jobSlice.reducer;
