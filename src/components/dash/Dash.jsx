import React from "react";
import Sidebar from "./SideBar.jsx";
import image from "../../assets/bg1.jpg";

const Dash = ({ title, children }) => {
  return (
    <div className="flex bg-cover" style={{ backgroundImage: `url(${image})` }}>
      {/* <div className="flex bg-gradient-to-r from-slate-800 to-slate-300"> */}
      <Sidebar />
      <div className="flex-1 p-1 mt-20 ">
        <h1 className="text-2xl font-bold mb-4 text-sky-600">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Dash;
