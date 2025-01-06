const authMiddleware = (store) => (next) => (action) => {
  // console.log("authMiddleware triggered:", action); // Log every action
  if (action.type.endsWith("/rejected") && action.payload?.status === 401) {
    // console.log("Token expired. Removing user info and redirecting...");
    localStorage.removeItem("userInfo"); // Optional: remove user info
    // localStorage.removeItem("mlab"); // Remove token
    store.dispatch({ type: "auth/signout" }); // Dispatch signout action
    window.location.href = "/signin"; // Redirect to login
  }
  return next(action); // Pass the action to the next middleware or reducer
};

export default authMiddleware;
