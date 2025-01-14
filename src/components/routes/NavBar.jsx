import React from "react";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AiFillCode,
  AiFillAppstore,
  AiOutlineUser,
  AiFillDashboard,
} from "react-icons/ai";
import logo from "../../assets/bg2.jpg";

const NavBar = () => {
  return (
    <div className="sticky top-0 ">
      <div
        // style={{ backgroundImage: `url(${backgroundImage})` }}
        className="flex justify-around items-center p-2 backdrop-blur-lg absoulute"
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            height={40}
            width={40}
            alt="logo"
            className="p-2 border-b-4 border-sky-400"
          />
        </Link>

        {/* Navigation */}
        <ul className="flex space-x-6 p-2">
          {/* <li>
            <Link
              to="/timeline"
              className="flex items-center space-x-2 border-b-4 hover:border-sky-600"
            >
              <AiFillAppstore />
              <span>Timelime</span>
            </Link>
          </li> */}

          <li>
            <Link
              to="/jobs"
              className="flex items-center space-x-2 border-b-4 hover:border-sky-600"
            >
              <AiFillCode />
              <span>Job</span>
            </Link>
          </li>
          {/* <li>
            <Link
              to="/"
              className="flex items-center space-x-2 border-b-4 hover:border-sky-600"
            >
              <AiFillCode />
              <span>About Us</span>
            </Link>
          </li> */}
        </ul>

        {/* Theme Toggle and Profile */}
        <div className="flex items-center space-x-4">
          <AccountToggle />
          {/* <AiOutlineUserDelete /> */}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

const AccountToggle = () => {
  const token = useSelector((state) => state.auth.authorized);

  return (
    <>
      {token ? (
        <>
          <Link
            to="/dashboard"
            className="flex items-center space-x-2 p-2 border-b-4 hover:border-sky-600"
          >
            <AiFillDashboard />
          </Link>
          <Link
            to="/profile"
            className="flex items-center space-x-2 p-2 border-b-4 hover:border-sky-600"
          >
            <AiOutlineUser />
            {/* <span>Profile</span> */}
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/signin"
            className="flex items-center space-x-2 border-b-4 hover:border-sky-600"
          >
            <AiFillAppstore />
            <span>SignIn</span>
          </Link>
          <Link
            to="/signup"
            className="flex items-center space-x-2 border-b-4 hover:border-sky-600"
          >
            <AiFillAppstore />
            <span>SignUp</span>
          </Link>
        </>
      )}
    </>
  );
};

// const MenuBar = () => {
//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   return (
//     <>
//       <div className="relative" onMouseLeave={toggleDropdown}>
//         <button
//           className="flex items-center text-gray-500 hover:text-blue-500"
//           onMouseUp={toggleDropdown}
//           onMouseLeave={toggleDropdown}
//         >
//           <AiFillAppstore className="h-6 w-6 mr-1" />
//           PROFILE
//         </button>
//         {dropdownOpen && (
//           <div>
//             <div className="absolute right-0 mt-2 w-48 bg-sky-500 rounded-lg shadow-lg py-2">
//               {/* <Link
//             to="/dashboard/overview"
//               className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//               >
//               Go to Profile
//               </Link>
//             <Link
//               to="/dashboard"
//               className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//             >
//               {isJobSeeker ? "Job Seeker Profile" : "Employer Profile"}
//             </Link>
//             <button
//             className="ml-4 bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-700"
//             onClick={toggleRole}
//             >
//             For Employer
//             </button> */}
//               <h1>Hi</h1>
//               <h1>H2</h1>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };
