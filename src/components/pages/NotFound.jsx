import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="text-2xl font-medium text-gray-600">Page Not Found</p>
      <p className="text-lg text-gray-500">
        The page you are looking for doesn't exist.
      </p>

      <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/">Go Back Home</Link>
      </button>
    </div>
  );
}

export default NotFound;
