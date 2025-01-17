import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount, updateCount } from "../../../redux/rdx_/dashboard/dashSlice";

const DashboardMain = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.auth.profile);
  const { jobs, users } = useSelector((state) => state.dashboard.dash);
  const stats = useSelector((state) => state.dashboard.stats);

  //   console.log(
  //     jobs.length,
  //     users.length,
  //     useSelector((state) => state.dashboard.stats)
  //   );
  return (
    <div className="flex-1 bg-sky-950  text-sky-600 dark:text-teal-500 p-6">
      <h2 className="text-xl font-bold mb-6">Welcome, {username}</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-bold">{stat.title}</h3>
            <p className="text-2xl font-bold text-blue-600">{stat.count}</p>
          </div>
        ))}
      </div>

      {/* Recent Applications */}
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">Recent Applications</h3>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Software Engineer</span>
              <span className="text-green-600">Interview Scheduled</span>
            </li>
            <li className="flex justify-between">
              <span>Data Analyst</span>
              <span className="text-yellow-600">Pending Review</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Recent Lists  */}
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">Recent Activities</h3>
        {/* Users */}
        <div className=" m-1 shadow-md rounded-lg">
          <ul className="space-y-3">
            <li className="">
              {users.map((user) => (
                <div className="flex justify-between backdrop-blur-2xl shadow-2xl p-2 m-1">
                  <span className="">
                    {user.username ? <h1>{user.username}</h1> : <h1>N/A</h1>}
                  </span>
                  <span>
                    {user.email ? <h1>{user.email}</h1> : <h1>N/A</h1>}
                  </span>
                  <span>
                    {user.phone ? <h3>{user.phone}</h3> : <h3>N/A</h3>}
                  </span>
                  {/* Action Button */}
                  <div className="">
                    <button
                      className="p-1 bg-red"
                      onClick={() => dispatch(setCount())}
                    >
                      Delete count
                    </button>
                    <button
                      className="bg-white"
                      onClick={() => dispatch(updateCount())}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </li>
          </ul>
        </div>
        {/* Jobs */}
        <div className=" m-1 shadow-md p-4 rounded-lg">
          <ul className="space-y-3">
            <li className="">
              {jobs.map((job) => (
                <div className="backdrop-blur-2xl shadow-2xl p-2 m-1 ">
                  <span className="">
                    {job.title ? <h1>{job.title}</h1> : <h1>N/A</h1>}
                  </span>
                  <span>
                    {job.company_name ? (
                      <h1>{job.company_name}</h1>
                    ) : (
                      <h1>N/A</h1>
                    )}
                  </span>
                  <span>
                    {job.salary ? <h3>{job.salary}</h3> : <h3>N/A</h3>}
                  </span>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
