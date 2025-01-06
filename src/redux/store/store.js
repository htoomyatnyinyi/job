import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import authMiddleware from "./middleware/authMiddleware";
import loggerMiddleware from "./middleware/loggerMiddleware";

const errorHandlingMiddleware = (store) => (next) => (action) => {
  if (action.type.endsWith("/rejected")) {
    console.error("Error occurred:", action.payload);
  }
  return next(action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loggerMiddleware,
      authMiddleware,
      errorHandlingMiddleware
    ),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in non-production environments
});

export default store;
