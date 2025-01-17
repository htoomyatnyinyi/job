import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import NavBar from "./NavBar";
// import Profile from "../profiles/Profile";
import Overview from "../dash/local/Overview.jsx";
import Timeline from "../pages/Timeline";
import JobList from "../job/JobList.jsx";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
// import UserLists from "../dash/local/UserLists.jsx";
import JobDetails from "../job/JobDetails.jsx";
import JobForm from "../job/JobForm.jsx";
import Info from "../dash/local/Info.jsx";
import Resume from "../resume/Resume.jsx";
import Account from "../profiles/Account.jsx";

const AppRoutes = () => {
  return (
    <>
      {/* <div className="h-screen bg-white dark:bg-gray-900 text-black dark:text-white"> */}
      {/* <ThemeToggle /> */}
      <Router>
        <NavBar />
        <Routes>
          {/* HOME ROUTES */}
          <Route path="/" element={<Home />} />

          {/* <Route path="/*" element={<NotFound />} /> */}
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetails />} />

          <Route path="/create-job" element={<JobForm />} />

          {/* AUTHENTICATIONS ROUTES */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* USER PROFILE ROUTES */}
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/profile/me" element={<Account />} />

          {/* DASHBOARD ROUTES */}
          {/* <Route path="/dash" element={<Dash />} /> */}
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/dashboard/profile" element={<Info />} />
          <Route path="/dashboard/applied" element={<NotFound />} />
          <Route path="/dashboard/jobs" element={<NotFound />} />
          <Route path="/dashboard/update" element={<NotFound />} />
          {/* <Route path="/dashboard/users" element={<UserLists />} /> */}
          <Route path="/dashboard/jobs" element={<JobList />} />
          <Route path="/dashboard/resume" element={<Resume />} />

          {/* <Route path="/jobs" element={<JobList />} /> */}
          {/* <Route path="/job" element={<JobDetails />} /> */}
        </Routes>
      </Router>
      {/* </div> */}
    </>
  );
};

export default AppRoutes;
