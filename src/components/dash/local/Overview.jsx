import React from "react";
import Dash from "../Dash";
import Info from "./Info";
import LineGraph from "../global/LineGraph";
import ResumeUploader from "../../resume/ResumeUploader";

const Overview = () => {
  return (
    <>
      <Dash>
        <div className="h-screen overflow-y-auto scrollbar-hide">
          <p className="text-white font-bold text-3xl">
            Welcome to the dashboard overview.
          </p>

          <div className="grid grid-cols-2  gap-2  h-1/2">
            <div className="col-span-1">
              <LineGraph />
            </div>
            <Info />
            <div className="col-span-1 grid grid-cols-2 gap-2"></div>
          </div>
        </div>
      </Dash>
      <ResumeUploader />
      {/* <UserLists /> */}
    </>
  );
};

export default Overview;
