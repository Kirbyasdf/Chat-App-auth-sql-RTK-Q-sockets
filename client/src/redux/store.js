import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { api } from "../services/api";
import logger from "redux-logger";
import auth from "./auth/authSlice";

export const store = configureStore({
	reducer: { auth, [api.reducerPath]: api.reducer },
	middleware: getDefaultMiddleware().concat(api.middleware, logger),
});

export const RootState = store.getState;
