const loggerMiddleware = (store) => (next) => (action) => {
  // console.log("Dispatching action:", action); // Log every action dispatched
  const result = next(action);
  // console.log("Next state:", store.getState()); // Log the updated state
  return result;
};

export default loggerMiddleware;
