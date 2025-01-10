import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080";

const axiosInstance = axios.create({
  withCredentials: true, // This line enables cookie-based credentials
});

// for graph
export const dashboardGraph = createAsyncThunk(
  "dashboard/fetchData", // Changed action type for better organization
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_URL}/dashboard`);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue({
          status: error.response.status,
          message: error.response.data.message || "Error fetching users",
        });
      } else if (error.request) {
        return rejectWithValue({
          status: 500,
          message: "No response from server",
        });
      } else {
        return rejectWithValue({
          status: 500,
          message: "An error occurred",
        });
      }
    }
  }
);

export const dashboardUsers = createAsyncThunk(
  "dashboard/fetchUsers", // Changed action type for better organization
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_URL}/users`);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue({
          status: error.response.status,
          message: error.response.data.message || "Error fetching users",
        });
      } else if (error.request) {
        return rejectWithValue({
          status: 500,
          message: "No response from server",
        });
      } else {
        return rejectWithValue({
          status: 500,
          message: "An error occurred",
        });
      }
    }
  }
);

export const dashboardJobs = createAsyncThunk(
  "dashboard/fetchJobs", // Changed action type for better organization
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_URL}/jobs`);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue({
          status: error.response.status,
          message: error.response.data.message || "Error fetching jobs",
        });
      } else if (error.request) {
        return rejectWithValue({
          status: 500,
          message: "No response from server",
        });
      } else {
        return rejectWithValue({
          status: 500,
          message: "An error occurred",
        });
      }
    }
  }
);

// New thunk for deleting a user
export const deleteUser = createAsyncThunk(
  "dashboard/deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`${API_URL}/users/${userId}`);
      return response.data; // Assuming the response contains a success message or data
    } catch (error) {
      if (error.response) {
        return rejectWithValue({
          status: error.response.status,
          message: error.response.data.message || "Error deleting user",
        });
      } else if (error.request) {
        return rejectWithValue({
          status: 500,
          message: "No response from server",
        });
      } else {
        return rejectWithValue({
          status: 500,
          message: "An error occurred",
        });
      }
    }
  }
);

// New thunk for deleting a job
export const deleteJob = createAsyncThunk(
  "dashboard/deleteJob",
  async (jobId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`${API_URL}/jobs/${jobId}`);
      return response.data; // Assuming the response contains a success message or data
    } catch (error) {
      if (error.response) {
        return rejectWithValue({
          status: error.response.status,
          message: error.response.data.message || "Error deleting job",
        });
      } else if (error.request) {
        return rejectWithValue({
          status: 500,
          message: "No response from server",
        });
      } else {
        return rejectWithValue({
          status: 500,
          message: "An error occurred",
        });
      }
    }
  }
);

// New thunk for updating a job
export const updateJob = createAsyncThunk(
  "dashboard/updateJob",
  async (updatedJob, { rejectWithValue }) => {
    try {
      const { id, title } = updatedJob; // Assuming the updatedJob object has id and title properties
      const response = await axiosInstance.put(`${API_URL}/jobs/${id}`, {
        title,
      });
      return response.data; // Assuming the response contains the updated job data
    } catch (error) {
      if (error.response) {
        return rejectWithValue({
          status: error.response.status,
          message: error.response.data.message || "Error updating job",
        });
      } else if (error.request) {
        return rejectWithValue({
          status: 500,
          message: "No response from server",
        });
      } else {
        return rejectWithValue({
          status: 500,
          message: "An error occurred",
        });
      }
    }
  }
);

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL = "http://localhost:8080";

// const axiosInstance = axios.create({
//   withCredentials: true, // This line enables cookie-based credentials
// });

// export const dashboardUsers = createAsyncThunk(
//   "dashboard/dashboardUsers", // Changed action type for better organization
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get(`${API_URL}/users`);
//       return response.data;
//     } catch (error) {
//       if (error.response) {
//         return rejectWithValue({
//           status: error.response.status,
//           message: error.response.data.message || "Error fetching users",
//         });
//       } else if (error.request) {
//         return rejectWithValue({
//           status: 500,
//           message: "No response from server",
//         });
//       } else {
//         return rejectWithValue({
//           status: 500,
//           message: "An error occurred",
//         });
//       }
//     }
//   }
// );

// export const dashboardJobs = createAsyncThunk(
//   "dashboard/dashboardJobs", // Changed action type for better organization
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get(`${API_URL}/jobs`); // Corrected endpoint
//       return response.data;
//     } catch (error) {
//       if (error.response) {
//         return rejectWithValue({
//           status: error.response.status,
//           message: error.response.data.message || "Error fetching jobs", // Corrected error message
//         });
//       } else if (error.request) {
//         return rejectWithValue({
//           status: 500,
//           message: "No response from server",
//         });
//       } else {
//         return rejectWithValue({
//           status: 500,
//           message: "An error occurred",
//         });
//       }
//     }
//   }
// );
