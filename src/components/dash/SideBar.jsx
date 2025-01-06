import React from "react";
import { Link } from "react-router-dom";
// import { signout } from "../../../redux/rdx_/auth/authSlice";/
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../redux/rdx_/auth/authSlice";
// import { AiOutlineUserSwitch } from "react-icons/ai";

const Sidebar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  return (
    <div className="w-64 min-h-screen backdrop-blur-xl text-white p-4">
      <ul className="">
        {/* mt-10 */}
        <Link to="/">
          {user.authorized ? (
            <div className="p-2 border-s-2 mb-4 align-middle justify-center ">
              <h1 className="border-b-2 ">{user.profile.username}</h1>
              <h5 className="border-b-2">{user.profile.email}</h5>
            </div>
          ) : (
            <h1 className="bg-green-500 p-2">{user.error}</h1>
          )}

          {/* <li className="mb-4 flex  items-center align-middle">
            <h1 className="p-4 text-3xl font-bold shadow-2xl border-s-4">
              JobSeeker {" Hi,Htoo"}
            </h1>
            <span className="shadow-2xl text-5xl">
              <AiOutlineUserSwitch />
            </span>
          </li> */}
        </Link>
        <Link to="/dashboard/profile" className="text-white">
          <li className="mb-4 hover:bg-sky-600  p-2  text-center border border-sky-900  border-b-4">
            UserProfile
          </li>
        </Link>
        {/* <li className="mb-4 bg-sky-900 p-2  text-center"> */}
        <Link to="/dashboard/applied" className="text-white">
          <li className="mb-4 hover:bg-sky-900 p-2  text-center border border-sky-900 border-b-4">
            Applied Jobs
          </li>
        </Link>
        <Link to="/dashboard/jobs" className="text-white">
          <li className="mb-4 hover:bg-sky-900 p-2  text-center border border-sky-900 border-b-4">
            Job Lists
          </li>
        </Link>
        <Link to="/dashboard/deleteuser" className="text-white">
          <li className="mb-4 hover:bg-sky-900 p-2  text-center border border-sky-900 border-b-4">
            Delete User
          </li>
        </Link>
        <Link to="/dashboard/addnewjob" className="text-white">
          <li className="mb-4 hover:bg-sky-900 p-2  text-center border border-sky-900 border-b-4">
            Add New Job
          </li>
        </Link>
        <button
          onClick={() => dispatch(() => signout())}
          className="text-white"
        >
          <li className="absolute bottom-20 mb-2 left-4 right-4 hover:bg-lime-600 p-2  text-center border border-red-900 border-b-4">
            Sign Out
          </li>
        </button>
        <li
          className="absolute bottom-10 left-4 right-4
          hover:bg-sky-600 bg-sky-900 p-2  text-center"
        >
          <Link to="/dashboard/settings" className="text-white">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="w-64 min-h-screen backdrop-blur-xl  text-white p-4">
//       <ul className="mt-10">
//         <li className="mb-4">
//           <h1 className="p-4 text-3xl font-bold shadow-2xl  rounded-lg">
//             JobSeeker {" Hi,Htoo"}
//           </h1>
//         </li>
//         <li className="mb-4 bg-sky-400 p-2 rounded-full text-center ">
//           <Link to="/dashboard/overview" className="text-white ">
//             Overview
//           </Link>
//         </li>
//         <li className="mb-4 bg-sky-400 p-2 rounded-full text-center ">
//           <Link to="/dashboard/userlist" className="text-white">
//             User List
//           </Link>
//         </li>
//         <li className="mb-4 bg-sky-400 p-2 rounded-full text-center ">
//           <Link to="/dashboard/adduser" className="text-white">
//             Add User
//           </Link>
//         </li>
//         <li className="mb-4 bg-sky-400 p-2 rounded-full text-center ">
//           <Link to="/dashboard/deleteuser" className="text-white">
//             Delete User
//           </Link>
//         </li>
//         <li className="mb-4  bg-sky-400 p-2 rounded-full text-center ">
//           <button className="">Settings</button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
// import { useState, useEffect } from "react";
// import {
//   FaHome,
//   FaUser,
//   FaChartPie,
//   FaCog,
//   FaAngleDoubleLeft,
//   FaAngleDoubleRight,
// } from "react-icons/fa";

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

//   // Detect screen size and set initial state
//   useEffect(() => {
//     const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
//     setIsSidebarMinimized(isMobile);
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const toggleSidebarMinimized = () => {
//     setIsSidebarMinimized(!isSidebarMinimized);
//   };

//   return (
//     <div>
//       {/* Sidebar Button for Mobile View */}
//       <button
//         className="lg:hidden block p-4 text-white bg-gray-800"
//         onClick={toggleSidebar}
//       >
//         {/* Add an appropriate icon for a hamburger menu here */}
//       </button>

//       {/* Sidebar Content */}
//       <aside
//         className={`h-screen bg-gray-800 text-white flex flex-col items-center py-6 ${
//           isSidebarOpen ? "block" : "hidden"
//         } lg:block ${isSidebarMinimized ? "w-16" : "w-64"}`}
//       >
//         {/* Minimize/Maximize Button (only for desktop) */}
//         <button
//           className="hidden lg:block absolute top-4 right-4 p-2 text-white bg-gray-900 rounded-full"
//           onClick={toggleSidebarMinimized}
//         >
//           {isSidebarMinimized ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
//         </button>

//         <h1
//           className={`text-3xl font-bold mb-10 ${
//             isSidebarMinimized ? "hidden" : "block"
//           }`}
//         >
//           Dashboard
//         </h1>
//         <nav className="flex flex-col gap-4">
//           <a
//             href="#home"
//             className={`flex items-center gap-2 p-2 text-gray-300 hover:bg-gray-700 rounded-md ${
//               isSidebarMinimized ? "justify-center" : "justify-start"
//             }`}
//           >
//             {isSidebarMinimized ? (
//               <FaHome />
//             ) : (
//               <>
//                 <FaHome /> Home
//               </>
//             )}
//           </a>
//           {/* ... other links ... */}
//         </nav>
//       </aside>
//     </div>
//   );
// };

// export default Sidebar; // import { useState } from "react";
// // import {
// //   FaHome,
// //   FaUser,
// //   FaChartPie,
// //   FaCog,
// //   FaAngleDoubleLeft,
// //   FaAngleDoubleRight,
// // } from "react-icons/fa";

// // const Sidebar = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// //   const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   const toggleSidebarMinimized = () => {
// //     setIsSidebarMinimized(!isSidebarMinimized);
// //   };

// //   return (
// //     <div>
// //       {/* Sidebar Button for Mobile View */}
// //       <button
// //         className="lg:hidden block p-4 text-white bg-gray-800"
// //         onClick={toggleSidebar}
// //       >
// //         {/* Add an appropriate icon for a hamburger menu here */}
// //       </button>

// //       {/* Sidebar Content */}
// //       <aside
// //         className={`h-screen bg-gray-800 text-white flex flex-col items-center py-6 ${
// //           isSidebarOpen ? "block" : "hidden"
// //         } lg:block ${isSidebarMinimized ? "w-16" : "w-64"}`}
// //       >
// //         <button
// //           className="absolute top-4 right-4 p-2 text-white bg-gray-900 rounded-full"
// //           onClick={toggleSidebarMinimized}
// //         >
// //           {isSidebarMinimized ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
// //         </button>

// //         <h1
// //           className={`text-3xl font-bold mb-10 ${
// //             isSidebarMinimized ? "hidden" : "block"
// //           }`}
// //         >
// //           Dashboard
// //         </h1>
// //         <nav className="flex flex-col gap-4">
// //           <a
// //             href="#home"
// //             className={`flex items-center gap-2 p-2 text-gray-300 hover:bg-gray-700 rounded-md ${
// //               isSidebarMinimized ? "justify-center" : "justify-start"
// //             }`}
// //           >
// //             {isSidebarMinimized ? (
// //               <FaHome />
// //             ) : (
// //               <>
// //                 <FaHome /> Home
// //               </>
// //             )}
// //           </a>
// //           <a
// //             href="#profile"
// //             className={`flex items-center gap-2 p-2 text-gray-300 hover:bg-gray-700 rounded-md ${
// //               isSidebarMinimized ? "justify-center" : "justify-start"
// //             }`}
// //           >
// //             {isSidebarMinimized ? (
// //               <FaUser />
// //             ) : (
// //               <>
// //                 <FaUser /> Profile
// //               </>
// //             )}
// //           </a>

// //           {/* ... other links ... */}
// //         </nav>
// //       </aside>
// //     </div>
// //   );
// // };

// // export default Sidebar;
