import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { API } from "../services/api";
import auth from "./auth/authSlice";

const otherReducerExample = {};

export const store = configureStore({
	reducer: { auth, [API.reducerPath]: API.reducer },
	middleware: getDefaultMiddleware().concat(API.middleware),
});
