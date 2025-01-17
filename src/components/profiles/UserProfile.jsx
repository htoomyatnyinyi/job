// THIS CODE IS FULLY FUNCTINING
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    username: "",
    phone: "",
    first_name: "",
    last_name: "",
    gender: "",
  });

  const [editingField, setEditingField] = useState(null); // Keeps track of which field is being edited
  const [message, setMessage] = useState("");

  // Fetch profile data on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8080/profile");
        setProfile(response.data); // Set fetched data to the state
      } catch (error) {
        console.error(
          "Failed to fetch profile:",
          error.response?.data || error.message
        );
      }
    };

    fetchProfile();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Save individual field
  const saveField = async (field) => {
    const updatedField = { [field]: profile[field] };

    try {
      const response = await axios.put(
        "http://localhost:8080/profile",
        updatedField
      );

      setMessage(response.data.message);
      setEditingField(null); // Exit edit mode for the field
    } catch (error) {
      console.error(
        "Failed to update profile:",
        error.response?.data || error.message
      );
      setMessage("Error updating profile");
    }
  };

  return (
    <div className="text-black dark:text-white bg-sky-950 p-5">
      <h2 className="p-2 bg-sky-900 rounded-xl text-3xl font-serif text-center">
        User Profile
      </h2>
      {message && <p className="bg-green-600 p-2 ">{message}</p>}

      <div className="backdrop-blur-xl p-2 m-1 shadow-2xl">
        {Object.keys(profile).map((field) => (
          <div
            key={field}
            className="backdrop-blur-xl p-2 hover:bg-green-700 rounded-md"
          >
            <label>{field.replace("_", " ").toUpperCase()}:</label>

            {editingField === field ? (
              <>
                <input
                  type="text"
                  name={field}
                  value={profile[field]}
                  onChange={handleInputChange}
                  className="bg-sky-400 p-2"
                />
                <button
                  onClick={() => saveField(field)}
                  className="p-2 bg-yellow-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingField(null)}
                  className="bg-red-600 p-2"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{profile[field] || "N/A"}</span>
                <button
                  onClick={() => setEditingField(field)}
                  className="hover:bg-sky-600 p-2 "
                >
                  Edit
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UserProfile = () => {
//   const [profile, setProfile] = useState({
//     username: "",
//     phone: "",
//     first_name: "",
//     last_name: "",
//     gender: "",
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [message, setMessage] = useState("");

//   //   const token = localStorage.getItem("mlab"); // Assuming the token is stored in localStorage

//   // Fetch user profile when the component mounts
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/profile`);
//         setProfile(response.data); // Set fetched data to the state
//       } catch (error) {
//         console.error(
//           "Failed to fetch profile:",
//           error.response?.data || error.message
//         );
//       }
//     };

//     fetchProfile();
//   }, []);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       [name]: value,
//     }));
//   };

//   // Save updates to the profile
//   const saveProfile = async () => {
//     // Filter fields to include only updated ones
//     const updatedFields = Object.keys(profile).reduce((acc, key) => {
//       if (profile[key]) {
//         acc[key] = profile[key];
//       }
//       return acc;
//     }, {});

//     try {
//       const response = await axios.put(
//         `http://localhost:8080/profile`,
//         updatedFields
//       );

//       setMessage(response.data.message);
//       setIsEditing(false);
//     } catch (error) {
//       console.error(
//         "Failed to update profile:",
//         error.response?.data || error.message
//       );
//       setMessage("Error updating profile");
//     }
//   };

//   return (
//     <div className="user-profile">
//       <h2>User Profile</h2>
//       {message && <p className="message">{message}</p>}

//       <div className="profile-form">
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={profile.username}
//             onChange={handleInputChange}
//             disabled={!isEditing}
//           />
//         </label>

//         <label>
//           Phone:
//           <input
//             type="text"
//             name="phone"
//             value={profile.phone}
//             onChange={handleInputChange}
//             disabled={!isEditing}
//           />
//         </label>

//         <label>
//           First Name:
//           <input
//             type="text"
//             name="first_name"
//             value={profile.first_name}
//             onChange={handleInputChange}
//             disabled={!isEditing}
//           />
//         </label>

//         <label>
//           Last Name:
//           <input
//             type="text"
//             name="last_name"
//             value={profile.last_name}
//             onChange={handleInputChange}
//             disabled={!isEditing}
//           />
//         </label>

//         <label>
//           Gender:
//           <select
//             name="gender"
//             value={profile.gender}
//             onChange={handleInputChange}
//             disabled={!isEditing}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </label>
//       </div>

//       <div className="profile-actions">
//         {!isEditing ? (
//           <button onClick={() => setIsEditing(true)}>Edit Profile</button>
//         ) : (
//           <>
//             <button onClick={saveProfile}>Save</button>
//             <button onClick={() => setIsEditing(false)}>Cancel</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };
// export default UserProfile;

// // ############################
// // THIS CODE IS FUNCTINING WITH THEME
// // ####################################
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UserProfile = () => {
//   const [profile, setProfile] = useState({
//     username: "",
//     phone: "",
//     first_name: "",
//     last_name: "",
//     gender: "",
//   });

//   const [editingField, setEditingField] = useState(null); // Keeps track of which field is being edited
//   const [message, setMessage] = useState("");
//   const token = localStorage.getItem("mlab"); // Assuming the token is stored in localStorage

//   // Fetch profile data on mount
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/profile");
//         setProfile(response.data); // Set fetched data to the state
//       } catch (error) {
//         console.error(
//           "Failed to fetch profile:",
//           error.response?.data || error.message
//         );
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       [name]: value,
//     }));
//   };

//   // Save individual field
//   const saveField = async (field) => {
//     const updatedField = { [field]: profile[field] };

//     try {
//       const response = await axios.put(
//         "http://localhost:8080/profile",
//         updatedField
//       );

//       setMessage(response.data.message);
//       setEditingField(null); // Exit edit mode for the field
//     } catch (error) {
//       console.error(
//         "Failed to update profile:",
//         error.response?.data || error.message
//       );
//       setMessage("Error updating profile");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-semibold text-gray-800">User Profile</h2>
//       {message && (
//         <p className="mt-4 text-center text-green-600 font-medium">{message}</p>
//       )}

//       <div className="mt-6 space-y-4">
//         {Object.keys(profile).map((field) => (
//           <div key={field} className="flex items-center space-x-4">
//             <label className="font-medium text-gray-700 w-32 capitalize">
//               {field.replace("_", " ")}:
//             </label>

//             {editingField === field ? (
//               <div className="flex-grow">
//                 <input
//                   type="text"
//                   name={field}
//                   value={profile[field]}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//                 />
//                 <div className="flex space-x-2 mt-2">
//                   <button
//                     onClick={() => saveField(field)}
//                     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={() => setEditingField(null)}
//                     className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="flex-grow flex items-center justify-between">
//                 <span className="text-gray-700">{profile[field] || "N/A"}</span>
//                 <button
//                   onClick={() => setEditingField(field)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                 >
//                   Edit
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
