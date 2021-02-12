import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";

const authSlice = createSlice({
	name: "auth",
	initialState: { loading: "idle" },
	reducers,
});

export const {
	authPending,
	authSuccess,
	authFailed,
	loginPending,
	loginSuccess,
	loginFailed,
	registerSuccess,
	registerPending,
	registerFailed,
	resetCodePending,
	resetCodeSuccess,
	resetCodeFailed,
	forgotPasswordPending,
	forgotPasswordSuccess,
	forgotPasswordFailed,
	resetPasswordPending,
	resetPasswordSuccess,
	resetPasswordFailed,
	logout,
} = authSlice.actions;

export default authSlice.reducer;
