import axios from "axios";

const API_HOST = "http://localhost:8080";

const api = axios.create({
  baseURL: API_HOST,
  withCredentials: true, // Automatically include cookies
});

// Handle token expiration and refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response?.status === 403 &&
      error.response?.data?.message === "Token expired"
    ) {
      try {
        await api.get("/refresh");
        return api.request(error.config); // Retry the original request
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
// import axios from "axios";

// const API_HOST = "http://localhost:8080";

// const axiosInstance = axios.create({
//   baseURL: API_HOST,
//   withCredentials: true, // Automatically include cookies
// });

// // Handle token expiration and refresh
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 403 && error.response?.data?.message === "Token expired") {
//       try {
//         await axiosInstance.get("/refresh");
//         return axiosInstance.request(error.config); // Retry the original request
//       } catch (refreshError) {
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
