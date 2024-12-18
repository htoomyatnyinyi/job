// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AppliedJobs = ({ userId }) => {
//   const [appliedJobs, setAppliedJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAppliedJobs = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8080/api/applied_jobs/${userId}`
//         );
//         setAppliedJobs(response.data);
//       } catch (err) {
//         console.error("Error fetching applied jobs:", err);
//         setError("Failed to load applied jobs.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAppliedJobs();
//   }, [userId]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h2>Your Applied Jobs</h2>
//       {appliedJobs.length === 0 ? (
//         <p>You haven't applied for any jobs yet.</p>
//       ) : (
//         <ul>
//           {appliedJobs.map((job) => (
//             <li key={job.id}>
//               <h3>{job.title}</h3>
//               <p>{job.company}</p>
//               <p>{job.location}</p>
//               <p>{job.category}</p>
//               <p>{job.employmentType}</p>
//               <p>{job.salary} MMK</p>
//               <p>{job.description}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AppliedJobs;
