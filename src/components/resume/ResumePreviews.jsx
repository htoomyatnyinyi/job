import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

// Configure the worker source for PDF rendering
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumePreview = () => {
  const previewResume = useSelector((state) => state.resume.previewResume);
  const [isResumeLoading, setIsResumeLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewError, setPreviewError] = useState(null);

  // Use useEffect to handle fetching and displaying the resume
  useEffect(() => {
    const handlePreview = async () => {
      if (!previewResume) {
        return;
      }

      setIsResumeLoading(true);
      setPreviewError(null);

      try {
        const blob = new Blob([previewResume.data], {
          type: "application/pdf",
        });
        const url = URL.createObjectURL(blob);
        console.log(blob);
        setPreviewUrl(url);
      } catch (error) {
        setPreviewError("Error loading resume preview.");
      } finally {
        setIsResumeLoading(false);
      }
    };

    handlePreview();
  }, [previewResume]); // Re-run useEffect when previewResume changes

  return (
    <div className="resume-preview bg-sky-400 p-2">
      {isResumeLoading && <p>Loading resume preview...</p>}
      {previewError && <p className="text-red-500">{previewError}</p>}
      {previewUrl && (
        <Document file={previewUrl}>
          <Page pageNumber={1} />
        </Document>
      )}
      {!previewResume && <div>No resume to preview</div>}
    </div>
  );
};

export default ResumePreview;

// import React from "react";
// import { useSelector } from "react-redux";
// import { Document, Page } from "react-pdf";
// import { pdfjs } from "react-pdf";

// // Set the workerSrc to load the worker file
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// const ResumePreview = () => {
//   const previewResume = useSelector((state) => state.resume.previewResume);
//   console.log(previewResume, " check at REsumePreview");

//   if (!previewResume) return <div>No resume to preview</div>;

//   const blob = new Blob([previewResume.data], { type: "application/pdf" });
//   const url = URL.createObjectURL(blob);

//   return (
//     <div className="resume-preview bg-sky-400 p-2 ">
//       <Document file={url}>
//         <Page pageNumber={1} />
//       </Document>
//     </div>
//   );
// };

// export default ResumePreview;
