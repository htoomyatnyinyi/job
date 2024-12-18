import React from "react";
import { useSelector } from "react-redux";

const SearchResults = () => {
  const results = useSelector((state) => state.search.results);
  const status = useSelector((state) => state.search.status);

  return (
    <div className="container mx-auto mt-4">
      <div className="w-full max-w-md p-4">
        {status === "loading" && <p className="text-gray-500">Loading...</p>}
        {status === "succeeded" && (
          <ul className="divide-y divide-sky-200">
            {results.map((result) => (
              <li key={result.id} className="py-2 text-green-800">
                <h1>{result.username}</h1>
                {result.phone}
              </li>
            ))}
          </ul>
        )}
        {status === "failed" && <p className="text-red-500">Error occurred</p>}
      </div>
    </div>
  );
};

export default SearchResults;
