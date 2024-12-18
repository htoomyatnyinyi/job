import React from "react";
import ProfileHeader from "./ProfileHeader";
import ResumePreview from "../resume/ResumePreviews";
import UploadResume from "../resume/UploadResume";

const Profile = () => {
  return (
    <div>
      <ProfileHeader />
      <ResumePreview />
      <UploadResume />
    </div>
  );
};

export default Profile;
