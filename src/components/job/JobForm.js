// src/components/JobForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createJob } from "../../redux/rdx_/job/jobSlice";

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    salary: "",
    responsibilities: [""],
    requirements: [""],
  });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createJob(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="text-black dark:white p-2">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      ></textarea>
      <input
        type="text"
        name="salary"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
      />

      {/* Responsibilities */}
      <label>Responsibilities:</label>
      {formData.responsibilities.map((resp, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Responsibility ${index + 1}`}
            value={resp}
            onChange={(e) => handleArrayChange(e, index, "responsibilities")}
          />
          <button
            type="button"
            onClick={() => removeField(index, "responsibilities")}
          >
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => addField("responsibilities")}>
        Add Responsibility
      </button>

      {/* Requirements */}
      <label>Requirements:</label>
      {formData.requirements.map((req, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Requirement ${index + 1}`}
            value={req}
            onChange={(e) => handleArrayChange(e, index, "requirements")}
          />
          <button
            type="button"
            onClick={() => removeField(index, "requirements")}
          >
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => addField("requirements")}>
        Add Requirement
      </button>

      <button type="submit" className="text-sky-600 p-2 bg-yellow-600">
        Submit
      </button>
    </form>
  );
};

export default JobForm;
// // src/components/JobForm.js
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createJob } from "../../redux/rdx_/job/jobSlice";

// const JobForm = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     salary: "",
//     responsibilities: [],
//     requirements: [],
//   });
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createJob(formData));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="text-black dark:white p-2">
//       <input
//         type="text"
//         name="title"
//         placeholder="Title"
//         value={formData.title}
//         onChange={handleChange}
//       />
//       <textarea
//         name="description"
//         placeholder="Description"
//         value={formData.description}
//         onChange={handleChange}
//       ></textarea>
//       <input
//         type="text"
//         name="salary"
//         placeholder="Salary"
//         value={formData.salary}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="responsibilities"
//         placeholder="Responsibilities"
//         value={formData.responsibilities}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="requirements"
//         placeholder="Requirements"
//         value={formData.requirements}
//         onChange={handleChange}
//       />
//       {/* Add inputs for responsibilities and requirements */}
//       <button type="submit" className="text-sky-600 p-2 bg-yellow-600">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default JobForm;
