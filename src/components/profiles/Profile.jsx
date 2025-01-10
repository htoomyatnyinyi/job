import React from "react";
// import ProfileHeader from "./ProfileHeader";
import ResumeUploader from "../resume/ResumeUploader";
// import SavedJobs from "../job/SavedJobs";
// import { useSelector } from "react-redux";

const Profile = () => {
  // const { userId } = useSelector((state) => state.auth.profile.id);
  // console.log(userId);
  return (
    <div>
      {/* <ProfileHeader /> */}
      {/* <SavedJobs userId={userId} /> */}
      <ResumeUploader />
    </div>
  );
};

export default Profile;
