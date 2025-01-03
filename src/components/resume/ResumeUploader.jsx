import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Document, Page, pdfjs } from "react-pdf";
import {
  uploadResume,
  fetchResume,
  previewResume,
} from "../../redux/rdx_/resume/resumeSlice";

import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Required styles
import "react-pdf/dist/esm/Page/TextLayer.css"; // Optional for text highlighting

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumeUploader = () => {
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { data, fileURL, uploadStatus, fetchStatus, previewStatus, error } =
    useSelector((state) => state.resume);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    dispatch(uploadResume(formData));
  };

  const handleFetchResume = () => {
    dispatch(fetchResume());
  };

  const handlePreview = (filename) => {
    dispatch(previewResume(filename));
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const nextPage = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Main container */}
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Resume Uploader</h1>
      <div className="mb-4">
        {/* File input and upload button */}
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleUpload}
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Upload Resume
        </button>
      </div>
      <button
        onClick={handleFetchResume}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full mb-4"
      >
        Fetch Latest Resume
      </button>
      {/* Status messages */}
      {uploadStatus === "loading" && (
        <p className="text-blue-500">Uploading...</p>
      )}
      {uploadStatus === "succeeded" && (
        <p className="text-green-500">Resume uploaded successfully!</p>
      )}
      {uploadStatus === "failed" && (
        <p className="text-red-500">Error: {error}</p>
      )}
      {fetchStatus === "loading" && (
        <p className="text-blue-500">Fetching latest resume...</p>
      )}
      {fetchStatus === "succeeded" && data[0]?.file_name && (
        <div className="border border-gray-200 rounded-md p-4 mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Latest Resume
          </h3>
          <p className="text-gray-600">
            <strong>File Name:</strong> {data[0].file_name}
          </p>
          <button
            onClick={() => handlePreview(data[0].file_name)}
            className="mt-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Preview Resume
          </button>
        </div>
      )}
      {fetchStatus === "failed" && (
        <p className="text-red-500">Error: {error}</p>
      )}
      {/* PDF Preview */}
      {previewStatus === "loading" && (
        <p className="text-blue-500">Loading PDF...</p>
      )}
      {previewStatus === "succeeded" && fileURL && (
        <div className="border border-gray-200 rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            PDF Preview
          </h3>
          <div className="overflow-x-auto">
            {/* Added for horizontal scrolling */}
            <Document file={fileURL} onLoadSuccess={onDocumentLoadSuccess}>
              {/* <Page pageNumber={pageNumber} /> */}
              <Page pageNumber={pageNumber} renderAnnotationLayer={true} />
            </Document>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={prevPage}
              disabled={pageNumber === 1}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <p className="text-gray-600">
              Page {pageNumber} of {numPages}
            </p>
            <button
              onClick={nextPage}
              disabled={pageNumber === numPages}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeUploader;
// Before update theme same code function
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Document, Page, pdfjs } from "react-pdf";
// import {
//   uploadResume,
//   fetchResume,
//   previewResume,
// } from "../../redux/rdx_/resume/resumeSlice";

// // pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
// import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Required styles
// import "react-pdf/dist/esm/Page/TextLayer.css"; // Optional for text highlighting

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// const ResumeUploader = () => {
//   const dispatch = useDispatch();

//   const [file, setFile] = useState(null);
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const { data, fileURL, uploadStatus, fetchStatus, previewStatus, error } =
//     useSelector((state) => state.resume);
//   console.log(fileURL, " check");

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

//   const handlePreview = (filename) => {
//     dispatch(previewResume(filename));
//   };

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//     setPageNumber(1);
//   };

//   const nextPage = () => {
//     if (pageNumber < numPages) setPageNumber(pageNumber + 1);
//   };

//   const prevPage = () => {
//     if (pageNumber > 1) setPageNumber(pageNumber - 1);
//   };

//   return (
//     <div>
//       <h1>Resume Uploader</h1>
//       <input type="file" accept="application/pdf" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload Resume</button>
//       <button onClick={handleFetchResume}>Fetch Latest Resume</button>

//       {/* Upload and Fetch Status */}
//       {uploadStatus === "loading" && <p>Uploading...</p>}
//       {uploadStatus === "succeeded" && <p>Resume uploaded successfully!</p>}
//       {uploadStatus === "failed" && <p>Error: {error}</p>}

//       {fetchStatus === "loading" && <p>Fetching latest resume...</p>}
//       {fetchStatus === "succeeded" && data[0]?.file_name && (
//         <div>
//           <h3>Latest Resume</h3>
//           <p>
//             <strong>File Name:</strong> {data[0].file_name}
//           </p>
//           <button onClick={() => handlePreview(data[0].file_name)}>
//             Preview Resume
//           </button>
//         </div>
//       )}
//       {fetchStatus === "failed" && <p>Error: {error}</p>}

//       {/* Preview Section */}
//       {previewStatus === "loading" && <p>Loading PDF...</p>}
//       {previewStatus === "succeeded" && fileURL && (
//         <div>
//           <h3>PDF Preview</h3>
//           <Document file={fileURL} onLoadSuccess={onDocumentLoadSuccess}>
//             <Page pageNumber={pageNumber} renderAnnotationLayer={true} />
//           </Document>
//           <div>
//             <button onClick={prevPage} disabled={pageNumber === 1}>
//               Previous Page
//             </button>
//             <button onClick={nextPage} disabled={pageNumber === numPages}>
//               Next Page
//             </button>
//             <p>
//               Page {pageNumber} of {numPages}
//             </p>
//           </div>
//         </div>
//       )}
//       {/* {previewStatus === "failed" && <p>Error: {previewError}</p>} */}
//     </div>
//   );
// };

// export default ResumeUploader;
