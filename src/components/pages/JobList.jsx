// import React, { useState, useEffect } from "react";

// // Example job data
// const jobData = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     company: "Tech Solutions",
//     location: "Remote",
//     salary: "$80,000 - $100,000",
//     description:
//       "Build modern and performant web applications with React, Redux, and Tailwind.",
//     fullDescription:
//       "Build modern and performant web applications with React, Redux, and Tailwind. Responsibilities include collaborating with the backend team to integrate APIs, implementing responsive design, and optimizing performance. Must have experience with version control (Git) and team collaboration.",
//   },
//   {
//     id: 2,
//     title: "Backend Developer",
//     company: "Innovatech",
//     location: "New York, NY",
//     salary: "$90,000 - $120,000",
//     description:
//       "Develop APIs and manage databases using Node.js and MySQL. Work with DevOps teams to ensure scalability.",
//     fullDescription:
//       "Develop APIs and manage databases using Node.js and MySQL. Collaborate with front-end developers to integrate user-facing elements with server-side logic. Build reusable code libraries for future use, ensure optimal performance, and support cloud infrastructure.",
//   },
//   // Add more jobs...
// ];

// const JobList = () => {
//   const [jobs, setJobs] = useState(jobData); // Default to all jobs
//   const [filteredJobs, setFilteredJobs] = useState(jobs); // Jobs to display based on filters
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortKey, setSortKey] = useState("title");
//   const [locationFilter, setLocationFilter] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [jobsPerPage] = useState(3); // Set jobs per page for pagination

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSort = (key) => {
//     setSortKey(key);
//     setFilteredJobs((prevJobs) => {
//       return [...prevJobs].sort((a, b) => {
//         if (key === "salary") {
//           // Sorting salary based on range (take first number as basis)
//           const salaryA = parseInt(
//             a.salary.replace(/[^\d]/g, "").split("-")[0]
//           );
//           const salaryB = parseInt(
//             b.salary.replace(/[^\d]/g, "").split("-")[0]
//           );
//           return salaryA - salaryB;
//         } else {
//           return a[key].localeCompare(b[key]);
//         }
//       });
//     });
//   };

//   const handleFilter = (e) => {
//     setLocationFilter(e.target.value);
//   };

//   // Filter jobs based on search term and location
//   useEffect(() => {
//     let filtered = jobs.filter((job) => {
//       return (
//         job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         job.company.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     });

//     if (locationFilter) {
//       filtered = filtered.filter((job) =>
//         job.location.toLowerCase().includes(locationFilter.toLowerCase())
//       );
//     }

//     setFilteredJobs(filtered);
//   }, [searchTerm, locationFilter, jobs]);

//   // Pagination
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // "Read More" Toggle
//   const [expanded, setExpanded] = useState({});

//   const toggleReadMore = (id) => {
//     setExpanded((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       {/* Search and Filters */}
//       <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearch}
//           placeholder="Search for jobs..."
//           className="p-2 border rounded-lg w-full md:w-1/3 mb-4 md:mb-0"
//         />

//         <select
//           value={locationFilter}
//           onChange={handleFilter}
//           className="p-2 border rounded-lg w-full md:w-1/4 mb-4 md:mb-0"
//         >
//           <option value="">All Locations</option>
//           <option value="Remote">Remote</option>
//           <option value="New York, NY">New York, NY</option>
//           <option value="San Francisco, CA">San Francisco, CA</option>
//         </select>

//         <button
//           onClick={() => handleSort("title")}
//           className="p-2 border rounded-lg bg-blue-500 text-white hover:bg-blue-600 mb-4 md:mb-0"
//         >
//           Sort by Title
//         </button>

//         <button
//           onClick={() => handleSort("salary")}
//           className="p-2 border rounded-lg bg-blue-500 text-white hover:bg-blue-600"
//         >
//           Sort by Salary
//         </button>
//       </div>

//       {/* Job Listings */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {currentJobs.map((job) => (
//           <div
//             key={job.id}
//             className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
//           >
//             <h2 className="text-xl font-bold mb-2">{job.title}</h2>
//             <p className="text-gray-600 font-semibold">{job.company}</p>
//             <div className="flex justify-between items-center mt-4 text-gray-500">
//               <span>{job.location}</span>
//               <span>{job.salary}</span>
//             </div>

//             {/* Job Description */}
//             <p className="text-gray-700 mt-4">
//               {expanded[job.id]
//                 ? job.fullDescription
//                 : `${job.description.substring(0, 80)}...`}
//             </p>
//             <button
//               onClick={() => toggleReadMore(job.id)}
//               className="text-blue-500 underline mt-2"
//             >
//               {expanded[job.id] ? "Read Less" : "Read More"}
//             </button>

//             {/* Apply Button */}
//             <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//               Apply Now
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="mt-8 flex justify-center space-x-4">
//         {[...Array(Math.ceil(filteredJobs.length / jobsPerPage)).keys()].map(
//           (number) => (
//             <button
//               key={number + 1}
//               onClick={() => paginate(number + 1)}
//               className={`py-2 px-4 border rounded-lg ${
//                 currentPage === number + 1
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               {number + 1}
//             </button>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobList;
