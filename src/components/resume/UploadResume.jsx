// move to resume uploader components
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { uploadResume, fetchResume } from "../../redux/rdx_/resume/resumeSlice";

// const ResumeUploader = () => {
//   const [file, setFile] = useState(null);
//   const dispatch = useDispatch();
//   const { data, uploadStatus, fetchStatus, error } = useSelector(
//     (state) => state.resume
//   );

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (!file) return;
//     const formData = new FormData();
//     formData.append("file", file);
//     dispatch(uploadResume(formData));
//   };

//   const handleFetchResume = () => {
//     dispatch(fetchResume());
//   };

//   return (
//     <div>
//       <h1>Upload Resume</h1>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       <button onClick={handleFetchResume}>Fetch Latest Resume</button>

//       {uploadStatus === "loading" && <p>Uploading...</p>}
//       {uploadStatus === "succeeded" && <p>Resume uploaded successfully!</p>}
//       {uploadStatus === "failed" && <p>Error: {error}</p>}

//       {fetchStatus === "loading" && <p>Fetching resume...</p>}
//       {fetchStatus === "succeeded" && (
//         <div>
//           <p>Latest Resume:</p>
//           <p>File Name: {data[0]?.file_name}</p>
//           <a href={`/pdf/${data[0]?.file_name}`} target="_blank">
//             View PDF
//           </a>
//         </div>
//       )}
//       {fetchStatus === "failed" && <p>Error: {error}</p>}
//     </div>
//   );
// };

// export default ResumeUploader;

// // update by auto
// // import React, { useState } from "react";

// // const UploadResume = () => {
// //   const [file, setFile] = useState(null);
// //   const [uploadError, setUploadError] = useState(null); // State for error handling

// //   const handleFileChange = (e) => {
// //     const selectedFile = e.target.files[0];

// //     if (!selectedFile) return;

// //     const allowedTypes = [
// //       "application/pdf",
// //       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// //     ];
// //     if (!allowedTypes.includes(selectedFile.type)) {
// //       setUploadError("Please upload a PDF or DOCX file.");
// //       return;
// //     }

// //     setFile(selectedFile);
// //     setUploadError(null);
// //   };

// //   const handleUpload = async () => {
// //     if (!file) return;

// //     const formData = new FormData();
// //     formData.append("file", file);

// //     try {
// //       const response = await fetch("http://localhost:8080/upload-resume", {
// //         method: "POST",
// //         body: formData,
// //         credentials: "include", // Ensures cookies are included in the request
// //       });

// //       if (!response.ok) {
// //         throw new Error("Upload failed. Please try again later.");
// //       }

// //       const data = await response.json();
// //       console.log("Upload successful:", data);

// //       setFile(null);
// //       setUploadError(null);
// //     } catch (error) {
// //       setUploadError(error.message);
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
// //       <h1 className="text-xl font-semibold">Upload Resume</h1>
// //       <input
// //         type="file"
// //         onChange={handleFileChange}
// //         className="bg-sky-400 m-3 p-2 rounded-md"
// //       />
// //       <button
// //         onClick={handleUpload}
// //         disabled={!file}
// //         className="px-4 py-2 bg-blue-500 text-white rounded-md"
// //       >
// //         Upload Resume
// //       </button>
// //       {uploadError && <p className="text-red-500">{uploadError}</p>}
// //     </div>
// //   );
// // };

// // export default UploadResume;
// // // import React, { useState } from "react";

// // // const UploadResume = () => {
// // //   const [file, setFile] = useState(null);
// // //   const [uploadError, setUploadError] = useState(null); // State for error handling

// // //   // Console log for debugging purposes (optional)
// // //   // console.log(file);

// // //   const handleFileChange = (e) => {
// // //     const selectedFile = e.target.files[0];

// // //     // Check if a file is selected
// // //     if (!selectedFile) return;

// // //     // Check allowed file types
// // //     const allowedTypes = [
// // //       "application/pdf",
// // //       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// // //     ];
// // //     if (!allowedTypes.includes(selectedFile.type)) {
// // //       setUploadError("Please upload a PDF or DOCX file."); // Update error state
// // //       return;
// // //     }

// // //     setFile(selectedFile); // Update state with the selected file
// // //     setUploadError(null); // Clear any previous error on successful file selection
// // //   };

// // //   const handleUpload = async () => {
// // //     if (!file) return;

// // //     const formData = new FormData();
// // //     formData.append("file", file);

// // //     const token = localStorage.getItem("mlab"); // Assuming you store the token in localStorage

// // //     try {
// // //       const response = await fetch("http://localhost:8080/upload-resume", {
// // //         method: "POST",
// // //         body: formData,
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       });

// // //       if (!response.ok) {
// // //         // Handle upload errors gracefully
// // //         throw new Error("Upload failed. Please try again later.");
// // //       }

// // //       // Upload successful (if you need to view the response data)
// // //       const data = await response.json();
// // //       console.log("Upload successful:", data);

// // //       // Optionally, you can clear the selected file and error state after a successful upload
// // //       setFile(null);
// // //       setUploadError(null);
// // //     } catch (error) {
// // //       setUploadError(error.message); // Update error state with the error message
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
// // //       <h1 className="text-xl font-semibold">Upload Resume</h1>
// // //       <input
// // //         type="file"
// // //         onChange={handleFileChange}
// // //         className="bg-sky-400 m-3 p-2 rounded-md"
// // //       />
// // //       <button
// // //         onClick={handleUpload}
// // //         disabled={!file} // Disable button if no file selected
// // //         className="px-4 py-2 bg-blue-500 text-white rounded-md "
// // //       >
// // //         Upload Resume
// // //       </button>
// // //       {uploadError && <p className="text-red-500">{uploadError}</p>}{" "}
// // //       {/* Display error message if present */}
// // //     </div>
// // //   );
// // // };

// // // export default UploadResume;
