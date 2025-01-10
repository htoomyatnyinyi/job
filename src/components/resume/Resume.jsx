import React from "react";
import ResumeForm from "./ResumeForm";

const Resume = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">John Doe</h1>
          <p className="text-lg text-gray-600">
            Facility Technician | M&E Specialist
          </p>
          <p className="text-gray-500">
            Email: john.doe@example.com | Phone: +123 456 7890
          </p>
        </div>

        {/* Section: Summary */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Summary</h2>
          <p className="text-gray-600 mt-2">
            Experienced Facility Technician with expertise in Building
            Management Systems (BMS), chiller maintenance, and electrical
            systems. Adept at delivering efficient operations and ensuring high
            standards of performance.
          </p>
        </div>

        {/* Section: Experience */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Experience</h2>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Facility Technician
            </h3>
            <p className="text-gray-500">
              Neo Garden Catering Pte Ltd | Nov 2023 - Present
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-600">
              <li>
                Maintained and serviced BMS and chiller systems to ensure
                optimal performance.
              </li>
              <li>
                Conducted routine inspections and repairs for electrical and
                mechanical systems.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700">
              M&E Operation & Maintenance Technician
            </h3>
            <p className="text-gray-500">
              Skysuites Luxury Condominium | Mar 2022 - Nov 2023
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-600">
              <li>
                Monitored building systems, including HVAC and lighting
                controls.
              </li>
              <li>
                Coordinated with contractors for large-scale repair projects.
              </li>
            </ul>
          </div>
        </div>

        {/* Section: Skills */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
          <ul className="list-disc ml-5 mt-2 text-gray-600">
            <li>Building Management Systems (BMS)</li>
            <li>Chiller Maintenance</li>
            <li>Electrical & Mechanical Systems</li>
            <li>Team Leadership</li>
            <li>Preventative Maintenance</li>
          </ul>
        </div>

        {/* Section: Education */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Education</h2>
          <p className="text-gray-600 mt-2">
            Diploma in Electrical Engineering, XYZ Polytechnic | 2018 - 2021
          </p>
        </div>
      </div>
      <ResumeForm />
    </div>
  );
};

export default Resume;
