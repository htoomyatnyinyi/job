// // src/components/UserLists.js
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { fetchUsers } from "../../../redux/rdx_/user/userSlice";
// import { dashboardJobs } from "../../../redux/rdx_/dashboard/dashAPI";
// import { dashboardUsers } from "../../../redux/rdx_/dashboard/dashAPI";

// const UserLists = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.user.users);
//   const userStatus = useSelector((state) => state.user.status);
//   const error = useSelector((state) => state.user.error);
//   console.log(users, " check console");

//   useEffect(() => {
//     if (userStatus === "idle") {
//       dispatch(dashboardJobs());
//       dispatch(dashboardUsers());
//     }
//   }, [userStatus, dispatch]);

//   let content;

//   if (userStatus === "loading") {
//     content = <div>Loading...</div>;
//   } else if (userStatus === "succeeded") {
//     content = (
//       <ul className="backdrop-blur-sm p-4 rounded-lg shadow-md">
//         {users.map((user) => (
//           <li key={user.id} className="text-sky-500">
//             {user.username} || {user.userType}
//           </li>
//         ))}
//       </ul>
//     );
//   } else if (userStatus === "failed") {
//     content = <div className="text-white">{error}</div>;
//   }

//   return (
//     <>
//       <div className="container">
//         <h1
//           className="backdrop-blur-sm hover:backdrop-blur-md
//         p-2 m-1 text-3xl font-bold text-white "
//         >
//           User Lists
//         </h1>
//         {content}
//       </div>
//     </>
//   );
// };

// export default UserLists;
