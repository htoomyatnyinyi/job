import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../../redux/rdx_/search/searchAPI.js";

const Search = () => {
  const searchTermRef = useRef(null);
  const dispatch = useDispatch();

  const results = useSelector((state) => state.search.results);
  const status = useSelector((state) => state.search.status);

  const handleSearch = () => {
    const searchTerm = searchTermRef.current.value;

    if (!searchTerm) {
      alert("Missing Words");
      return;
    }

    dispatch(fetchSearchResults(searchTerm));
  };

  return (
    <div className="flex flex-col items-center justify-center relative">
      {/* p-4 adjust to p-auto */}
      <div className="w-full max-w-md p-auto">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            ref={searchTermRef}
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
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
              <li key={result.id} className="py-2 text-sky-400">
                <h1>{result.title}</h1>
                {result.description}
                <p>
                  $ {result.salary} {result.employmentType}
                </p>
              </li>
            ))}
          </ul>
        )}
        {status === "failed" && <p className="text-red-500">Error occurred</p>}
      </div>
    </div>
  );
};

export default Search;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchSearchResults } from "../../redux/rdx_/search/searchAPI.js";
// import { Link } from "react-router-dom";
// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const dispatch = useDispatch();

//   const results = useSelector((state) => state.search.results);
//   const status = useSelector((state) => state.search.status);

//   console.log(results, "check");

//   const handleSearch = () => {
//     if (!searchTerm) {
//       alert("Missing Words");
//       return;
//     }
//     dispatch(fetchSearchResults(searchTerm));
//   };

//   return (
//     <div className=" flex flex-col items-center justify-center ">
//       <div className="w-full max-w-md p-4">
//         <div className="flex items-center  border-b-2 border-teal-500 py-2">
//           <input
//             className="appearance-none bg-transparent border-none w-full text-green-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Search..."
//           />
//           <button
//             className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
//             onClick={handleSearch}
//           >
//             Search
//           </button>
//         </div>
//       </div>
//       <div className="w-full max-w-md p-4">
//         {status === "loading" && <p className="text-gray-500">Loading...</p>}

//         {status === "succeeded" && (
//           <ul className="divide-y divide-sky-200">
//             {results.map((result) => (
//               <div>
//                 <Link className="text-white">TEST Here</Link>
//                 <li key={result.id} className="py-2 text-sky-400">
//                   <h1>{result.title}</h1> {result.description}
//                   <p>
//                     $ {result.salary} {result.employmentType}
//                   </p>
//                 </li>
//               </div>
//             ))}
//           </ul>
//         )}

//         {status === "failed" && <p className="text-red-500">Error occurred</p>}
//       </div>
//     </div>
//   );
// };

// export default Search;
