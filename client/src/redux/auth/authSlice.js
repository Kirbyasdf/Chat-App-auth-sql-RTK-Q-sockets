import { createSlice } from "@reduxjs/toolkit";
// import { api } from "../../services/api";
import { removeToken, storeToken } from "../../utils/tokenStorage";

const initialState = {
	user: null,
	token: null,
	isAuthenticated: false,
	isLoading: true,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state) => {
			removeToken();
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
		},
	},
	// extraReducers: (builder) => {
	// 	builder
	// 		.addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
	// 			state.token = payload.result.token;
	// 			storeToken(payload.result.token);
	// 		})
	// 		.addMatcher(api.endpoints.register.matchFulfilled, (state, { payload }) => {
	// 			state.token = payload.result.token;
	// 			storeToken(payload.result.token);
	// 		})
	// 		.addMatcher(api.endpoints.authenticate.matchFulfilled, (state, { payload }) => {
	// 			state.user = payload.result.data;
	// 			state.isAuthenticated = true;
	// 		});
	// },
});

export const { logout, setToken } = authSlice.actions;

export default authSlice.reducer;
