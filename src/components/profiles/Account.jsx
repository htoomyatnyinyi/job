// THIS CODE IS FULLY FUNCTINING
import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../dash/local/Layout";

const Account = () => {
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
      <Layout />
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

export default Account;
