import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  dashboardJobs,
  dashboardUsers,
} from "../../../redux/rdx_/dashboard/dashAPI";

function DashboardInfo() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.dashboard.dash.users);
  const jobs = useSelector((state) => state.dashboard.dash.jobs);
  const usersStatus = useSelector((state) => state.dashboard.dash.users_status);
  const jobsStatus = useSelector((state) => state.dashboard.dash.jobs_status);
  const isLoading = useSelector((state) => state.dashboard.isLoading);

  React.useEffect(() => {
    // Fetch data on component mount
    dispatch(dashboardUsers());
    dispatch(dashboardJobs());
  }, [dispatch]);

  // Handle loading and error states
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-bold">
        Loading...
      </div>
    );
  }

  if (usersStatus === "failed" || jobsStatus === "failed") {
    // Handle errors
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-xl font-bold">
        Error fetching data
      </div>
    );
  }

  // Render user and job data
  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Users</h2>
      <ul className="list-disc pl-4">
        {users.map((user) => (
          <li key={user.id} className="text-gray-700 hover:text-blue-500">
            {user.username}
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Jobs</h2>
      <ul className="list-disc pl-4">
        {jobs.map((job) => (
          <li key={job.id} className="text-gray-700 hover:text-blue-500">
            {job.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardInfo; // import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   dashboardJobs,
//   dashboardUsers,
// } from "../../../redux/rdx_/dashboard/dashAPI";

// function Info() {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.dashboard.dash.users);
//   const jobs = useSelector((state) => state.dashboard.dash.jobs);
//   const usersStatus = useSelector((state) => state.dashboard.dash.users_status);
//   const jobsStatus = useSelector((state) => state.dashboard.dash.jobs_status);
//   const isLoading = useSelector((state) => state.dashboard.isLoading);

//   React.useEffect(() => {
//     // Fetch data on component mount
//     dispatch(dashboardUsers());
//     dispatch(dashboardJobs());
//   }, [dispatch]);

//   // Handle loading and error states
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (usersStatus === "failed" || jobsStatus === "failed") {
//     // Handle errors
//     return <div>Error fetching data</div>;
//   }

//   // Render user and job data
//   return (
//     <div className="flex bg-sky-400">
//       <h2>Users</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.username}</li>
//         ))}
//       </ul>
//       <h2>Jobs</h2>
//       <ul>
//         {jobs.map((job) => (
//           <li key={job.id}>{job.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Info;
