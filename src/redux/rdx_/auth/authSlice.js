import { createSlice } from "@reduxjs/toolkit";
import { signin, signup } from "./authAPI";

const initialState = {
  // token: localStorage.getItem("mlab") || null,
  authorized: localStorage.getItem("userInfo") ? true : false,
  profile: null || JSON.parse(localStorage.getItem("userInfo")),
  mesg: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: (state) => {
      localStorage.removeItem("userInfo");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        state.authorized = true;
        state.mesg = action.payload.message;
        state.profile = action.payload.user;
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.authorized = true;
        state.mesg = action.payload.message;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { signout, settoken } = authSlice.actions;
export default authSlice.reducer;
