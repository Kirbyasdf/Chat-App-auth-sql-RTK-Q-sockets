import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { reducer } from "./reducer";

export const store = configureStore({
	reducer,
	middleware: getDefaultMiddleware().concat(logger),
});
