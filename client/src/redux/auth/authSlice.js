import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./authReducers";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		loading: "idle",
		user: null,
		isAuthenticated: false,
		error: null,
	},
	reducers: {
		authPending: (state) => {
			if (state.loading === "idle") state.loading = "pending";
		},
		authSuccess: (state, { payload }) => {
			if (state.loading === "pending") {
				state.loading = "idle";
				state.user = payload.user;
				state.isAuthenticated = true;
			}
		},
		authFailed: (state) => {
			if (state.loading === "pending") {
				state.loading = "idle";
				state.form = null;
			}
		},
		loginPending: (state) => {
			if (state.loading === "idle") state.loading = "pending";
		},
		loginSuccess: (state, { payload }) => {
			if (state.loading === "pending") {
				state.loading = "idle";
				state.token = payload;
				state.isAuthenticated = true;
			}
		},
		loginFailed: (state, { payload }) => {
			if (state.loading === "pending") {
				state.loading = "idle";
				state.error = payload.error;
			}
		},
		logout(state) {
			state.user = null;
			state.loading = "idle";
			state.isAuthenticated = false;
		},
	},
});

export const {
	authPending,
	authSuccess,
	authFailed,
	loginPending,
	loginSuccess,
	loginFailed,
	logout,
} = authSlice.actions;

export default authSlice.reducer;
