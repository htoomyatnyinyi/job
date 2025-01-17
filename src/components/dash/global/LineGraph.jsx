// import React from "react";
// import { useSelector } from "react-redux";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// // LINE CHART DATA GO INSIDE

// const data = [
//   { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
//   { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
//   { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
//   { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
//   { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
//   { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
//   { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
// ];

// const LineGraph = () => {
//   // const chartData1 = useSelector((state) => state.dashboard.dash.jobs);
//   // const chartData2 = useSelector((state) => state.dashboard.dash.users);
//   // console.log(chartData1);

//   // console.log(chartData.jobs, chartData.users, "at check");
//   // Object.values(chartData).map((e) => console.log(e, " at"));
//   // console.log(chartData, "at line grapgh");
//   // const combinedData = Object.entries(chartData).map(([key, value]) => {});
//   // console.log(combinedData, "combine data");

//   // const dj = chartData.jobs.map((job) => ({
//   //   amt: job.title,
//   //   id: job.id,
//   //   // pv: 7,
//   //   name: job.id,
//   // }));
//   // const du = chartData.users.map((user) => ({
//   //   name: user.username,
//   //   id: user.id,
//   //   // pv: user.id,
//   //   amt: user.id,
//   // }));
//   // console.log(dj, " after destrcute", du, " du data");
//   // const data = chartData1.map((job) => ({
//   //   name: job.title,
//   //   uv: job.applicantsCount, // Replace with the actual property for Y-axis
//   // }));
//   return (
//     <ResponsiveContainer
//       width="90%"
//       height="90%"
//       className="backdrop-blur-md m-2 overflow-auto "
//     >
//       <LineChart
//         data={data}
//         width={90}
//         height={90}
//         margin={{
//           top: 10,
//           right: 10,
//           left: 10,
//           bottom: 10,
//         }}
//         className="p-2"
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line
//           type="monotone"
//           dataKey="pv"
//           stroke="#8884d8"
//           activeDot={{ r: 8 }}
//         />
//         <Line type="monotone" dataKey="id" stroke="#82ca9d" />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// };

// export default LineGraph;

// // src/utils/Dashboard/LineGraph.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400, e: "fe" },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210, e: "a" },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290, e: "b" },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000, e: "c" },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const LineGraph = () => {
  return (
    <ResponsiveContainer
      width="90%"
      height="90%"
      className="backdrop-blur-md m-2 overflow-auto "
    >
      <LineChart
        width={90}
        height={90}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 10,
        }}
        className="p-2"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
