import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		token: null,
		isAuthenticated: false,
	},
	reducers: {
		logout: () => initialState,
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
