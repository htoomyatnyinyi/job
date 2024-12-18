import React from "react";
// import logo from "../../assets/react.svg";
import bg from "../../assets/bg1.jpg";
import logo from "../../assets/profile.png";

const ProfileHeader = () => {
  const user = {
    name: "John Doe",
    // bio: "Loving life and sharing it with others.",
    bio: "Imperfect action is better than no action.",
    profilePicture: logo,
    coverPhoto: bg,
  };

  return (
    <div className="relative w-full">
      {/* Cover Photo (z-index 0) */}
      <img
        src={user.coverPhoto}
        alt="Cover"
        className="w-full h-60 object-cover z-0"
      />

      {/* Profile Info (z-index 10) */}
      <div className="relative z-10 flex flex-col items-center bg-white p-4 rounded-lg shadow-lg -mt-16 mx-auto max-w-md">
        {/* Profile Picture */}
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white -mt-12"
        />
        <h2 className="text-xl font-bold mt-4">{user.name}</h2>
        <p className="text-gray-600">{user.bio}</p>

        {/* Buttons */}
        <div className="mt-4 flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Add Friend
          </button>
          <button className="bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
