import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import auth from "./auth/authSlice";

const otherReducerExample = {};

export const store = configureStore({
	reducer: { auth, otherReducerExample },
	middleware: getDefaultMiddleware(),
});
