import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { api } from "../services/api";
import logger from "redux-logger";
import auth, { setToken } from "./auth/authSlice";
import { storeToken, getToken } from "../utils/tokenStorage";

// const authCheck = (api) => {
// 	let isFirstAction = true;
// 	return (next) => (action) => {
// 		console.log("action middleware tracking", action);
// 		const tokenBefore = api.getState().user?.token;
// 		console.log("state in middleware", api.getState());
// 		const result = next(action);
// 		console.log("result middleware", result);
// 		if (isFirstAction) {
// 			isFirstAction = false;
// 			const initialToken = getToken();
// 			console.log("token to be set", initialToken);
// 			api.dispatch(setToken(initialToken));
// 		}
// 		const tokenAfter = api.getState().user?.token;
// 		if (tokenBefore !== tokenAfter) {
// 			storeToken(tokenAfter);
// 		}
// 		return result;
// 	};
// };

export const store = configureStore({
	reducer: { auth, [api.reducerPath]: api.reducer },
	middleware: getDefaultMiddleware().concat(api.middleware, logger),
	preloadedState: {
		auth: {
			token: getToken(),
			user: null,
			isAuthenticated: false,
		},
	},
});

export const RootState = store.getState;
