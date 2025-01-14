import React from "react";
// import ProfileHeader from "./ProfileHeader";
// import ResumeUploader from "../resume/ResumeUploader";
// import SavedJobs from "../job/SavedJobs";
// import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
const Profile = () => {
  // const { userId } = useSelector((state) => state.auth.profile.id);
  // console.log(userId);
  return (
    <div>
      <UserProfile />
      {/* <ProfileHeader /> */}
      {/* <SavedJobs userId={userId} /> */}
      {/* <ResumeUploader /> */}
    </div>
  );
};

export default Profile;
