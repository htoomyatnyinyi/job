import React, { useEffect, useState } from "react";
import { AiFillSun, AiFillMoon } from "react-icons/ai";
// import { AiFillMoon } from "react-icons/ai";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
    >
      {isDark ? <AiFillSun color="white" /> : <AiFillMoon color="black" />}
    </button>

    // <button onClick={() => setIsDark(!isDark)}>
    //   {/* className="p-2 bg-gray-200 dark:bg-gray-800 rounded" */}
    //   {isDark ? "Light Mode" : "Dark Mode"}
    // </button>
  );
};

export default ThemeToggle;
