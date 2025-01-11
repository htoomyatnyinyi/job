import React, { useState } from "react";

const ResumeForm = () => {
  const [step, setStep] = useState(1); // Current step
  const [formData, setFormData] = useState({
    personalInfo: { name: "", email: "", phone: "" },
    summary: "",
    experience: [{ role: "", company: "", duration: "", description: "" }],
    skills: [],
    education: { degree: "", school: "", year: "" },
  });

  // Handler to update form data
  const handleChange = (section, key, value, index = null) => {
    if (index !== null) {
      // For array fields like experience
      const updatedArray = [...formData[section]];
      updatedArray[index][key] = value;
      setFormData({ ...formData, [section]: updatedArray });
    } else {
      setFormData({
        ...formData,
        [section]: { ...formData[section], [key]: value },
      });
    }
  };

  // Add new experience entry
  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        { role: "", company: "", duration: "", description: "" },
      ],
    });
  };

  // Navigate to the next/previous step
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  // Form sections
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Step {step}:{" "}
          {step === 1
            ? "Personal Information"
            : step === 2
            ? "Professional Summary"
            : step === 3
            ? "Work Experience"
            : step === 4
            ? "Skills"
            : step === 5
            ? "Education"
            : "Preview & Submit"}
        </h1>

        {step === 1 && (
          <div>
            <label className="block text-gray-600 mb-2">Full Name</label>
            <input
              type="text"
              value={formData.personalInfo.name}
              onChange={(e) =>
                handleChange("personalInfo", "name", e.target.value)
              }
              className="w-full border-gray-300 rounded-lg p-2 mb-4"
            />

            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              value={formData.personalInfo.email}
              onChange={(e) =>
                handleChange("personalInfo", "email", e.target.value)
              }
              className="w-full border-gray-300 rounded-lg p-2 mb-4"
            />

            <label className="block text-gray-600 mb-2">Phone</label>
            <input
              type="tel"
              value={formData.personalInfo.phone}
              onChange={(e) =>
                handleChange("personalInfo", "phone", e.target.value)
              }
              className="w-full border-gray-300 rounded-lg p-2 mb-4"
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="block text-gray-600 mb-2">
              Professional Summary
            </label>
            <textarea
              value={formData.summary}
              onChange={(e) => handleChange("summary", null, e.target.value)}
              className="w-full border-gray-300 rounded-lg p-2 h-24"
            />
          </div>
        )}

        {step === 3 && (
          <div>
            {formData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <label className="block text-gray-600 mb-2">Role</label>
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) =>
                    handleChange("experience", "role", e.target.value, index)
                  }
                  className="w-full border-gray-300 rounded-lg p-2 mb-2"
                />
                <label className="block text-gray-600 mb-2">Company</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) =>
                    handleChange("experience", "company", e.target.value, index)
                  }
                  className="w-full border-gray-300 rounded-lg p-2 mb-2"
                />
                <label className="block text-gray-600 mb-2">Duration</label>
                <input
                  type="text"
                  value={exp.duration}
                  onChange={(e) =>
                    handleChange(
                      "experience",
                      "duration",
                      e.target.value,
                      index
                    )
                  }
                  className="w-full border-gray-300 rounded-lg p-2 mb-2"
                />
                <label className="block text-gray-600 mb-2">Description</label>
                <textarea
                  value={exp.description}
                  onChange={(e) =>
                    handleChange(
                      "experience",
                      "description",
                      e.target.value,
                      index
                    )
                  }
                  className="w-full border-gray-300 rounded-lg p-2"
                />
              </div>
            ))}
            <button
              onClick={addExperience}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Add Experience
            </button>
          </div>
        )}

        {step === 4 && (
          <div>
            <label className="block text-gray-600 mb-2">
              Skills (comma-separated)
            </label>
            <input
              type="text"
              value={formData.skills.join(", ")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  skills: e.target.value
                    .split(",")
                    .map((skill) => skill.trim()),
                })
              }
              className="w-full border-gray-300 rounded-lg p-2"
            />
          </div>
        )}

        {step === 5 && (
          <div>
            <label className="block text-gray-600 mb-2">Degree</label>
            <input
              type="text"
              value={formData.education.degree}
              onChange={(e) =>
                handleChange("education", "degree", e.target.value)
              }
              className="w-full border-gray-300 rounded-lg p-2 mb-4"
            />
            <label className="block text-gray-600 mb-2">School</label>
            <input
              type="text"
              value={formData.education.school}
              onChange={(e) =>
                handleChange("education", "school", e.target.value)
              }
              className="w-full border-gray-300 rounded-lg p-2 mb-4"
            />
            <label className="block text-gray-600 mb-2">Year</label>
            <input
              type="text"
              value={formData.education.year}
              onChange={(e) =>
                handleChange("education", "year", e.target.value)
              }
              className="w-full border-gray-300 rounded-lg p-2"
            />
          </div>
        )}

        {step === 6 && (
          <div>
            <h3 className="text-lg font-semibold">Preview</h3>
            <pre className="bg-gray-100 p-4 rounded">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        )}

        <div className="mt-6 flex justify-between">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Back
            </button>
          )}
          {step < 6 ? (
            <button
              onClick={nextStep}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => alert("Resume submitted!")}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
// {
//     "personalInfo": {
//       "name": "Htoo Myat Nyi Nyi",
//       "email": "htoomyatnyinyi@gmail.com",
//       "phone": "98234908"
//     },
//     "summary": {
//       "null": "[object Object]f"
//     },
//     "experience": [
//       {
//         "role": "fewfweaf",
//         "company": "fwaefawef",
//         "duration": "2019-2024",
//         "description": "flakwejflakwfjlkefja;wklefjakl;wefjawlekfjl"
//       },
//       {
//         "role": "fawefwef",
//         "company": "fawefef",
//         "duration": "fawefe",
//         "description": "fawef"
//       }
//     ],
//     "skills": [
//       "fwae",
//       "felkfj",
//       "fjlawekfjkwef",
//       "welfkjawef",
//       "fwealkfjwelkf",
//       "welkfjawelkf",
//       ""
//     ],
//     "education": {
//       "degree": "bacheoler degree",
//       "school": "fjalwekfjlkjfa school",
//       "year": "2342"
//     }
//   }
