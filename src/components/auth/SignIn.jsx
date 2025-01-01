import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../redux/rdx_/auth/authAPI";
import BGCover from "../../assets/bg2.jpg";
// import Cookies from "js-cookie";

const SignIn = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const identifierRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    const credentials = {
      identifier: identifierRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(signin(credentials));
  };

  // useEffect(() => { // need to declear the useEffect
  //   // Accessing all cookies
  //   console.log("All Cookies:", document.cookie);

  //   // Using js-cookie for easier access (recommended)
  //   const myCookie = Cookies.get("authToken"); // Replace "authToken"
  //   console.log("Specific Cookie (authToken):", myCookie);

  //   // Example: Accessing a cookie after login (assuming your backend sets it)
  //   if (auth.token) {
  //     const authTokenFromCookie = Cookies.get("auth_token"); // Example cookie name
  //     console.log("Auth Token from Cookie:", authTokenFromCookie);
  //     // Now you can use authTokenFromCookie, e.g., in subsequent API calls
  //   }
  // }, [auth.token]); // Important: Add auth.token as a dependency

  return (
    // ... (rest of your JSX remains the same)
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover"
      style={{ backgroundImage: `url(${BGCover})` }}
    >
      <div className="max-w-lg w-full shadow-lg backdrop-blur-sm rounded p-20 m-1">
        <h2 className="text-3xl font-bold text-center mb-4 text-sky-400">
          Please SignIn Here!
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email / Username / Phone"
              ref={identifierRef}
              className="bg-grey-100 border-2 text-black border-gray-200 rounded w-full py-2 px-4 mb-2"
            />
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              className="bg-gray-100 border-2 text-black border-gray-200 rounded w-full py-2 px-4 mb-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign In
          </button>
        </form>
        {auth.error ? (
          <p className="text-red-500 text-center mt-4">
            {typeof auth.error === "object"
              ? JSON.stringify(auth.error)
              : auth.error}
          </p>
        ) : (
          <p className="text-white mt-4 text-center">{auth.mesg}</p>
        )}
      </div>
    </div>
  );
};

export default SignIn;

// import React, { useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// import { signin } from "../../redux/rdx_/auth/authAPI";
// import BGCover from "../../assets/bg1.jpg";
// import Cookies from "js-cookie";

// const SignIn = () => {
//   const dispatch = useDispatch();
//   // const navigate = useNavigate();
//   const auth = useSelector((state) => state.auth);

//   const identifierRef = useRef(null);
//   const passwordRef = useRef(null);
//   // const userProfile = localStorage.getItem("userInfo");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const credentials = {
//       identifier: identifierRef.current.value,
//       password: passwordRef.current.value,
//     };
//     dispatch(signin(credentials));
//   };

//   // useEffect(() => { // use Effect need to declear
//   //   if (auth.token) {
//   //     // Navigate if token is present (indicates successful login)
//   //     navigate("/timeline");
//   //   }
//   // }, [auth.token, navigate]);
//   // useEffect(() => {
//   //   console.log(userProfile);
//   // }, []);

//   return (
//     <div
//       className="flex flex-col items-center justify-center h-screen bg-cover"
//       style={{ backgroundImage: `url(${BGCover})` }}
//     >
//       <div className="max-w-lg w-full shadow-lg backdrop-blur-sm rounded p-20 m-1">
//         <h2 className="text-3xl font-bold text-center mb-4 text-sky-400">
//           Please SignIn Here!
//         </h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Email / Username / Phone"
//               ref={identifierRef}
//               className="bg-grey-100 border-2 text-black border-gray-200 rounded w-full py-2 px-4 mb-2"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               ref={passwordRef}
//               className="bg-gray-100 border-2 text-black border-gray-200 rounded w-full py-2 px-4 mb-2"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Sign In
//           </button>
//         </form>
//         {auth.error ? (
//           <p className="text-red-500 text-center mt-4">
//             {typeof auth.error === "object"
//               ? JSON.stringify(auth.error)
//               : auth.error}
//           </p>
//         ) : (
//           <p className="text-white mt-4 text-center">{auth.mesg}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignIn;

// // Original Code
// // import React, { useRef, useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import { Link } from "react-router-dom";
// // import { signin } from "../../redux/rdx_/auth/authAPI";
// // // import { signin } from "../../redux/rdx_/auth/authSlice"; // before use authAPI.js
// // // import BGCover from "../../assets/pexels-iriser-1379636.jpg";
// // import BGCover from "../../assets/bg1.jpg";

// // const SignIn = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const auth = useSelector((state) => state.auth);

// //   const identifierRef = useRef(null);
// //   const passwordRef = useRef(null);

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     const credentials = {
// //       identifier: identifierRef.current.value,
// //       password: passwordRef.current.value,
// //     };
// //     dispatch(signin(credentials));
// //     // Clear input fields after dispatching the action
// //     identifierRef.current.value = "labs"; // empty string ''
// //     passwordRef.current.value = "labs";
// //   };

// //   useEffect(() => {
// //     if (auth.token) {
// //       navigate("/timeline");
// //     }
// //   }, [auth.token, navigate]);

// //   return (
// //     <>
// //       {/* <HeroSection /> */}
// //       <div
// //         className="flex flex-col items-center justify-center h-screen bg-cover"
// //         style={{ backgroundImage: `url(${BGCover})` }}
// //       >
// //         {/* <div className="max-w-md w-full  shadow-lg backdrop-blur-sm rounded px-8 pt-6 pb-8 mb-4"> */}
// //         <div className="max-w-lg w-full shadow-lg backdrop-blur-sm rounded p-20 m-1">
// //           <h2 className="text-3xl font-bold text-center mb-4 text-sky-400">
// //             Please SignIn Here!
// //           </h2>

// //           <form onSubmit={handleLogin}>
// //             <div className="mb-4">
// //               <input
// //                 type="text"
// //                 placeholder="Email / Username / Phone"
// //                 ref={identifierRef}
// //                 className="bg-gray-100 border-2 border-gray-200 rounded w-full py-2 px-4 mb-2"
// //               />
// //               <input
// //                 type="password"
// //                 placeholder="Password"
// //                 ref={passwordRef}
// //                 className="bg-gray-100 border-2 border-gray-200 rounded w-full py-2 px-4 mb-2"
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
// //             >
// //               Sign In
// //             </button>
// //           </form>
// //           {auth.error && (
// //             <p className="text-red-500 text-center mt-4">
// //               {typeof auth.error === "object"
// //                 ? JSON.stringify(auth.error)
// //                 : auth.error}
// //             </p>
// //           )}
// //         </div>
// //         <p className="text-slate-100 text-sm backdrop-blur-sm p-4">
// //           Don't have an account?
// //           <Link to="/signup" className="text-blue-500 font-bold underline">
// //             Sign Up
// //           </Link>
// //         </p>
// //         <p className="text-slate-100 text-sm backdrop-blur-sm p-4">
// //           Forgot Password?
// //           <Link to="/recovery" className="text-blue-500 font-bold underline">
// //             Click Here
// //           </Link>
// //         </p>
// //       </div>
// //     </>
// //   );
// // };

// // export default SignIn;
