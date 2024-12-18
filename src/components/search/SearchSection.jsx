import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../../redux/rdx_/search/searchAPI.js";

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const results = useSelector((state) => state.search.results);
  const status = useSelector((state) => state.search.status);

  const handleSearch = () => {
    if (!searchTerm) {
      alert("Missing Words");
      return;
    }
    dispatch(fetchSearchResults(searchTerm));
  };

  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className="w-full max-w-md p-4">
        <div className="flex items-center  border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-green-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
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

export default SearchSection;
