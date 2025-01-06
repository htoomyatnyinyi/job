import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSavedJobs } from "../../redux/rdx_/job/featureSlice";

const SavedJobs = ({ userId }) => {
  const dispatch = useDispatch();
  const { savedJobs, loading } = useSelector((state) => state.features);
  console.log(savedJobs, " check");

  useEffect(() => {
    dispatch(fetchSavedJobs(userId));
  }, [dispatch, userId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="bg-white dark:bg-yellow-500 text-black dark:text-cyan-400">
        Saved Jobs if{" "}
      </h2>
      {savedJobs.map((job) => (
        <div key={job.save_id}>
          <p>Job ID: {job.post_id}</p>
          <p>Saved At: {job.saved_at}</p>
        </div>
      ))}
    </div>
  );
};

export default SavedJobs;
