import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs, fetchJob, setjobId } from "../../redux/rdx_/job/jobSlice";
import { applyJob, saveJob } from "../../redux/rdx_/job/featureSlice";

import Search from "../search/Search";
import JobDetails from "./JobDetails";

// import BCover from "../../assets/bg2.jpg";

const JobList = () => {
  const dispatch = useDispatch();
  const {
    jobs = [],
    loading,
    error,
    job,
    jobId,
  } = useSelector((state) => state.jobs);
  const resumeId = 1;

  // Fetch job list on component mount
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // Memoize mapped jobs to avoid unnecessary re-computation
  const mappedJobs = useMemo(
    () =>
      jobs.map((post) => ({
        ...post,
        responsibilities: Array.isArray(post.responsibilities)
          ? post.responsibilities
          : post.responsibilities?.split("; ") || [],
        requirements: Array.isArray(post.requirements)
          ? post.requirements
          : post.requirements?.split("; ") || [],
      })),
    [jobs]
  );

  const fetchJobDetails = (id) => {
    dispatch(setjobId(id)); // Even SetJobId is comment details section also no effective
    dispatch(fetchJob(id));
  };

  const handleApplyJob = () => {
    dispatch(applyJob({ post_id: jobId, resume_id: resumeId }));
  };

  const handleSaveJob = () => {
    dispatch(saveJob({ post_id: jobId }));
  };

  // const sectionStyle = {
  //   backgroundImage: `url(${BCover})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };

  if (loading) {
    return <div className="p-10 m-10 bg-green-500">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className="bg-cover bg-no-repeat bg-sky-950 text-lime-500 h-screen"
      // style={sectionStyle}
    >
      <div className="">
        <Search />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2 h-full">
        <JobListSection jobs={mappedJobs} onFetchDetails={fetchJobDetails} />
        <JobDetails job={job} />
        {/* <JobDetailsSection
          job={job}
          jobId={jobId}
          handleApplyJob={handleApplyJob}
          handleSaveJob={handleSaveJob}
        /> */}
      </div>
    </div>
  );
};

// Job List Section
const JobListSection = ({ jobs, onFetchDetails }) => (
  <div className="col-span-1 overflow-y-auto h-full scrollbar-hide">
    {jobs.map((post) => (
      <ul
        onClick={() => onFetchDetails(post.id)}
        key={post.id}
        className="hover:bg-green-700 p-5 m-1 rounded-md backdrop-blur-md shadow-xl cursor-pointer"
      >
        <h2 className="text-xl text-sky-400 font-semibold">{post.title}</h2>
        <div className="flex justify-around text-white">
          <p>{post.company}</p>
          <p className="font-thin">{post.location}</p>
        </div>
        <div className="flex justify-around text-white">
          <p>{post.employmentType}</p>
          <p>{post.salary} MMK</p>
        </div>
        <p className="text-white">{post.description}</p>
      </ul>
    ))}
  </div>
);

// Job Details Section
const JobDetailsSection = ({ job, jobId, handleApplyJob, handleSaveJob }) => {
  if (!job || job.id !== jobId) return null;

  return (
    <div className="col-span-2 overflow-y-scroll scrollbar-hide h-full">
      <div className="backdrop:blur-md shadow-lg sticky top-14">
        <div className="backdrop-blur-lg shadow-2xl rounded-lg p-4">
          <div className="p-4 shadow-2xl backdrop-blur-3xl">
            <h1 className="text-sky-400 text-3xl">{job.title}</h1>
            <p className="text-teal-300">{job.posted}</p>
            <p className="text-gray-400">{job.company}</p>
            <p>{job.location}</p>
            <p>{job.category}</p>
            <p>{job.employmentType}</p>
            <div className="space-x-2 pt-3">
              <button
                onClick={handleApplyJob}
                className="bg-black hover:bg-sky-800 text-white rounded-md p-2 mt-1"
              >
                Apply Now
              </button>
              <button
                onClick={handleSaveJob}
                className="bg-black hover:bg-yellow-800 text-white rounded-md p-2 mt-1"
              >
                Save Job
              </button>
            </div>
          </div>
          <JobDetailsContent job={job} />
        </div>
      </div>
    </div>
  );
};

// Job Responsibilities and Requirements Section
const JobDetailsContent = ({ job }) => (
  <div className="p-4 m-4 overflow-y-auto">
    <h4 className="text-lg text-white font-bold">Duties & Responsibilities</h4>
    <ul className="text-gray-100">
      {job.responsibilities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <h4 className="text-lg text-white font-bold mt-4">Requirements</h4>
    <ul className="text-gray-100">
      {job.requirements.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <p className="text-white text-lg font-bold mt-4">
      Address & Contact Number
    </p>
    <p className="text-white underline">{job.address}</p>
  </div>
);

export default JobList;
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

// import { fetchJobs, fetchJob, setjobId } from "../../redux/rdx_/job/jobSlice";
// import { applyJob, saveJob } from "../../redux/rdx_/job/featureSlice";

// import BCover from "../../assets/bg2.jpg";

// const JobList = () => {
//   const dispatch = useDispatch();
//   const {
//     jobs = [],
//     loading,
//     error,
//     job,
//     jobId,
//   } = useSelector((state) => state.jobs);
//   // const { userId } = useSelector((state) => state.auth.profile.id);
//   const resumeId = 1;

//   // FETCH JOBLIST BY USING EFFECT
//   useEffect(() => {
//     dispatch(fetchJobs());
//   }, [dispatch]);

//   if (loading) return;
//   <div>
//     <p className="p-10 m-10 bg-green-500">Loading...</p>;
//     {/* <image src={BCover} alt="loading image" /> */}
//   </div>;
//   if (error) return <p>Error: {error}</p>;

//   const fetchJobDetails = (id) => {
//     dispatch(setjobId(id)); // Set the selected job ID
//     dispatch(fetchJob(id)); // Fetch job details for the selected job
//   };

//   const handleApplyJob = () => {
//     dispatch(applyJob({ post_id: jobId, resume_id: resumeId }));
//   };

//   const handleSavedJob = () => {
//     dispatch(saveJob({ post_id: jobId }));
//   };

//   const sectionStyle = {
//     backgroundImage: `url(${BCover})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//   };

//   return (
//     <div
//       className="bg-cover bg-no-repeat text-lime-500 h-screen"
//       style={sectionStyle}
//     >
//       <Link to="/create-job" className="text-white underline m-2 block">
//         Create New Job
//       </Link>
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2 h-full">
//         {/* Job List (Left Section) */}
//         <div className="col-span-1 overflow-y-auto h-full scrollbar-hide">
//           {jobs.map((post) => (
//             <ul
//               onClick={() => fetchJobDetails(post.id)}
//               key={post.id}
//               className="hover:bg-green-700 p-5 m-1 rounded-md backdrop-blur-md shadow-xl cursor-pointer"
//             >
//               <h2 className="text-xl text-sky-400 font-semibold">
//                 {post.title}
//               </h2>
//               <div>
//                 <div className="flex justify-around">
//                   <p className="text-white">{post.company}</p>
//                   <p className="text-white font-thin">{post.location}</p>
//                 </div>
//                 <div className="flex justify-around">
//                   <p className="text-white">{post.employmentType}</p>
//                   <p className="text-white">{post.salary} MMK</p>
//                 </div>
//               </div>
//               <p className="text-white">{post.description}</p>
//             </ul>
//           ))}
//         </div>

//         {/* Job Details (Right Section) */}
//         <div className="col-span-2 overflow-y-scroll scrollbar-hide h-full">
//           {job &&
//             jobId === job.id && ( // Ensure selected job details are displayed
//               <div className="backdrop:blur-md shadow-lg sticky top-14">
//                 <div className="backdrop-blur-lg shadow-2xl rounded-lg p-4">
//                   <div className="p-4 shadow-2xl backdrop-blur-3xl">
//                     <h1 className="text-sky-400 text-3xl">{job.title}</h1>
//                     <p className="text-teal-300">{job.posted}</p>
//                     <p className="text-gray-400">{job.company}</p>
//                     <p>{job.location}</p>
//                     <p>{job.category}</p>
//                     <p>{job.employmentType}</p>
//                     <div className="space-x-2 pt-3">
//                       <button
//                         onClick={handleApplyJob}
//                         className="bg-black hover:bg-sky-800 text-white rounded-md p-2 mt-1"
//                       >
//                         Apply Now
//                       </button>

//                       <button
//                         onClick={handleSavedJob}
//                         className="bg-black hover:bg-yellow-800 text-white rounded-md p-2 mt-1"
//                       >
//                         Save Job
//                       </button>
//                     </div>
//                   </div>
//                   <div className="p-4 m-4 overflow-y-auto">
//                     <h4 className="text-lg text-white font-bold">
//                       Duties & Responsibilities
//                     </h4>
//                     <ul className="text-gray-100">
//                       {(Array.isArray(job.responsibilities)
//                         ? job.responsibilities
//                         : job.responsibilities?.split("; ") || []
//                       ).map((item, index) => (
//                         <li key={index}>{item}</li>
//                       ))}
//                     </ul>
//                     <br />
//                     <h4 className="text-lg text-white font-bold">
//                       Requirements
//                     </h4>
//                     <ul className="text-gray-100">
//                       {(Array.isArray(job.requirements)
//                         ? job.requirements
//                         : job.requirements?.split("; ") || []
//                       ).map((item, index) => (
//                         <li key={index}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                   <p className="text-white text-lg font-bold">
//                     Address & Contact Number
//                   </p>
//                   <p className="text-white underline">{job.address}</p>
//                 </div>
//               </div>
//             )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobList;
// // import React, { useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { Link } from "react-router-dom";

// // import { fetchJobs, fetchJob } from "../../redux/rdx_/job/jobSlice";
// // import { setjobId } from "../../redux/rdx_/job/jobSlice";

// // import BCover from "../../assets/bg2.jpg";

// // const JobList = () => {
// //   const dispatch = useDispatch();

// //   const {
// //     jobs = [],
// //     loading,
// //     error,
// //     jobId,
// //   } = useSelector((state) => state.jobs);

// //   useEffect(() => {
// //     dispatch(fetchJobs());
// //   }, [dispatch]);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>Error: {error}</p>;

// //   const fetchJobDetails = (id) => {
// //     dispatch(setjobId(id));
// //     dispatch(fetchJob(jobId));
// //   };

// //   const sectionStyle = {
// //     backgroundImage: `url(${BCover})`,
// //     backgroundSize: "cover",
// //     backgroundRepeat: "no-repeat",
// //   };

// //   return (
// //     <div
// //       className="bg-cover bg-no-repeat text-lime-500 h-screen"
// //       style={sectionStyle}
// //     >
// //       <Link to="/create-job" className="text-white underline m-2 block">
// //         Create New Job
// //       </Link>
// //       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2 h-full">
// //         {/* Job List (Left Section) */}
// //         <div className="col-span-1 overflow-y-auto h-full scrollbar-hide">
// //           {jobs.map((post) => (
// //             <ul
// //               onClick={() => fetchJobDetails(post.id)}
// //               key={post.id}
// //               className="hover:bg-green-700 p-5 m-1 rounded-md backdrop-blur-md shadow-xl"
// //             >
// //               <h2 className="text-xl text-sky-400 font-semibold">
// //                 {post.title}
// //               </h2>
// //               <div>
// //                 <div className="flex justify-around">
// //                   <p className="text-white">{post.company}</p>
// //                   <p className="text-white font-thin">{post.location}</p>
// //                 </div>
// //                 <div className="flex justify-around">
// //                   <p className="text-white">{post.employmentType}</p>
// //                   <p className="text-white">{post.salary} MMK</p>
// //                 </div>
// //               </div>
// //               <p className="text-white">{post.description}</p>
// //             </ul>
// //           ))}
// //         </div>

// //         {/* Job Details (Right Section) */}
// //         <div className="col-span-2 overflow-y-scroll scrollbar-hide h-full">
// //           {jobId && (
// //             <div className="backdrop:blur-md shadow-lg sticky top-14">
// //               {jobs.map(
// //                 (post) =>
// //                   post.id === jobId && (
// //                     <div
// //                       key={post.id}
// //                       className="backdrop-blur-lg shadow-2xl rounded-lg p-4 sticky top-10"
// //                     >
// //                       <div className="p-4 shadow-2xl backdrop-blur-3xl">
// //                         <h1 className="text-sky-400 text-3xl">{post.title}</h1>
// //                         <p className="text-teal-300">{post.posted}</p>
// //                         <p className="text-gray-400">{post.company}</p>
// //                         <p>{post.location}</p>
// //                         <p>{post.category}</p>
// //                         <p>{post.employmentType}</p>
// //                         <div className="space-x-2 pt-3">
// //                           <button
// //                             onClick={() => alert("Applied")}
// //                             className="bg-black hover:bg-sky-800 text-white rounded-md p-2 mt-1"
// //                           >
// //                             Apply Now
// //                           </button>
// //                           <button
// //                             onClick={() => alert("Add to Bookmark")}
// //                             className="bg-black hover:bg-yellow-800 text-white rounded-md p-2 mt-1"
// //                           >
// //                             Save Post
// //                           </button>
// //                         </div>
// //                       </div>
// //                       <div className="p-4 m-4 overflow-y-auto">
// //                         <h4 className="text-lg text-white font-bold">
// //                           Duties & Responsibilities
// //                         </h4>
// //                         <ul className="text-gray-100">
// //                           {(post.responsibilities?.split("; ") || []).map(
// //                             (item, index) => (
// //                               <li key={index}>{item}</li>
// //                             )
// //                           )}
// //                         </ul>
// //                         <br />
// //                         <h4 className="text-lg text-white font-bold">
// //                           Requirements
// //                         </h4>
// //                         <ul className="text-gray-100">
// //                           {(post.requirements?.split("; ") || []).map(
// //                             (item, index) => (
// //                               <li key={index}>{item}</li>
// //                             )
// //                           )}
// //                         </ul>
// //                       </div>
// //                       <p className="text-white text-lg font-bold">
// //                         Address & Contact Number
// //                       </p>
// //                       <p className="text-white underline">{post.address}</p>
// //                     </div>
// //                   )
// //               )}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default JobList;

// // // 2
// // // for fetch data
// // // src/components/JobList.js
// // // import React, { useEffect } from "react";
// // // import { useSelector, useDispatch } from "react-redux";
// // // import { Link } from "react-router-dom";

// // // import { fetchJob, fetchJobs } from "../../redux/rdx_/job/jobSlice";
// // // import { setjobId } from "../../redux/rdx_/job/jobSlice";

// // // import BCover from "../../assets/bg2.jpg";

// // // const JobList = () => {
// // //   const dispatch = useDispatch();
// // //   const {
// // //     jobs = [],
// // //     loading,
// // //     error,
// // //     job = {},
// // //     jobId,
// // //   } = useSelector((state) => state.jobs);

// // //   useEffect(() => {
// // //     dispatch(fetchJobs());
// // //   }, [dispatch]);

// // //   if (loading) return <p>Loading...</p>;
// // //   if (error) return <p>Error: {error}</p>;

// // //   const fetchJobDetails = (id) => {
// // //     dispatch(fetchJob(id)); // fetch by api
// // //     dispatch(setjobId(id)); // no fetch just use id to show info
// // //   };

// // //   const sectionStyle = {
// // //     backgroundImage: `url(${BCover})`,
// // //     backgroundSize: "cover",
// // //     backgroundRepeat: "no-repeat",
// // //   };

// // //   return (
// // //     <div
// // //       className="bg-cover bg-no-repeat text-lime-500 h-screen"
// // //       style={sectionStyle}
// // //     >
// // //       <Link
// // //         to="/create-job"
// // //         className="text-white underline m-2 block bg-sky-400 p-2"
// // //       >
// // //         Create New Job
// // //       </Link>
// // //       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2 h-full">
// // //         {/* Job List (Left Section - 1/3) */}
// // //         <div className="col-span-1 overflow-y-auto h-full scrollbar-hide">
// // //           {jobs.map((post) => (
// // //             <ul
// // //               onClick={() => fetchJobDetails(post.id)}
// // //               key={post.id}
// // //               className="hover:bg-green-700 p-5 m-1 rounded-md backdrop-blur-md shadow-xl"
// // //             >
// // //               <h2 className="text-xl text-sky-400 font-semibold">
// // //                 {post.title}
// // //               </h2>
// // //               <div>
// // //                 <div className="flex justify-around">
// // //                   <p className="text-white">{post.company}</p>
// // //                   <p className="text-white font-thin">{post.location}</p>
// // //                 </div>
// // //                 <div className="flex justify-around">
// // //                   <p className="text-white">{post.employmentType}</p>
// // //                   <p className="text-white">{post.salary} MMK</p>
// // //                 </div>
// // //               </div>
// // //               <p className="text-white">{post.description}</p>
// // //             </ul>
// // //           ))}
// // //         </div>

// // //         {/* Job Details (Right Section - 2/3) */}
// // //         <div className="col-span-2 overflow-y-scroll scrollbar-hide h-full">
// // //           {job && (
// // //             <div className="backdrop:blur-md shadow-lg sticky top-14">
// // //               {jobs.map(
// // //                 (post) =>
// // //                   post.id === jobId && ( // instead of jobId it is job.id
// // //                     <div
// // //                       key={post.id}
// // //                       className="backdrop-blur-lg shadow-2xl rounded-lg p-4 sticky top-10"
// // //                     >
// // //                       <div className="p-4 sticky top-10 shadow-2xl backdrop-blur-3xl">
// // //                         <h1 className="text-sky-400 text-3xl">{post.title}</h1>
// // //                         <p className="text-teal-300">{post.posted}</p>
// // //                         <p className="text-gray-400">{post.company}</p>
// // //                         <p>{post.location}</p>
// // //                         <p>{post.category}</p>
// // //                         <p>{post.employmentType}</p>
// // //                         <div className="space-x-2 pt-3">
// // //                           <button
// // //                             onClick={() => alert("Applied")}
// // //                             className="bg-black hover:bg-sky-800 text-white rounded-md p-2 mt-1"
// // //                           >
// // //                             Apply Now
// // //                           </button>
// // //                           <button
// // //                             onClick={() => alert("Add to Bookmark")}
// // //                             className="bg-black hover:bg-yellow-800 text-white rounded-md p-2 mt-1"
// // //                           >
// // //                             Save Post
// // //                           </button>
// // //                         </div>
// // //                       </div>
// // //                       <div className="p-4 m-4 overflow-y-auto">
// // //                         <h4 className="text-lg text-white font-bold">
// // //                           Duties & Responsibilities
// // //                         </h4>
// // //                         <ul className="text-gray-100">
// // //                           {(post.responsibilities
// // //                             ? post.responsibilities.split("; ")
// // //                             : []
// // //                           ).map((item, index) => (
// // //                             <li key={index}>{item}</li>
// // //                           ))}
// // //                         </ul>
// // //                         <br />
// // //                         <h4 className="text-lg text-white font-bold">
// // //                           Requirements
// // //                         </h4>
// // //                         <ul className="text-gray-100">
// // //                           {(post.requirements
// // //                             ? post.requirements.split("; ")
// // //                             : []
// // //                           ).map((item, index) => (
// // //                             <li key={index}>{item}</li>
// // //                           ))}
// // //                         </ul>
// // //                       </div>
// // //                       <p className="text-white text-lg font-bold">
// // //                         Address & Contact Number
// // //                       </p>
// // //                       <p className="text-white underline">{post.address}</p>
// // //                     </div>
// // //                   )
// // //               )}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default JobList;
