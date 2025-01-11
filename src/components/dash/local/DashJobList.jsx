import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dashboardJobs,
  dashboardUsers,
} from "../../../redux/rdx_/dashboard/dashAPI";

const DashJobList = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.dashboard);
  const status = useSelector((state) => state.dashboard.status);
  const error = useSelector((state) => state.dashboard.error);
  console.log(dashboard, "check data ");

  useEffect(() => {
    if (status === "idle") {
      dispatch(dashboardJobs());
      dispatch(dashboardUsers());
    }
  }, [status, dispatch]);
  let content;

  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    content = (
      <ul className="backdrop-blur-sm p-4 rounded-lg shadow-md">
        {users.map((user) => (
          <li key={user.id} className="text-sky-500">
            {user.username} || {user.userType}
          </li>
        ))}
      </ul>
    );
  } else if (status === "failed") {
    content = <div className="text-white">{error}</div>;
  }

  return (
    <div>
      <div className="container">
        <h1
          className="backdrop-blur-sm hover:backdrop-blur-md
  p-2 m-1 text-3xl font-bold text-white "
        >
          User Lists
        </h1>
        {content}
      </div>
    </div>
  );
};

export default DashJobList;
