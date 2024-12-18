import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setPostID } from "../../redux/rdx_/job/postsSlice";
import BCover from "../../assets/bg1.jpg";
// import { fetchPosts, setPostID } from "../../../redux/rdx_/posts/postsSlice";
// import BCover from "../../../assets/pexels-iriser-1379636.jpg";

const JobList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postID = useSelector((state) => state.posts.postID);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  if (postStatus === "loading") {
    return <div>Loading...</div>;
  } else if (postStatus === "failed") {
    return <div>{error}</div>;
  }

  const filterData = (id) => {
    dispatch(setPostID(id));
  };

  const sectionStyle = {
    backgroundImage: `url(${BCover})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="bg-cover bg-no-repeat text-lime-500 h-screen "
      style={sectionStyle}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2 h-full">
        {/* Job List (Left Section - 1/3) */}
        <div className="col-span-1 overflow-y-auto scroll-m-96 h-full scrollbar-hide">
          {posts.map((post) => (
            <ul
              onClick={() => filterData(post.id)}
              key={post.id}
              className="hover:bg-green-700 p-5 m-1 rounded-md backdrop-blur-md shadow-xl grid-cols-subgrid grid col-span-full"
            >
              <h2 className="text-xl text-sky-400 font-semibold">
                {post.title}
              </h2>
              <div>
                <div className="flex justify-around">
                  <p className="text-white">{post.company}</p>
                  <p className="text-white font-thin">{post.location}</p>
                </div>
                <div className="flex justify-around">
                  <p className="text-white">{post.employmentType}</p>
                  <p className="text-white ">{post.salary} MMK</p>
                </div>
              </div>
              <p className="text-white">{post.description}</p>
            </ul>
          ))}
        </div>

        {/* Job Details (Right Section - 2/3) */}
        <div className="col-span-2 overflow-y-scroll scrollbar-hide h-full">
          {postID && (
            <div className="backdrop:blur-md shadow-lg sticky top-14">
              {posts.map((post) =>
                post.id === postID ? (
                  <div
                    key={post.id}
                    className="backdrop-blur-lg shadow-2xl rounded-lg p-2 stati top-20"
                  >
                    <div className="p-4 sticky top-10 shadow-2xl backdrop-blur-3xl">
                      <h1 className="text-sky-400 backdrop-blur-xl text-3xl">
                        {post.title}
                      </h1>
                      <p className="text-teal-300">{post.posted}</p>
                      <p className="text-gray-400 p-2 m-1">{post.company}</p>
                      <p className="">{post.location}</p>
                      <p className="">{post.category}</p>
                      <p className="">{post.employmentType}</p>
                      <div className="space-x-2 pt-3">
                        <button
                          onClick={() => alert("Applied")}
                          className="bg-black hover:bg-sky-800 text-white rounded-md p-2 mt-1"
                        >
                          Apply Now
                        </button>
                        <button
                          onClick={() => alert("Add to BookMark")}
                          className="bg-black hover:bg-yellow-800 text-white rounded-md p-2 mt-1"
                        >
                          Save Post
                        </button>
                      </div>
                    </div>
                    <div className="p-4 m-4 overflow-y-auto min-h-full">
                      <h4 className="text-lg text-white font-bold">
                        Duties & Responsibilities
                      </h4>
                      <ul className="text-gray-100">
                        {/* {console.log(
                          post.responsibilities
                            ? post.responsibilities.split(";")
                            : []
                        )} */}
                        {(post.responsibilities
                          ? post.responsibilities.split("; ")
                          : []
                        ).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <br />
                      <h4 className="text-lg text-white font-bold">
                        Requirements
                      </h4>
                      <ul className="text-gray-100">
                        {/* {console.log(
                          post.requirements ? post.requirements.split("; ") : []
                        )} */}
                        {(post.requirements
                          ? post.requirements.split("; ")
                          : []
                        ).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* // update above */}
                    {/* <div className="p-4 m-4 overflow-y-auto min-h-full">
                      <h4 className="text-lg text-white font-bold">
                        Duties & Responsibilities
                      </h4>
                      <ul className="text-gray-100">
                        {post.responsibilities
                          .split("; ")
                          .map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                      </ul>
                      <br />
                      <h4 className="text-lg text-white font-bold">
                        Requirements
                      </h4>
                      <ul className="text-gray-100">
                        {post.requirements.split("; ").map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div> */}
                    <p className="text-white text-lg font-bold">
                      Address & Contact Number
                    </p>
                    <p className="text-white underline">{post.address}</p>
                  </div>
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// // import { fetchPosts, setPostID } from "../../../redux/rdx_/posts/jobSlice";
// import { fetchJobs, setJobID } from "../../redux/rdx_/job/jobSlice";
// // import Cover from "../../../assets/pexels-iriser-1379636.jpg";
// import Cover from "../../assets/bg1.jpg";

// const JobList = () => {
//   const dispatch = useDispatch();
//   const posts = useSelector((state) => state.posts.posts);
//   const postID = useSelector((state) => state.posts.postID);
//   const postStatus = useSelector((state) => state.posts.status);
//   const error = useSelector((state) => state.posts.error);

//   useEffect(() => {
//     if (postStatus === "idle") {
//       dispatch(fetchJobs());
//     }
//   }, [postStatus, dispatch]);

//   if (postStatus === "loading") {
//     return <div>Loading...</div>;
//   } else if (postStatus === "failed") {
//     return <div>{error}</div>;
//   }

//   const filterData = (id) => {
//     dispatch(setJobID(id));
//   };

//   const applyForJob = async (userId, postId) => {
//     try {
//       const response = await axios.post("http://localhost:8080/api/apply", {
//         userId,
//         postId,
//       });
//       alert(response.data.message);
//     } catch (error) {
//       console.error("Error applying for job:", error);
//       alert("Failed to apply for job.");
//     }
//   };

//   const sectionStyle = {
//     backgroundImage: `url(${Cover})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//   };

//   return (
//     <div
//       className="bg-cover bg-no-repeat text-lime-500 h-screen "
//       style={sectionStyle}
//     >
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-10 h-full">
//         {/* Job List (Left Section - 1/3) */}
//         <div className="col-span-1 pt-5 mt-5 overflow-y-auto scroll-m-96 h-full scrollbar-hide">
//           {posts.map((post) => (
//             <ul
//               onClick={() => filterData(post.id)}
//               key={post.id}
//               className="hover:bg-green-700 p-5 m-1 rounded-md backdrop-blur-md shadow-xl grid-cols-subgrid grid col-span-full"
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
//                   <p className="text-white ">{post.salary} MMK</p>
//                 </div>
//               </div>
//               <p className="text-white">{post.description}</p>
//             </ul>
//           ))}
//         </div>

//         {/* Job Details (Right Section - 2/3) */}
//         <div className="col-span-2 pt-5 mt-5 overflow-y-scroll scrollbar-hide h-full">
//           {postID && (
//             <div className="backdrop:blur-md shadow-lg sticky top-14">
//               {posts.map((post) =>
//                 post.id === postID ? (
//                   <div
//                     key={post.id}
//                     className="backdrop-blur-lg shadow-2xl rounded-lg p-2 stati top-20"
//                   >
//                     <div className="p-4 sticky top-10 shadow-2xl backdrop-blur-3xl">
//                       <h1 className="text-sky-400 backdrop-blur-xl text-3xl">
//                         {post.title}
//                       </h1>
//                       <p className="text-teal-300">{post.posted}</p>
//                       <p className="text-gray-400 p-2 m-1">{post.company}</p>
//                       <p className="">{post.location}</p>
//                       <p className="">{post.category}</p>
//                       <p className="">{post.employmentType}</p>
//                       <div className="space-x-2 pt-3">
//                         <button
//                           onClick={() => applyForJob(1, post.id)} // Replace 1 with actual userId from state or props
//                           className="bg-black hover:bg-sky-800 text-white rounded-md p-2 mt-1"
//                         >
//                           Apply Now
//                         </button>
//                         <button
//                           onClick={() => alert("Add to BookMark")}
//                           className="bg-black hover:bg-yellow-800 text-white rounded-md p-2 mt-1"
//                         >
//                           Save Post
//                         </button>
//                       </div>
//                     </div>
//                     <div className="p-4 m-4 overflow-y-auto min-h-full">
//                       <h4 className="text-lg text-white font-bold">
//                         Duties & Responsibilities
//                       </h4>
//                       <ul className="text-gray-100">
//                         {(post.responsibilities
//                           ? post.responsibilities.split("; ")
//                           : []
//                         ).map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                       <br />
//                       <h4 className="text-lg text-white font-bold">
//                         Requirements
//                       </h4>
//                       <ul className="text-gray-100">
//                         {(post.requirements
//                           ? post.requirements.split("; ")
//                           : []
//                         ).map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                     <p className="text-white text-lg font-bold">
//                       Address & Contact Number
//                     </p>
//                     <p className="text-white underline">{post.address}</p>
//                   </div>
//                 ) : null
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobList;
