import React from "react";
import AppRoutes from "./components/routes/AppRoutes";

const App = () => {
  return (
    <div className="h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <AppRoutes />
    </div>
  );
};

export default App;
