import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createJob } from "../../redux/rdx_/job/jobSlice";
import image from "../../assets/bg3.jpg";
import { Link } from "react-router-dom";

const JobForm = () => {
  const initialData = {
    title: "Developer",
    description: "Develop web applications.",
    company_name: "Lab Corp",
    employmentType: "Full-time",
    salary: 2000,
    location: "Myanmar",
    address: "123 Main St",
    license: "Company License",
    category: "Technology",
    company_logo: "logo.png",
    post_img: "image.jpg",
    responsibilities: ["Cooking", "Testing", "Deploying", "blah"],
    requirements: ["Java", "Python", "C", "C++", "Linux", "Window OS", "Macos"],
  };

  const [formData, setFormData] = useState(initialData);
  const [previewMode, setPreviewMode] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (e, index, field) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = e.target.value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const addField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const removeField = (index, field) => {
    const updatedArray = [...formData[field]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [field]: updatedArray });
  };

  const handlePreview = () => {
    setError("");
    setPreviewMode(true);
  };

  const handleEdit = () => {
    setPreviewMode(false);
  };

  const validateForm = () => {
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        if (formData[key].some((item) => !item.trim())) {
          return `Please fill in all ${key}`;
        }
      } else if (!formData[key].toString().trim()) {
        return `The field "${key}" cannot be empty.`;
      }
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    dispatch(createJob(formData));
    setError("");
    alert("Job posting submitted successfully!");
  };

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover bg-center bg-no-repeat p-6 max-w-4xl mx-auto backdrop:blur-lg text-green-600 dark:text-yellow-500 rounded-lg shadow-md"
    >
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>
      )}
      {!previewMode ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <Link
            to="/dashboard"
            className="mb-4 hover:bg-sky-900 p-2  text-center border border-sky-900 border-b-4"
          >
            dashboard
          </Link>
          <h2 className="text-2xl  font-bold text-gray-900 dark:text-white">
            Create Job Posting
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <textarea
              name="description"
              placeholder="Job Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
            <input
              type="text"
              name="salary"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              value={formData.company_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Responsibilities
            </h3>
            {formData.responsibilities.map((resp, index) => (
              <div key={index} className="flex items-center gap-4 mb-2">
                <input
                  type="text"
                  placeholder={`Responsibility ${index + 1}`}
                  value={resp}
                  onChange={(e) =>
                    handleArrayChange(e, index, "responsibilities")
                  }
                  className="flex-1 px-4 py-2 border  bg-blue-500 dark:bg-green-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeField(index, "responsibilities")}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField("responsibilities")}
              className="text-blue-500  hover:text-blue-700"
            >
              + Add Responsibility
            </button>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Requirements
            </h3>
            {formData.requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-4 mb-2">
                <input
                  type="text"
                  placeholder={`Requirement ${index + 1}`}
                  value={req}
                  onChange={(e) => handleArrayChange(e, index, "requirements")}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeField(index, "requirements")}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField("requirements")}
              className="text-blue-500 hover:text-blue-700"
            >
              + Add Requirement
            </button>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handlePreview}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Preview
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Preview Job Posting
          </h2>
          <p>
            <strong>Title:</strong> {formData.title}
          </p>
          <p>
            <strong>Description:</strong> {formData.description}
          </p>
          <p>
            <strong>Salary:</strong> {formData.salary}
          </p>
          <p>
            <strong>Location:</strong> {formData.location}
          </p>
          <p>
            <strong>Address:</strong> {formData.address}
          </p>
          <p>
            <strong>Responsibilities:</strong>
          </p>
          <ul className="list-disc pl-6">
            {formData.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
          <p>
            <strong>Requirements:</strong>
          </p>
          <ul className="list-disc pl-6">
            {formData.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>

          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={handleEdit}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobForm;
