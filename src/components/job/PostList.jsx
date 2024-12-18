// This code is suspend from App.jsx routing because using JobListing.jsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeroSection from "../views/HeroSection";
import { fetchPosts } from "../../redux/rdx_/posts/postsSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  if (postStatus === "loading") {
    <div>Loading...</div>;
  } else if (postStatus === "succeeded") {
    <ul className=" p-4 rounded-lg shadow-md backdrop-blur-sm">
      {posts.map((post) => (
        <li key={post.id} className="text-sky-500 ">
          <Link to={`/post/${post.id}`}>
            {post.id} :: {post.title}
          </Link>
        </li>
      ))}
    </ul>;
  } else if (postStatus === "failed") {
    <div>{error}</div>;
  }

  return (
    <>
      <HeroSection text={"Job Vacancy Page"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            to={`/post/${post.id}`}
            key={post.id}
            className="bg-white p-4 border rounded shadow"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.company}</p>
            <p className="text-gray-500">{post.location}</p>
            <div className="mt-2">
              <p className="text-gray-700">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default PostList;

// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// import HeroSection from "../views/HeroSection";

// const PostList = () => {
//   const posts = useSelector((state) => state.posts.posts);

//   return (
//     <>
//       <HeroSection text={"Job Vacancy Page"} />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {posts.map((post) => (
//           <Link
//             to={`/post/${post.id}`}
//             key={post.id}
//             className="bg-white p-4 border rounded shadow"
//           >
//             <h2 className="text-xl font-semibold">{post.title}</h2>
//             <p className="text-gray-700">{post.company}</p>
//             <p className="text-gray-500">{post.location}</p>
//             <div className="mt-2">
//               <p className="text-gray-700">{post.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// };

// export default PostList;
// // import React from "react";
// // import { useSelector } from "react-redux";
// // import { Link } from "react-router-dom";

// // import HeroSection from "../views/HeroSection";

// // const PostList = () => {
// //   const posts = useSelector((state) => state.posts.posts);
// //   // const postStatus = useSelector((state) => state.posts.status);
// //   // const error = useSelector((state) => state.posts.error);

// //   return (
// //     <>
// //       <HeroSection text={"Job_Vacancy_Page"} />
// //       {/* <h3>{posts}</h3> */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //         {posts.map((post) => (
// //           <Link
// //             to={`/post/${post.id}`}
// //             key={post.id}
// //             className="bg-white p-4 border rounded shadow"
// //           >
// //             <h2 className="text-xl font-semibold">{post.title}</h2>
// //             <p className="text-gray-700">{post.company}</p>
// //             <p className="text-gray-500">{post.location}</p>
// //             <div className="mt-2">
// //               <p className="text-gray-700">{post.description}</p>
// //             </div>
// //           </Link>
// //         ))}
// //         1
// //       </div>
// //     </>
// //   );
// // };

// // export default PostList;
