import React from "react";
// import { v4 as uuid } from "uuid";
import BG from "../assets/bg1.jpg";
// import BG from "../../assets/pexels-eberhardgross-691668.jpg";
// import JobListings from "../pages/jobs/JobListings";
// import BGImage from "../../assets/pexels-iriser-1379636.jpg";

const AboutSection = () => {
  const tips = [
    {
      //   id: uuid(),
      id: 10,
      title: "Resume Writing Tips",
      text: [
        "Focus on what you want to do.",
        "Highlight your skills and achievements.",
        "Get certificate for specific role",
      ],
    },
    {
      //   id: uuid(),
      id: 2,
      title: "Cover Letter Tips",
      text: [
        "Customize your cover letter for each job.",
        "Be concise and to the point.",
        "Blah Blah",
      ],
    },
    {
      //   id: uuid(),
      id: 3,
      title: "Interview Preparation Tips",
      text: ["Research the company.", "Prepare answers for common questions."],
    },
    {
      //   id: uuid(),
      id: 4,
      title: "Career Development Tips",
      text: ["Set career goals.", "Continuously learn and improve skills."],
    },
    {
      //   id: uuid(),
      id: 5,
      title: "Self-Study Tips",
      text: [
        "Create a study schedule.",
        "Find reliable resources for learning.",
      ],
    },
  ];

  const sectionStyle = {
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // const tipStyle = {
  //   backgroundImage: `url(${BGImage})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };

  return (
    <section id="about" className="py-20 text-center" style={sectionStyle}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-sky-600 mb-6">
          Find Your Dream Jobs
        </h2>
        {/* <JobListings /> */}
        <p className="text-lg text-gray-700 mb-6">
          We are dedicated to providing the best services to our clients. Our
          team of experts works hard to meet and exceed your expectations.
        </p>
        <div className="flex flex-wrap justify-center">
          {tips.map((tip) => (
            <div
              key={tip.id}
              // style={tipStyle}
              className="bg-gradient-to-r bg-cover shadow-xl backdrop-blur-xl backdrop-filter
               rounded-xl p-5 text-sky-600 text-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2"
            >
              <h1 className="text-3xl font-bold">{tip.title}</h1>
              <ul className="list-disc ml-5 mt-2">
                {tip.text.map((t, index) => (
                  <li key={index}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// import React from "react";
// import BGImage from "../../assets/pexels-iriser-1379636.jpg";
// import BG from "../../assets/pexels-eberhardgross-691668.jpg";
// import { v4 as uuid } from "uuid";

// const AboutSection = () => {
//   const tips = [
//     {
//       id: uuid(),
//       title: "Resume Writing Tips",
//       text: [
//         "Focus on what you want to do.",
//         "Highlight your skills and achievements.",
//         "Get certificate for specific role",
//       ],
//     },
//     {
//       id: uuid(),
//       title: "Cover Letter Tips",
//       text: [
//         "Customize your cover letter for each job.",
//         "Be concise and to the point.",
//         "Blah Blah",
//       ],
//     },
//     {
//       id: uuid(),
//       title: "Interview Preparation Tips",
//       text: ["Research the company.", "Prepare answers for common questions."],
//     },
//     {
//       id: uuid(),
//       title: "Career Development Tips",
//       text: ["Set career goals.", "Continuously learn and improve skills."],
//     },
//     {
//       id: uuid(),
//       title: "Self-Study Tips",
//       text: [
//         "Create a study schedule.",
//         "Find reliable resources for learning.",
//       ],
//     },
//   ];

//   return (
//     <section
//       id="about"
//       className="py-20  text-center"
//       style={{ backgroundImage: `url(${BG})` }}
//     >
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-sky-600 mb-6">
//           Find Your Dream Jobs
//         </h2>
//         <p className="text-lg text-gray-700 mb-6">
//           We are dedicated to providing the best services to our clients. Our
//           team of experts works hard to meet and exceed your expectations.
//         </p>
//         <div className="flex flex-wrap justify-center">
//           {tips.map((tip) => (
//             <div
//               key={tip.id}
//               style={{ backgroundImage: `url(${BGImage})` }}
//               className="bg-gradient-to-r bg-cover shadow-xl backdrop-blur-xl backdrop-filter  rounded-xl p-5 text-sky-600 text-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2"
//             >
//               <h1 className="text-3xl font-bold">{tip.title}</h1>
//               <ul className="list-disc ml-5 mt-2">
//                 {tip.text.map((t, index) => (
//                   <li key={index}>{t}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
