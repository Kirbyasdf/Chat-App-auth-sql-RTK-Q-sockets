import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/api";

const initialState = {
	user: null,
	token:
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEzMzgzNDg0LCJleHAiOjE2MTM0Njk4ODR9.3p7ybrT5Tl6C53se7N20aAUcyQhxqPYP7J29tJcEIA4",
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
