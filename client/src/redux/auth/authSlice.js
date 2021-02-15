import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/api";

const initialState = {
	user: null,
	token: null,
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
				state.token = payload.result.token;
			})
			.addMatcher(api.endpoints.authenticate.matchFulfilled, (state, { payload }) => {
				state.user = payload.result.data;
				state.isAuthenticated = true;
			});
	},
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
