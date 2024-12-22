// src/components/JobDetails.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchJob } from "../../redux/rdx_/job/jobSlice";

const JobDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { job, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJob(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!job) return <p>No job found.</p>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>Salary: {job.salary}</p>
      <p>Responsibilities: {job.responsibilities.join(", ")}</p>
      <p>Requirements: {job.requirements.join(", ")}</p>
    </div>
  );
};

export default JobDetails;

// // src/components/JobDetails.js
// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchJob } from "../../redux/rdx_/job/jobSlice"; // Correct import path

// const JobDetails = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { jobs, loading, error } = useSelector((state) => state.jobs);

//   useEffect(() => {
//     dispatch(fetchJob(id));
//   }, [dispatch, id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!jobs || jobs.length === 0) return <p>No job found.</p>; // More robust check

//   // Assuming your API returns an array of jobs, even for a single job detail view.
//   // If it returns a single object, adjust accordingly.

//   return (
//     <div>
//       {jobs.map((job) => (
//         <div key={job.id}>
//           {/* Add a key for React's list rendering */}
//           <h1>{job.title}</h1>
//           <p>{job.description}</p>
//           <p>Salary: {job.salary}</p>
//           {job.responsibilities && job.responsibilities.length > 0 && (
//             <div>
//               <p>Responsibilities:</p>
//               <ul>
//                 {job.responsibilities.map((responsibility, index) => (
//                   <li key={index}>{responsibility}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {job.requirements && job.requirements.length > 0 && (
//             <div>
//               <p>Requirements:</p>
//               <ul>
//                 {job.requirements.map((requirement, index) => (
//                   <li key={index}>{requirement}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JobDetails;
