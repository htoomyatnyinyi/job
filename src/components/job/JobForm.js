// src/components/JobForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createJob } from "../../redux/rdx_/job/jobSlice";

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    salary: "",
    responsibilities: [],
    requirements: [],
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createJob(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {/* Add inputs for responsibilities and requirements */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobForm;
