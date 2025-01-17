import React from "react";
import { Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 h-full text-wrap ">
        <ul className="bg-lime-400 rounded-lg p-10 ">
          <li>
            <Link></Link>
          </li>
        </ul>
        <ul className="bg-lime-400 rounded-lg p-10">Resume</ul>
        <ul className="bg-lime-400 rounded-lg p-10">PDF/Word Resume File</ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2 h-full ">
        <h1 className="bg-lime-400 rounded-lg p-10">D</h1>
        <h1 className="bg-lime-400 rounded-lg p-10">E</h1>
        <h1 className="bg-lime-400 rounded-lg p-10">F</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2 h-full ">
        <h1 className="bg-lime-400 rounded-lg p-10">G</h1>
        <h1 className="bg-lime-400 rounded-lg p-10">H</h1>
        <h1 className="bg-lime-400 rounded-lg p-10">I</h1>
      </div>
    </>
  );
};

export default Layout;
