import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../rdx_/test/counterSlice";
import authSlice from "../rdx_/auth/authSlice";
import searchSlice from "../rdx_/search/searchSlice";
import navSlice from "../rdx_/utils/navSlice";
import resumeSlice from "../rdx_/resume/resumeSlice";
import postSlice from "../rdx_/job/postsSlice";
import userSlice from "../rdx_/user/userSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    nav: navSlice,
    search: searchSlice,

    posts: postSlice,
    user: userSlice,
    resume: resumeSlice,

    counter: counterSlice,
  },
});

export default store;
