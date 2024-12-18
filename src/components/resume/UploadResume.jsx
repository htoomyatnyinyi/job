import React, { useState } from "react";

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [uploadError, setUploadError] = useState(null); // State for error handling

  // Console log for debugging purposes (optional)
  // console.log(file);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Check if a file is selected
    if (!selectedFile) return;

    // Check allowed file types
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(selectedFile.type)) {
      setUploadError("Please upload a PDF or DOCX file."); // Update error state
      return;
    }

    setFile(selectedFile); // Update state with the selected file
    setUploadError(null); // Clear any previous error on successful file selection
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const token = localStorage.getItem("mlab"); // Assuming you store the token in localStorage

    try {
      const response = await fetch("http://localhost:8080/upload-resume", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        // Handle upload errors gracefully
        throw new Error("Upload failed. Please try again later.");
      }

      // Upload successful (if you need to view the response data)
      const data = await response.json();
      console.log("Upload successful:", data);

      // Optionally, you can clear the selected file and error state after a successful upload
      setFile(null);
      setUploadError(null);
    } catch (error) {
      setUploadError(error.message); // Update error state with the error message
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-semibold">Upload Resume</h1>
      <input
        type="file"
        onChange={handleFileChange}
        className="bg-sky-400 m-3 p-2 rounded-md"
      />
      <button
        onClick={handleUpload}
        disabled={!file} // Disable button if no file selected
        className="px-4 py-2 bg-blue-500 text-white rounded-md "
      >
        Upload Resume
      </button>
      {uploadError && <p className="text-red-500">{uploadError}</p>}{" "}
      {/* Display error message if present */}
    </div>
  );
};

export default UploadResume;
