import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { api } from "../services/api";
import auth from "./auth/authSlice";
import { getToken } from "../utils/tokenStorage";

export const store = configureStore({
	reducer: { auth, [api.reducerPath]: api.reducer },
	middleware: getDefaultMiddleware().concat(api.middleware),
	preloadedState: {
		auth: {
			token: getToken(),
			user: null,
			isAuthenticated: false,
		},
	},
});

export const RootState = store.getState;
