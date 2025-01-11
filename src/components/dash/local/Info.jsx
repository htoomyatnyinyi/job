import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  dashboardJobs,
  dashboardUsers,
  deleteJob,
  updateJob,
  deleteUser,
} from "../../../redux/rdx_/dashboard/dashAPI";
import LineGraph from "../global/LineGraph";

function Info() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.dashboard.dash.users);
  const jobs = useSelector((state) => state.dashboard.dash.jobs);

  const [jobEditState, setJobEditState] = useState({ id: null, title: "" });
  const [userEditState, setUserEditState] = useState({
    id: null,
    username: "",
  });

  useEffect(() => {
    dispatch(dashboardUsers());
    dispatch(dashboardJobs());
  }, [dispatch]);

  const handleEdit = (type, id, value) => {
    if (type === "job") {
      setJobEditState({ id, title: value });
    } else if (type === "user") {
      setUserEditState({ id, username: value });
    }
  };

  const handleSaveEdit = (type) => {
    if (type === "job" && jobEditState.title) {
      dispatch(updateJob({ id: jobEditState.id, title: jobEditState.title }));
      setJobEditState({ id: null, title: "" });
    } else if (type === "user" && userEditState.username) {
      // Implement user update logic here if needed
      setUserEditState({ id: null, username: "" });
    }
  };

  const handleCancelEdit = (type) => {
    if (type === "job") setJobEditState({ id: null, title: "" });
    if (type === "user") setUserEditState({ id: null, username: "" });
  };

  const handleDelete = (type, id) => {
    if (type === "job") {
      if (window.confirm("Are you sure you want to delete this job?")) {
        dispatch(deleteJob(id));
      }
    } else if (type === "user") {
      if (window.confirm("Are you sure you want to delete this user?")) {
        dispatch(deleteUser(id));
      }
    }
  };

  const UserList = useMemo(() => {
    return users.map((user) => (
      <li key={user.id} className="hover:text-blue-500">
        {userEditState.id === user.id ? (
          <div>
            <input
              type="text"
              value={userEditState.username}
              onChange={(e) =>
                setUserEditState({ ...userEditState, username: e.target.value })
              }
              className="border border-gray-300 rounded px-2 py-1"
            />
            <button
              onClick={() => handleSaveEdit("user")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2"
            >
              Save
            </button>
            <button
              onClick={() => handleCancelEdit("user")}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-1 px-2 rounded ml-2"
            >
              Cancel
            </button>
          </div>
        ) : (
          <>
            {user.username}
            <h4>{user.created_at}</h4>
            <button
              onClick={() => handleEdit("user", user.id, user.username)}
              className="ml-2 text-xs text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete("user", user.id)}
              className="ml-2 text-xs text-red-500 hover:underline"
            >
              Delete
            </button>
          </>
        )}
      </li>
    ));
  }, [users, userEditState]);

  const JobList = useMemo(() => {
    return jobs.map((job) => (
      <li key={job.id} className="hover:text-blue-500">
        {jobEditState.id === job.id ? (
          <div>
            <input
              type="text"
              value={jobEditState.title}
              onChange={(e) =>
                setJobEditState({ ...jobEditState, title: e.target.value })
              }
              className="border border-gray-300 rounded px-2 py-1"
            />
            <button
              onClick={() => handleSaveEdit("job")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2"
            >
              Save
            </button>
            <button
              onClick={() => handleCancelEdit("job")}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-1 px-2 rounded ml-2"
            >
              Cancel
            </button>
          </div>
        ) : (
          <>
            {job.title}
            <button
              onClick={() => handleEdit("job", job.id, job.title)}
              className="ml-2 text-xs text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete("job", job.id)}
              className="ml-2 text-xs text-red-500 hover:underline"
            >
              Delete
            </button>
          </>
        )}
      </li>
    ));
  }, [jobs, jobEditState]);

  return (
    <div className="flex flex-col backdrop-blur-lg dark:text-white p-4 rounded-lg shadow-md">
      <LineGraph />
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <ul className="list-disc pl-4">{UserList}</ul>
      <h2 className="text-2xl font-bold mt-8 mb-4">Jobs</h2>
      <ul className="list-disc pl-4">{JobList}</ul>
    </div>
  );
}

export default Info;
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   dashboardJobs,
//   dashboardUsers,
//   deleteJob,
//   updateJob,
//   deleteUser,
// } from "../../../redux/rdx_/dashboard/dashAPI";
// import LineGraph from "../global/LineGraph";
// // import { deleteJob, updateJob } from "../../../redux/rdx_/job/jobSlice";

// function Info() {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.dashboard.dash.users);
//   const jobs = useSelector((state) => state.dashboard.dash.jobs);
//   const chartData = useSelector((state) => state.dashboard.dash);
//   //   const usersStatus = useSelector((state) => state.dashboard.dash.users_status);
//   //   const jobsStatus = useSelector((state) => state.dashboard.dash.jobs_status);
//   //   const isLoading = useSelector((state) => state.dashboard.isLoading);

//   const [editJobId, setEditJobId] = useState(null);
//   const [editedJobTitle, setEditedJobTitle] = useState("");

//   const [editUserId, setEditUserId] = useState(null);
//   const [editedUsername, setEditedUsername] = useState("");

//   useEffect(() => {
//     dispatch(dashboardUsers());
//     dispatch(dashboardJobs());
//   }, [dispatch, editJobId, editUserId]);

//   const handleDeleteJob = (jobId) => {
//     if (window.confirm("Are you sure you want to delete this job?")) {
//       dispatch(deleteJob(jobId));
//     }
//   };

//   const handleDeleteUser = (userId) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       dispatch(deleteUser(userId));
//     }
//   };

//   const handleEditJob = (jobId) => {
//     setEditJobId(jobId);
//     const jobToEdit = jobs.find((job) => job.id === jobId);
//     setEditedJobTitle(jobToEdit.title);
//   };

//   const handleSaveEdit = () => {
//     if (editedJobTitle) {
//       dispatch(updateJob({ id: editJobId, title: editedJobTitle }));
//       setEditJobId(null);
//       setEditedJobTitle("");
//     }
//   };

//   const handleCancelEdit = () => {
//     setEditJobId(null);
//     setEditedJobTitle("");
//   };

//   // ... (Loading and Error Handling as before) ...

//   return (
//     <div className="flex flex-col backdrop-blur-lg dark:text-white  p-4 rounded-lg shadow-md">
//       {/* <LineGraph chartData={jobs} /> */}
//       <LineGraph />
//       <h2 className="text-2xl font-bold mb-4">Users</h2>
//       <ul className="list-disc pl-4">
//         {/* {users.map((user) => (
//           <li key={user.id} className="text-gray-700 hover:text-blue-500">
//             {user.username}
//           </li>
//         ))} */}
//         {users.map((user) => (
//           <li key={user.id} className=" hover:text-blue-500">
//             {editUserId === user.id ? (
//               <div>
//                 <input
//                   type="text"
//                   //   value={editeduserTitle}
//                   //   onChange={(e) => setEditeduserTitle(e.target.value)}
//                   className="border border-gray-300 rounded px-2 py-1"
//                 />
//                 <button
//                   //   onClick={handleSaveEdit}
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2"
//                 >
//                   Save
//                 </button>
//                 <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-1 px-2 rounded ml-2">
//                   Cancel
//                 </button>
//               </div>
//             ) : (
//               <>
//                 {user.username}
//                 <h4>{user.created_at}</h4>
//                 <button
//                   //   onClick={() => handleEdituser(user.id)}
//                   className="ml-2 text-xs text-blue-500 hover:underline"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDeleteUser(user.id)}
//                   className="ml-2 text-xs text-red-500 hover:underline"
//                 >
//                   Delete
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//       <h2 className="text-2xl font-bold  mt-8 mb-4">Jobs</h2>
//       <ul className="list-disc pl-4">
//         {jobs.map((job) => (
//           <li key={job.id} className=" hover:text-blue-500">
//             {editJobId === job.id ? (
//               <div>
//                 <input
//                   type="text"
//                   value={editedJobTitle}
//                   onChange={(e) => setEditedJobTitle(e.target.value)}
//                   className="border border-gray-300 rounded px-2 py-1"
//                 />
//                 <button
//                   onClick={handleSaveEdit}
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2"
//                 >
//                   Save
//                 </button>
//                 <button
//                   onClick={handleCancelEdit}
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-1 px-2 rounded ml-2"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             ) : (
//               <>
//                 {job.title}
//                 <button
//                   onClick={() => handleEditJob(job.id)}
//                   className="ml-2 text-xs text-blue-500 hover:underline"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDeleteJob(job.id)}
//                   className="ml-2 text-xs text-red-500 hover:underline"
//                 >
//                   Delete
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Info;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   dashboardJobs,
//   dashboardUsers,
// } from "../../../redux/rdx_/dashboard/dashAPI";

// function DashboardInfo() {
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
//     return (
//       <div className="flex justify-center items-center h-screen text-xl font-bold">
//         Loading...
//       </div>
//     );
//   }

//   if (usersStatus === "failed" || jobsStatus === "failed") {
//     // Handle errors
//     return (
//       <div className="flex justify-center items-center h-screen text-red-500 text-xl font-bold">
//         Error fetching data
//       </div>
//     );
//   }

//   // Render user and job data
//   return (
//     <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Users</h2>
//       <ul className="list-disc pl-4">
//         {users.map((user) => (
//           <li key={user.id} className="text-gray-700 hover:text-blue-500">
//             {user.username}
//           </li>
//         ))}
//       </ul>
//       <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Jobs</h2>
//       <ul className="list-disc pl-4">
//         {jobs.map((job) => (
//           <li key={job.id} className="text-gray-700 hover:text-blue-500">
//             {job.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DashboardInfo;
//
// // import React from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import {
// //   dashboardJobs,
// //   dashboardUsers,
// // } from "../../../redux/rdx_/dashboard/dashAPI";

// // function Info() {
// //   const dispatch = useDispatch();
// //   const users = useSelector((state) => state.dashboard.dash.users);
// //   const jobs = useSelector((state) => state.dashboard.dash.jobs);
// //   const usersStatus = useSelector((state) => state.dashboard.dash.users_status);
// //   const jobsStatus = useSelector((state) => state.dashboard.dash.jobs_status);
// //   const isLoading = useSelector((state) => state.dashboard.isLoading);

// //   React.useEffect(() => {
// //     // Fetch data on component mount
// //     dispatch(dashboardUsers());
// //     dispatch(dashboardJobs());
// //   }, [dispatch]);

// //   // Handle loading and error states
// //   if (isLoading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (usersStatus === "failed" || jobsStatus === "failed") {
// //     // Handle errors
// //     return <div>Error fetching data</div>;
// //   }

// //   // Render user and job data
// //   return (
// //     <div className="flex bg-sky-400">
// //       <h2>Users</h2>
// //       <ul>
// //         {users.map((user) => (
// //           <li key={user.id}>{user.username}</li>
// //         ))}
// //       </ul>
// //       <h2>Jobs</h2>
// //       <ul>
// //         {jobs.map((job) => (
// //           <li key={job.id}>{job.title}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default Info;
