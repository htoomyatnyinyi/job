import React from "react";

const Timeline = () => {
  return <div>Timeline</div>;
};

export default Timeline;
// import React from "react";
// import profilePic from "../../assets/bg.jpg";
// // import timelinePic1 from "../../assets/photo1.jpg";
// // import timelinePic2 from "../../assets/photo2.jpg";
// // import timelinePic3 from "../../assets/photo3.jpg";
// import timelinePic1 from "../../assets/bg.jpg";
// import timelinePic2 from "../../assets/bg.jpg";
// import timelinePic3 from "../../assets/bg.jpg";
// import { AiFillAlipayCircle } from "react-icons/ai";

// const Timeline = () => {
//   const timelineItems = [
//     {
//       id: 1,
//       user: {
//         name: "John Doe",
//         profilePicture: profilePic,
//       },
//       time: "2 hours ago",
//       caption: "A beautiful day at the beach!",
//       photo: timelinePic1,
//     },
//     {
//       id: 2,
//       user: {
//         name: "Jane Smith",
//         profilePicture: profilePic,
//       },
//       time: "Yesterday",
//       caption: "Exploring the mountains 🌄",
//       photo: timelinePic2,
//     },
//     {
//       id: 3,
//       user: {
//         name: "Sam Wilson",
//         profilePicture: profilePic,
//       },
//       time: "3 days ago",
//       caption: "City vibes 🏙️",
//       photo: timelinePic3,
//     },
//   ];

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       {timelineItems.map((item) => (
//         <div
//           key={item.id}
//           className="timeline-item flex flex-col mb-8 border-b pb-4"
//         >
//           {/* Header: Profile Picture, Name, Time */}
//           <div className="flex items-center space-x-4">
//             <img
//               src={item.user.profilePicture}
//               alt="Profile"
//               className="w-12 h-12 rounded-full"
//             />
//             <div>
//               <h3 className="font-semibold">{item.user.name}</h3>
//               <p className="text-gray-500 text-sm">{item.time}</p>
//             </div>
//           </div>

//           {/* Caption */}
//           <p className="mt-4 mb-2 text-gray-800">{item.caption}</p>

//           {/* Photo */}
//           <img
//             src={item.photo}
//             alt={item.caption}
//             className="w-full h-auto rounded-lg object-cover"
//           />

//           {/* Like and Comment Buttons */}
//           <div className="flex space-x-4 mt-4">
//             <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
//               <AiFillAlipayCircle />
//             </button>
//             <button className="bg-gray-200 py-1 px-4 rounded hover:bg-gray-300">
//               Comment
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Timeline;
