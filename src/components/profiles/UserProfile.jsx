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

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  //   const token = localStorage.getItem("mlab"); // Assuming the token is stored in localStorage

  // Fetch user profile when the component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/profile`);
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

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Save updates to the profile
  const saveProfile = async () => {
    // Filter fields to include only updated ones
    const updatedFields = Object.keys(profile).reduce((acc, key) => {
      if (profile[key]) {
        acc[key] = profile[key];
      }
      return acc;
    }, {});

    try {
      const response = await axios.put(
        `http://localhost:8080/profile`,
        updatedFields
      );

      setMessage(response.data.message);
      setIsEditing(false);
    } catch (error) {
      console.error(
        "Failed to update profile:",
        error.response?.data || error.message
      );
      setMessage("Error updating profile");
    }
  };

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

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {message && <p className="message">{message}</p>}

      <div className="profile-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>

        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>

        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={profile.first_name}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={profile.last_name}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>

        <label>
          Gender:
          <select
            name="gender"
            value={profile.gender}
            onChange={handleInputChange}
            disabled={!isEditing}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>

      <div className="profile-actions">
        {!isEditing ? (
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        ) : (
          <>
            <button onClick={saveProfile}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
};
export default UserProfile;
