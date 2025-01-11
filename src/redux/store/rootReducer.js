import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../rdx_/auth/authSlice";
import jobReducer from "../rdx_/job/jobSlice";
import userReducer from "../rdx_/user/userSlice";
import resumeReducer from "../rdx_/resume/resumeSlice";
import featureReducer from "../rdx_/job/featureSlice";
import searchReducer from "../rdx_/search/searchSlice";
import dashboardInfoReducer from "../rdx_/dashboard/dashSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  user: userReducer,
  jobs: jobReducer,
  resume: resumeReducer,
  features: featureReducer,
  dashboard: dashboardInfoReducer,
});

export default rootReducer;
